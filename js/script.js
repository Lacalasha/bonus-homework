"use strict";
const gitUser = document.querySelector(".gitUser");
const input = document.getElementById("userName");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const username = input.value.trim();
  if (!username) {
    alert("Input is empty");
    return;
  }

  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      gitUser.innerHTML = `
        <input type="text" id="userName" placeholder="Search for Github user" />
        <p>Name: ${data.login}</p>
        <img src="${data.avatar_url}" alt="${data.name}" width="100" />
        <p>Join date: ${data.created_at}</p>
        <p>Bio: ${data.bio}</p>    
        <p>Repository: ${data.public_repos}</p>
        <p>Follower: ${data.followers}</p>
        <p>Following: ${data.following}</p>
      `;
    })
    .catch((errors) => {});
});
z;
