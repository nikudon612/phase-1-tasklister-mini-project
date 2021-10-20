// const form = document.querySelector("form");
// // const form = document.querySelector("#create-task-form");
// // console.log(form);

// //get list
// const unorderedList = document.getElementById("tasks");

// function createNewToDo(event) {
//   //prevent default
//   event.preventDefault();

//   //extract value of input
//   const task = document.querySelector("#new-task-description");
//   console.log(`The task value is: ${task.value}`);

//   //create new list element
//   const newList = document.createElement("li");
// }
// document.addEventListener("DOMContentLoaded", () => {
//   //get element by ID
//   // create event listener when submitting to form
//   document.addEventListener("submit", createNewToDo);

//   //create new list
//   const newList = document.createElement("li");
//   newList.textContent = task.value;
//   //append list to parent
//   unorderedList.append(newList);

//   task.value = "";
// });

// NEW CODE

const form = document.querySelector("form");

const ulList = document.getElementById("tasks");

function createNewToDo(event) {
  event.preventDefault();

  const task = document.querySelector("#new-task-description");
  console.log(`"the task value is:" ${task.value}`);

  const newList = document.createElement("li");
  newList.textContent = task.value;

  ulList.append(newList);

  task.value = " ";
}

document.addEventListener("DOM Content Loaded", () => {
  document.addEventListener("submit", createNewToDo);
});
