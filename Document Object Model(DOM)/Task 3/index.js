function changeContent() {
    let table = document.getElementById("myTable");
    let row = 1;
    let col = 1;
    let newContent = "New content for row 2, column 2";
    let cell = table.rows[row].cells[col];

    cell.innerHTML = newContent;
}