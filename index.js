function getRepositories() {
  const req = new XMLHttpRequest()
  let username = document.getElementById('username').value
  req.addEventListener("load", displayRepositories);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function displayRepositories() {
  let repo = JSON.parse(this.responseText)
  console.log(repo)
  let repoList = `<ul>${repo.map(repo => '<li><a data-repo="' + repo.name + '" href="#" onclick="getCommits(this)">' + repo.name + '</a> - <a href="' + repo.url + '">' + repo.url + '</a></li>' ).join('')}</ul>`
  document.getElementById('repositories').innerHTML = repoList
}

function getCommits(el) {
  let repo = el.dataset.repo
  let username = document.getElementById('username').value
  req.addEventListener("load", displayCommits);
  req.open("GET", 'https://api.github.com/repos/' + username + '/' + repo + '/commits')
  req.send()
}

function displayCommits() {
  let commits = JSON.parse(this.responseText)
  console.log(commits)
  let commitsList = `<ul>${commits.map(commit => '<li>' + commit.message + '</li>' ).join('')}</ul>`
  document.getElementById('details').innerHTML = commitsList
}
