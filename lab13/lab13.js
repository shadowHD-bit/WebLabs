function addRow(id){
    var tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    var row = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.appendChild(document.createTextNode(" "))

    var td2 = document.createElement("td")
    td2.appendChild (document.createTextNode(" "))
    
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
}

function remRow(id){
    var table = document.getElementById(id);
    var rowCount = table.rows.length;

    if(rowCount>1){

    table.deleteRow(rowCount -1);
    }
    else{
        alert("Вы не можете удалить основную строку таблицы... Добавьте столбцы, тогда сможете их удалить...")
    }
}