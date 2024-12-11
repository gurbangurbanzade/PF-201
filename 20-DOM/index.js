// console.log(document);

// console.log(window.alert);
// alert("salam meleykim");

// console.log(window.document.body);

// const headText = document.getElementsByName("h1");
// const headText = document.querySelector("h1");
// const headText = document.querySelector(".headText");

// const subText = document.querySelector("#subText");

// // const subText = document.getEleme("subText");

// console.log(headText);
// console.log(headText.innerHTML);
// console.log(headText.innerText);
// console.log(headText.textContent);

// headText.innerText = "hello Nicat";

// headText.style.color = "red";
// headText.style.backgroundColor = "green";

// console.log(subText);
// console.log(subText.className);
// console.log(subText.classList);

// // subText.className = "customStyle";
// subText.classList.add("customStyle");
// subText.classList.remove("box");

/////////////////////////////////////////////////////////////////

const toDoInput = document.querySelector(".toDoInput");
const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const list = document.querySelector(".list");
const azBtn = document.querySelector(".azBtn");

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
deleteBtn.addEventListener("click", () => {
  console.log("salamlar");
  toDos = [];
  console.log(toDos);
  createList(toDos);
});

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
