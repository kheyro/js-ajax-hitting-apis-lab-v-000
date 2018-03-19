function getRepositories() {
  const req = new XMLHttpRequest()
  let username = document.getElementById('username')
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function showRepositories() {
  let repo = JSON.parse(this.responseText)
}
