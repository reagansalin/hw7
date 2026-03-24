document.querySelector("#searchBtn").addEventListener("click", () => {
   const login = document.querySelector("#loginInput").value;
   const url = `https://api.github.com/users/${login}`;

   fetch(url)
      .then(response => response.json())
      .then(data => {

         // Display profile picture
         document.querySelector("#avatar").innerHTML =
            `<img src="${data.avatar_url}" width="150">`;

         // Build table AFTER lookup
         const table = document.querySelector("#profileTable");

         table.innerHTML = `
            <tr><th>Name</th><td>${data.name}</td></tr>
            <tr><th>Blog</th><td>${data.blog}</td></tr>
            <tr><th>Created</th><td>${data.created_at}</td></tr>
         `;
      })
      .catch(error => console.error("Error fetching GitHub user:", error));
});

