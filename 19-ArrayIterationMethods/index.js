let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

console.log(students);

// forEach

// students.forEach((student) => {
//   console.log("student", student.teacher);
// });

// let sum = 0;

// students.forEach((student) => {
//   // console.log(student.avgPoint);
//   sum += student.avgPoint;
// });

// console.log(sum);

// map

// let nameArr = [];

// students.forEach((student) => {
//   nameArr.push(student.name);
// });

// console.log(nameArr);

// let nameArr = students.map((student) => {
//   return student.name;
// });

// let nameArr = students.map((student) => student.name);

// let nameArr = students.forEach((student) => {
//   console.log(student.name);
// });

// let nameArr = students.map((student, index, arr) => {
//   // console.log(student.name);
//   console.log(index);
//   console.log(arr);

//   return student.name;
// });

// - "gamig" həvəsi olan tələbələrin arrayini yaradin

let result = [];

// for (let i = 0; i < students.length; i++) {
//   // console.log(students[i]);

//   for (let j = 0; j < students[i].hobbies.length; j++) {
//     // console.log(students[i].hobbies[j]);

//     if (students[i].hobbies[j] == "gaming") {
//       // console.log("tapildi");
//       // console.log(students[i].name);
//       result.push(students[i].name);
//     }
//   }
// }

// result = students.filter((student) =>
//   student.hobbies.find((hobby) => hobby == "gaming")
// );

// let arr = ["book", "gaming", "painting", "walking", "gaming"];

// let elem = arr.find((element) => element == "gaming");

// let elem = students.find(
//   (student) => student.name.toLowerCase() == "Nurane".toLowerCase()
// );

// let elem = arr.filter((element) => element == "gaming");

// let elem = students.filter((student) => student.avgPoint > 80);

// console.log("elem", elem);

// function sum(qurban, b) {
//   console.log(qurban + b);
// }

let word = "SalAM";

// function convert(word) {
//   console.log(word);
//   let newWord = "";
//   for (let i = 0; i < word.length; i++) {
//     // console.log(word[i]);
//     if (word[i].toUpperCase() == word[i]) {
//       // console.log(word[i].toLowerCase());
//       newWord += word[i].toLowerCase();
//     } else {
//       newWord += word[i].toUpperCase();
//     }
//   }
//   console.log(newWord);
// }

// convert(word);
// console.log(
//   word
//     .split("")
//     .map((elem) => {
//       if (elem.toUpperCase() == elem) {
//         return elem.toLowerCase();
//       } else {
//         return elem.toUpperCase();
//       }
//     })
//     .join("")
// );

// result = students.every((student) => student.avgPoint > 0);

// result = students.some((student) => student.avgPoint > 100);

// result = students.reduce((acc, student) => {
//   acc += +student.age;
//   return acc;
// }, 0);

let arr = [10, 3, 4, 5, 26, 6, 7, 8];

// result = arr.reduce((acc, elem) => {
//   acc += +elem;
//   return acc;
// }, 0);

// result = arr.reduce((acc, elem) => {
//   if (elem > acc) {
//     acc = elem;

//     return acc;
//   }

//   return acc;
// });

// console.log("arr", arr);

// result = arr.sort((a, b) => a - b);
// result = arr.sort((a, b) => b - a);
// console.log("arr-2ci defe cap edirem", arr);

arr = ["book", "gaming", "painting", "walking", "gaming"];
// console.log("arr", arr);

result = arr.sort((a, b) => b.localeCompare(a));

// result = students.sort((a, b) => a.name.localeCompare(b.name));
result = students.sort((a, b) => a.avgPoint - b.avgPoint);

// console.log("result", result);

// console.log(
//   [
//     [1, 2],
//     [1, 2],
//   ].flatMap(() => "qurban")
// );

let arr1 = [[1, 2], 2, 3, 4];
console.log("arr-1", arr1);

let arr2 = [...arr1]; // [1,2,3,4]
console.log("arr-2", arr2);

arr1[0][0] = "qurban";

console.log("arr-1", arr1);
console.log("arr-2", arr2);

let obj = { name: "qurban", age: 31 };

let newName = obj.name;

let { name: name2, age: age2 } = obj;

console.log(name2, age2);

let arr3 = [1, 2, 3, 4, 5];

let [brinci, ikinci, ucuncu, ...digerleri] = arr3;

console.log(brinci);
console.log(ikinci);
console.log(ucuncu);
console.log(digerleri);