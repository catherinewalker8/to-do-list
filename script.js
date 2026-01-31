var newItem = document.getElementById("newItem");

var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", onClickSaveButton);


function onClickSaveButton() {
  var newItemValue = newItem.value;
  var itemsArea = document.getElementById("items");
  var newTr = document.createElement("tr");
  newTr.innerHTML = 
        `<td>${newItemValue}</td>
        <td><button class="edit"></button></td>
        <td><button class="done"></button></td>
        <td><button class="bin"></button></td>`;
  itemsArea.appendChild(newTr);
  newItem.value = null;
}