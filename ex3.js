document.querySelector("#sendBtn").addEventListener("click", () => {

   const data = {
      name: "Reagan",
      countries: [
         { name: "Cambodia", year: 2024 },
         { name: "Taiwan", year: 2024 },
         { name: "Mexico", year: 2015 }
      ]
   };

   fetch("https://thejsway-server.herokuapp.com/api/countries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
   })
   .then(response => response.text())
   .then(message => console.log(message))
   .catch(error => console.error("Error sending data:", error));
});
