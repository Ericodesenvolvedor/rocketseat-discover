async function getReposGithub() {
    const response = await fetch('https://api.github.com/users/Ericodesenvolvedor');
    const data = await response.json();
    const reposFetch = await fetch(data.repos_url);
    return reposFetch;
}

getReposGithub();