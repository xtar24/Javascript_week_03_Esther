const mountains = [
    { name: "kilimangaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
];

function generateTable(data) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach | (key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    data.forEach(mountains => {
        const row = document.createElement("tr");

        Object.values(mountain).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;

            if (typeof value === "number") {
                cell.style.textAlign = "right";
            }

            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    return table;
};

const tableElement = generateTable(mountains);
document.getElementById("mountains").appendChild(tableElement);