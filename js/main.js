// Replace ./data.json with your JSON feed
fetch("json/list.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    data.forEach((item) => {
      var locateContents = document.getElementById("table_body");
      var createTr = document.createElement("tr");
      locateContents.appendChild(createTr);

      var newTiltle = document.createElement("td");
      newTiltle.innerHTML = item.title;
      createTr.appendChild(newTiltle);

      var newHref = document.createElement("td");
      var addLink = document.createElement("a");
      addLink.innerText = item.href;
      addLink.setAttribute("href", item.href);
      newHref.appendChild(addLink);
      createTr.appendChild(newHref);
      var editTd = document.createElement("td");
      createTr.appendChild(editTd);

      var editIcon = document.createElement("i");
      var editLink = document.createElement("a");
      editLink.setAttribute("href", item.id);
      editLink.appendChild(editIcon);
      console.log(editLink.href);

      editIcon.className = "fa fa-edit";
      editTd.appendChild(editLink);

      var trashTd = document.createElement("td");
      createTr.appendChild(trashTd);

      var deleteIcon = document.createElement("i");
      deleteIcon.className = "fa fa-trash";
      trashTd.appendChild(deleteIcon);

      deleteIcon.addEventListener("click", deleteObject);
      editIcon.addEventListener("click", editObject);
    });
  })
  .catch((err) => {
    // Do something for an error here
  });

function deleteObject() {
  const buttonclicked = event.target;
  buttonclicked.parentElement.parentElement.remove();
}
function editObject() {
  const editButtonClicked = event.target;
  console.log(editButtonClicked.parentElement.parentElement);
}

// var titleKeys = Object.keys(data[0]);
// console.log(titleKeys[1]);
// //console.log(Object.keys(data[0]));
// var numberOfTitles = Object.keys(data[0]).length;

// var locateTitles = document.getElementById("table_tr");
// console.log(locateTitles);
// var newTitle = document.createElement("th");
// newTitle.setAttribute("scope", "col");
// newTiltle.innerText = "raja";
// locateTitles.appendChild(newTitle);

// // for (let i = 1; i < numberOfTitles; i++) {
// //   var newTitle = document.createElement("th");
// //   newTitle.setAttribute("scope", "col");
// //   newTiltle.innerHTML = titleKeys[i];
// //   locateTitles.appendChild(newTitle);
// // }
