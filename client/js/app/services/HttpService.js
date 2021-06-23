class HttpService {
  get(url) {      
    return fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(error => error.message);
  }

}
