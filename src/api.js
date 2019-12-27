//basic auth
const basicAuth = "Basic " +btoa("admin:district");
const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class Api {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

    //fech method
    getData=()=> {

        return fetch(`${this.config.baseUrl}/programs`,{
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .then(response => {
                return response.json();
            })
            .catch(error => error)
             
    };
   
}

export default new Api();
