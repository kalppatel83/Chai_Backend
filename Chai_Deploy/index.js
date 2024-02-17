require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "kalppatel83",
  id: 57519045,
  node_id: "MDQ6VXNlcjU3NTE5MDQ1",
  avatar_url: "https://avatars.githubusercontent.com/u/57519045?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/kalppatel83",
  html_url: "https://github.com/kalppatel83",
  followers_url: "https://api.github.com/users/kalppatel83/followers",
  following_url:
    "https://api.github.com/users/kalppatel83/following{/other_user}",
  gists_url: "https://api.github.com/users/kalppatel83/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/kalppatel83/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/kalppatel83/subscriptions",
  organizations_url: "https://api.github.com/users/kalppatel83/orgs",
  repos_url: "https://api.github.com/users/kalppatel83/repos",
  events_url: "https://api.github.com/users/kalppatel83/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/kalppatel83/received_events",
  type: "User",
  site_admin: false,
  name: "Kalp Patel",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: "kalppatel83",
  public_repos: 27,
  public_gists: 0,
  followers: 17,
  following: 135,
  created_at: "2019-11-08T06:33:26Z",
  updated_at: "2024-02-13T12:50:56Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("kalppatel83");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login at Chai aur code</h1>");
});
app.get("/chai", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
