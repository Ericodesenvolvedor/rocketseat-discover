const URL = "https://api.github.com/users/Ericodesenvolvedor"

fetch(URL).then(response => {
    response.json().then(data => {
        fetch(data.repos_url).then(resp => {
            resp.json().then(d => console.log(d))
        })
    })
});