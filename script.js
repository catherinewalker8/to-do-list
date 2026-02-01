var newItem = document.getElementById("newItem");

var saveButton = document.getElementById("saveButton");

var nothingToDo = document.getElementById("nothingToDo");

var rowBeingEdited = null;

var itemsArea = document.getElementById("items");


saveButton.addEventListener("click", onClickSaveButton);

itemsArea.addEventListener("click", onClickListButton);


function onClickSaveButton() {
        var newItemValue = newItem.value;
        if (rowBeingEdited != null){
            rowBeingEdited.cells[1].innerText = newItemValue;
            rowBeingEdited = null;
        }
        else{
        if (newItemValue.trim() == ""){
            newItem.value = null;
            return;
        } 
        var itemsArea = document.getElementById("items");
        var newTr = document.createElement("tr");
        newTr.innerHTML = 
                `<tr>
                <td><button class="done"></button></td>
                <td>${newItemValue}</td>
                <td><button class="edit" data-bs-toggle="modal"></button></td>
                <td><button class="bin"></button></td>
                <tr>`;
        itemsArea.appendChild(newTr);
        }
        newItem.value = null;
        nothingToDo.style.display = "none";
}



function onClickListButton(e){
    if (e.target.classList.contains("done")) {
        e.target.classList.toggle("complete");
    }
    else if (e.target.classList.contains("bin")) {
        var row = e.target.closest("tr");
        row.remove();
    }

    // Editing rows using the prompt box method:

    // else if (e.target.classList.contains("edit")){
    //     var row = e.target.closest("tr");
    //     var cell = row.cells[1];
    //     var updatedItem = prompt("Edit your task: ", cell.innerText);
    // if (updatedItem != null && updatedItem.trim() != "") {
    //     cell.innerText = updatedItem;
    // }
    // }

    //Editing rows using the modal I created earlier

    else if (e.target.classList.contains("edit")){
        var cell = row.cells[1];
        var modalInput = document.querySelector("input");
        modalInput.value = cell.innerText;
    }


    var itemsArea = document.getElementById("items");
    if (itemsArea.children.length === 0) {
        nothingToDo.style.display = "block";
    }
}


// function onClickEditButton(e){
//     if(e.target.classList.contains("edit")){
//         var itemText = e.target.closest("tr[1]")
//     }
// }


// var binButton = document.getElementById("bin");

// var thisItem = document.getElementById("item1");

// binButton.addEventListener("click", onClickBinButton);

// function onClickBinButton(){
//      thisItem.style.display="none";
// }





