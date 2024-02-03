require('dotenv').config()
const express = require('express')
const app = express()  //now here app gets all the functionalities of express--> get, listen..etc.
const port = 3000

const githubData= {
  "login": "bittu-roy",
  "id": 103169318,
  "node_id": "U_kgDOBiY9Jg",
  "avatar_url": "https://avatars.githubusercontent.com/u/103169318?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bittu-roy",
  "html_url": "https://github.com/bittu-roy",
  "followers_url": "https://api.github.com/users/bittu-roy/followers",
  "following_url": "https://api.github.com/users/bittu-roy/following{/other_user}",
  "gists_url": "https://api.github.com/users/bittu-roy/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bittu-roy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bittu-roy/subscriptions",
  "organizations_url": "https://api.github.com/users/bittu-roy/orgs",
  "repos_url": "https://api.github.com/users/bittu-roy/repos",
  "events_url": "https://api.github.com/users/bittu-roy/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bittu-roy/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Rajarshee Roy",
  "company": null,
  "blog": "",
  "location": "Durgapur, West Bengal",
  "email": null,
  "hireable": true,
  "bio": "Currently a CSE undergrad longing to become a Software Engineer, having a keen interest in web dev. \r\nI am currently studying at Kalinga Institute, Bhubaneswar.",
  "twitter_username": "RajarsheeRoy2",
  "public_repos": 22,
  "public_gists": 0,
  "followers": 0,
  "following": 8,
  "created_at": "2022-04-07T05:58:29Z",
  "updated_at": "2024-02-02T08:19:03Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('<h1>This is my twitter account!</h1>')
})

app.get('/github', (req, res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})