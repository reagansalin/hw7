const url = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";

fetch(url)
   .then(response => response.json())
   .then(data => {
      const table = document.querySelector("#paintings");

      data.forEach(painting => {
         const row = document.createElement("tr");

         row.innerHTML = `
            <td>${painting.name}</td>
            <td>${painting.year}</td>
            <td>${painting.artist}</td>
         `;

         table.appendChild(row);
      });
   })
   .catch(error => console.error("Error fetching paintings:", error));

