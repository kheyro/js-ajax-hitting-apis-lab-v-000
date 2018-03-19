function getRepositories() {
  const req = new XMLHttpRequest()
  let username = document.getElementById('username')
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
