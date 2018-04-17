export default class Api {
  
    static get(route) {
      return this.xhr(route, null, 'GET');
    }
  
    static put(route, params) {
      return this.xhr(route, params, 'PUT')
    }
  
    static post(route, params) {
      return this.xhr(route, params, 'POST')
    }
  
    static delete(route, params) {
      return this.xhr(route, params, 'DELETE')
    }
  
    static xhr(route, params, verb) {
      const host = 'https://api.santiane.fr/etna/mobilecamp'
      const url = `${host}${route}`
      let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
      return fetch(url, options).then( resp => {
        let json = resp.json();
        alert(JSON.stringify(json));
        if (resp.ok) {
          return json
        }
        return json.then(err => {throw err});
      }).then( json => json.results );
    }
}