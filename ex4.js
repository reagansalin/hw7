document.querySelector("#infoForm").addEventListener("submit", event => {
   event.preventDefault();

   const formData = new FormData(event.target);
   const table = document.querySelector("#resultsTable");

   // Start fresh — add header row only AFTER submit
   table.innerHTML = `<h2>Form Data Entered</h2>
      <tr>
         <th>Key</th>
         <th>Value</th>
      </tr>
   `;

   for (const [key, value] of formData.entries()) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${key}</td><td>${value}</td>`;
      table.appendChild(row);
   }
});
