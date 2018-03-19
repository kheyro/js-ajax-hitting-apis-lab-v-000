function getRepositories() {
  const req = new XMLHttpRequest()
  let username = document.getElementById('username').value
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function showRepositories() {
  let repo = JSON.parse(this.responseText)
  console.log(repo)
  let repoList = `<ul>${repo.map(repo => '<li>' + repo.name + '</li>' ).join('')}></ul>`
  document.getElementById('repositories').innerHTML = repoList
}
