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

addBtn.addEventListener("click", () => {
  // console.log("salam dunya");

  // console.log(toDoInput.value);
  // console.log(list.innerHTML);
  // list.innerText += "<li>Qurban</li>";

  const li = document.createElement("li");
  const button = document.createElement("button");

  li.innerText = toDoInput.value;
  button.innerText = "Delete";

  button.className = "btn btn-danger ms-3";
  li.className = "m-2";

  li.appendChild(button);
  list.appendChild(li);

  button.addEventListener("click", (e) => {
    // console.log("adfsgh");
    // console.log(this);
    console.log(e.target.parentElement);

    e.target.parentElement.remove();
  });

  toDoInput.value = "";
});

deleteBtn.addEventListener("click", () => {
  list.innerHTML = "";
});

// function helloConsole() {
//   console.log("salam dunya");
// }
