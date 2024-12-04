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
// console.log(students.length);
// console.log(typeof students[0]);
// console.log(students[0]);
// console.log(students[0].name);
// console.log(students[0].hobbies.join());
// console.log(students[0].hobbies);

// for (let i = 0; i < students[0].hobbies.length; i++) {
//   console.log(students[0].hobbies[i]);
// }

// console.log(students[0].loginDetail.password);
// console.log(students[0].name);

// for (let i = 0; i < students.length; i++) {
//   //   console.log(students[i]);
//   //   console.log(students[i].name);
//   //   console.log(students[i].loginDetail.password + " " + students[i].name);
// - Bütün elementləri konsola yazın
// - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
// - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
// - Kəsri olan tələbələrin ad və soyadını çapa verin
// - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
// - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin
// - Parolu ən uzun olan tələbənin username və adını çapa verin
// - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
// - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
// - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
// - Müəllimlərin baş hərflərini böyük hərflə yazın
// - Şifrəsində rəqəm olmayan tələbələri tapın
// - Qızların arasında id-si 3 olan müəllimlərin adını deyin
// - Tələbələrin adlarını və müəllim saylarını çapa verin
// - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]

//   if (students[i].age == 20) {
//     console.log(students[i].surname, students[i].age);
//   }
// }

// for (let i = 0; i < students.length; i++) {
//   //   console.log("ad:", students[i].name);
//   console.log("ad:", students[i].name, "soyad:", students[i].surname);
// }

// let boxHobby = students[0].hobbies.length;
// let name = students[0].name;

// for (let i = 0; i < students.length; i++) {
//   //   if (students[i].fail) {
//   //     console.log(students[i].name, students[i].surname);
//   //   }
//   //   students[i].fail == true
//   //     ? console.log(students[i].name, students[i].surname)
//   //     : null;
//   //   students[i].fail ? console.log(students[i].name, students[i].surname) : null;

//   if (students[i].hobbies.length > boxHobby) {
//     boxHobby = students[i].hobbies.length;
//     name = students[i].name;
//   }
// }

// console.log(boxHobby, name);
// let boxAvgPoint = students[0].avgPoint;

// for (let i = 0; i < students.length; i++) {
//   if (students[i].avgPoint > boxAvgPoint) {
//     boxAvgPoint = students[i].avgPoint;
//   }
// }

// // console.log(boxAvgPoint);

// let pass = students[0].loginDetail.password.length;
// let studentName = students[0].name;

// let studentData = students[0];

// for (let i = 0; i < students.length; i++) {
//   //   if (students[i].loginDetail.password.length > pass) {
//   //     pass = students[i].loginDetail.password.length;
//   //     studentName = students[i].name;
//   //   }

//   if (
//     students[i].loginDetail.password.length >
//     studentData.loginDetail.password.length
//   ) {
//     studentData = students[i];
//   }
// }

// // console.log(pass, studentName);

// console.log(studentData.name);
// console.log(studentData.surname);
// console.log(studentData.age);

// for (let i = 0; i < students.length; i++) {
//   if (students[i].boyfriendGirlfriend ) {
//     console.log(students[i].name);
//   }
// }
