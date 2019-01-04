var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
]

  function buildTable(arrObj) {

    var table = document.createElement("table");

    //table heading
    
    var tableHeadRow = document.createElement("tr");

    for (key in arrObj[0]) {

      var tableHeadCell = document.createElement("th");

      tableHeadCell.innerText = key;

      tableHeadRow.appendChild(tableHeadCell);

    }

    table.appendChild(tableHeadRow);

    //table body

    arrObj.forEach(function(el, index){

      var tableBodyRow = document.createElement("tr");

      for (key in arrObj[index]) {

        var tableBodyCell = document.createElement("td");

        tableBodyCell.innerText = arrObj[index][key];

        if (typeof arrObj[index][key] == "number") {

            tableBodyCell.style.textAlign = "right";

        }

        tableBodyRow.appendChild(tableBodyCell);

      }

     table.appendChild(tableBodyRow);

    });

   document.body.appendChild(table);

  }

buildTable(MOUNTAINS);
