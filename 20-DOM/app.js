const toDoInput = document.querySelector(".toDoInput");
const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const azBtn = document.querySelector(".azBtn");
const list = document.querySelector(".list");

let toDos = [
  {
    id: 1,
    title: "idman et",
  },
  {
    id: 2,
    title: "yemek ye",
  },
  {
    id: 3,
    title: "kod yaz arada",
  },
];

createList(toDos);

addBtn.addEventListener("click", () => {
  let obj = {};
  obj.title = toDoInput.value;
  obj.id = toDos[toDos.length - 1].id + 1;

  toDos.push(obj);

  list.innerHTML = "";
  createList(toDos);

  toDoInput.value = "";
  console.log(toDos);
});
azBtn.addEventListener("click", () => {
  list.innerHTML = "";

  createList([...toDos].sort((a, b) => a.title.localeCompare(b.title)));

  console.log(toDos);
});

// deleteBtn.addEventListener("click", () => {
//   list.innerHTML = "";
// });

// // function helloConsole() {
// //   console.log("salam dunya");
// // }

function createList(arr) {
  arr.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.innerText = toDo.title;
    button.innerText = "Delete";

    button.className = "btn btn-danger ms-2";
    li.className = "m-2";

    button.addEventListener("click", (e) => {
      console.log(e.target, toDo.id);

      toDos = arr.filter((elem) => elem.id !== toDo.id);
      // console.log(newArr);

      list.innerHTML = "";
      createList(toDos);
    });

    li.appendChild(button);
    list.appendChild(li);
  });
}
