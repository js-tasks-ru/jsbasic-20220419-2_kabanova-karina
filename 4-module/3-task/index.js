function  highlight(table) {
  for (let tableColl of table.tBodies){
    for (let rows of table.rows){
      for (let cells of rows.cells){
        switch (cells.cellIndex){
          case 3:
            cells.dataset.available === "true"? rows.classList.add('available') :
            cells.dataset.available === "false"? rows.classList.add('unavailable') :
            rows.setAttribute('hidden', 'true');
            break;
            case 2:
              cells.innerText === 'm'? rows.classList.add('male') :rows.classList.add('female');
              case 1:
                +cells.innerText < 18 ? rows.style.textDecoration ="line-through": '';
                break;
}}}}}