// y=2x+1

// f(x)=2x+1

// f()=2x+3

// f=3+5

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// function sayHello() {
//   console.log("hello");

//   // return "hello";
// }

// sayHello();

function getNumber() {
  return 4;
}

// console.log(sayHello());
// console.log(getNumber());

// function getSum() {
//   return 3 + 4;
// }

// f(x)=2x+1y

// f(3)=2*3+1

// f(x,y)=2x+1*y

// function getSum(a, b) {
//   return a + b;
// }

// console.log(getSum(3, 4));
// console.log(getSum(6, 8));

// console.log(getSum());

// function getSum(a = 0, b = 0) {
//   return a + b;
// }

// console.log(a);

// var a = 8;

// if (true) {
//   let a = "let";
//   const b = "const";
//   var c = "var";

//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
// }

// console.log(a);
// console.log(b);

// console.log(c);

// function sayHello() {
//   var a = 8;
//   console.log("hello");
// }

// console.log(a);

// sayHello();

// const sayHello = () => {
//   console.log("hello");
// };

// // sayHello();

// (function () {

//   console.log("bye bye");

// })();

// console.log("bye bye");

// const func = (a) => {
//   console.log(a);
// };

// func("qurban");
// func(5);
// func(true);

// let helloName = function (name) {
//   console.log(`hello ${name}`);
// };

// helloName("miri");
// helloName("rugayya");

// let fullName = (name, surname) => {
//   console.log(`daxil olunan ad- ${name} soyad-${surname}`);
// };

// fullName("rugayya", "esgerova");

// const getSum = (a, b) => {

//   if (a * 1 == a && b * 1 == b) {
//     console.log(a + b);
//   } else {
//     console.log("daxil etdiyiniz melumatlar duzgun deyil");
//   }

// };

// getSum(3, "qurban");

// "qurban"

let getN = (name) => {
  let temp = true;

  for (let i = 0; i < name.length; i++) {
    if (name[i] == "n") {
      console.log("herf tapildi");
      temp = false;
      break;
    }
  }

  if (temp) {
    console.log("herf tapilmadi");
  }
};

getN("abcsnh");
