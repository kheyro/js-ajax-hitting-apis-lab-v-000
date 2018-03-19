function getRepositories() {
  const req = new XMLHttpRequest()
  let username = document.getElementById('username').value
  req.addEventListener("load", displayRepositories);
  req.addEventListener("load", displayCommits);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function displayRepositories() {
  let repo = JSON.parse(this.responseText)
  console.log(repo)
  let repoList = `<ul>${repo.map(repo => '<li><a data-repo="' +  + '" href="' + repo.url + '">' + repo.name + '</a></li>' ).join('')}</ul>`
  document.getElementById('repositories').innerHTML = repoList
}
