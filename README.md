# MySentiane

CodeCamp Mobile ETNA - Mon Sentiane

Using React


API MonSantiane - Etna

LOGIN
role : Permet de se s'authentifier sur l'api
url : https://api.santiane.fr/etna/mobilecamp/login
type: GET
arguments : filter avec login, password et auto_refresh
exemple : https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"etna@santiane.fr","password":"codecampetna", "auto_refresh":1}


LOGOUT
rôle : Permet de supprimer l'authentification courante
url : https://api.santiane.fr/etna/mobilecamp/logout
type: DELETE


CONTRATS
rôle : Permet de récupérer les contrats
url : https://api.santiane.fr/etna/mobilecamp/contract
type: GET
arguments : filter avec limit ou id
exemple : https://api.santiane.fr/etna/mobilecamp/contract?filter={"limit":10}
exemple : https://api.santiane.fr/etna/mobilecamp/contract?id=2570


DOCUMENT_CATEGORY
rôle : Permet de récuperer les catégories de documents
url : https://api.santiane.fr/etna/mobilecamp/Document_category
type : GET
arguments : type all
exemple : https://api.santiane.fr/etna/mobilecamp/Document_category?type=all


DOCUMENT
rôle : Permet de récupérer les documents
url : https://api.santiane.fr/etna/mobilecamp/document
type : GET
arguments : filter avec contract_id ou id
exemple : https://api.santiane.fr/etna/mobilecamp/document?filter={"contract_id":2570}
exemple : https://api.santiane.fr/etna/mobilecamp/document?id=20583


FORMULA_DOCUMENT
rôle : Permet de récupérer les documents relatifs à une formule
url : https://api.santiane.fr/etna/mobilecamp/formula_document
type : GET
arguments : filter avec formula_id
exmeple : https://api.santiane.fr/etna/mobilecamp/formula_document?filter={"formula_id":3852}


PERSON
rôle : Permet de récupérer les information de personne
url : https://api.santiane.fr/etna/mobilecamp/person
type : GET
arguments : filter avec contract_id
exemple : https://api.santiane.fr/etna/mobilecamp/person?filter={"contract_id":"2570"}
