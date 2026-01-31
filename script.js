var newItem = document.getElementById("newItem");

var saveButton = document.getElementById("saveButton");

var nothingToDo = document.getElementById("nothingToDo");


saveButton.addEventListener("click", onClickSaveButton);


function onClickSaveButton() {
    var newItemValue = newItem.value;
        if (newItemValue.trim()==""){
            newItem.value = null;
            return;
        } 
        var itemsArea = document.getElementById("items");
        var newTr = document.createElement("tr");
        newTr.innerHTML = 
                `<td><button class="done"></button></td>
                <td>${newItemValue}</td>
                <td><button class="edit"></button></td>
                <td><button class="bin"></button></td>`;
        itemsArea.appendChild(newTr);
        newItem.value = null;
        nothingToDo.style.display="none";
}


var itemsArea = document.getElementById("items");

itemsArea.addEventListener("click", onClickDoneButton);

function onClickDoneButton(e){
    if (e.target.classList.contains("done")) {
        e.target.classList.toggle("complete");
    }
}





