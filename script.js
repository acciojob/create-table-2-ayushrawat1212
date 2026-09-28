function createTable() {

    const rn = Number(prompt("Input number of rows"));
    const cn = Number(prompt("Input number of columns"));

    if (Number.isNaN(rn) || Number.isNaN(cn)) {
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Incorrect Input");
        return;
    }

    if (!Number.isInteger(rn) || !Number.isInteger(cn)) {
        return;
    }

    const table = document.getElementById("myTable");

    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {

        const newRow = document.createElement("tr");

        for (let j = 0; j < cn; j++) {

            const cell = document.createElement("td");

            cell.textContent = `Row-${i} Column-${j}`;

            newRow.appendChild(cell);
        }

        table.appendChild(newRow);
    }
}
