function makeDiagonalRed(table) {
  let rows = table.rows 
    for (let a = 0; a < rows.length; a++){ 
      rows[a].cells[a].style.backgroundColor = 'red'
    }
}
