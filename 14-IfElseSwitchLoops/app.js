// let num = 12;

// if (num % 2 === 1) {
//   console.log(`${num} ededi tekdir`);
// } else {
//   console.log(`${num} ededi cutdur`);
// }

// let a = 9;
// let b = 9;
// // let c;

// if (b > a) {
//   console.log("artan sira:", a, b);
// } else if (a > b) {
//   console.log("artan sira:", b, a);
// } else {
//   console.log("ededler beraberdir");
// }

// let a = 4;
// let b = 4;
// let c = 4;

// if (a >= b && a >= c) {
//   if (b >= c) {
//     console.log("artan sira:", c, b, a);
//   } else {
//     console.log("artan sira:", b, c, a);
//   }
// } else if (b >= c && b >= a) {
//   if (a >= c) {
//     console.log("artan sira:", c, a, b);
//   } else {
//     console.log("artan sira:", a, c, b);
//   }
// } else {
//   if (b >= a) {
//     console.log("artan sira:", a, b, c);
//   } else {
//     console.log("artan sira:", b, a, c);
//   }
// }

// let month = 2;

// switch (month) {
//   case 1:
//     console.log("yanvar");
//     break;
//   case 2:
//     console.log("fevral");
//     break;
//   default:
//     console.log("bele ay yoxdur");
//     break;
// }

// for (let i = 0; i <5; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i > 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 1-den 10-da qeder olan cut ededlerin kvadratini tek ededlerin ise kubunu tapin

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i * i);
//   } else {
//     console.log(i * i * i);
//   }
// }

// 1-den 10-da qeder olan cut ededlerin kvadratini tek ededlerin ise kubunu tapin

// 1-den 10-da qeder olan ededlerin cemini tapin

// let sum = 0;

// // console.log(sum);

// for (let i = 0; i < 10; i++) {
//   sum = sum + i;
//   //   console.log(sum);
// }

// console.log("sum", sum);

// 1-den 10-da qeder olan cut ededlerin cemini tek ededlerin ise hasilini tapin

// let sum = 0;

// let hasil = 1;

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     // console.log(i, "cut");

//     sum += i;
//   } else {
//     // console.log(i, "tek");

//     hasil *= i;
//   }
// }

// console.log(sum, "sum");
// console.log(hasil, "hasil");
//          012345

// console.log(name.length);

// let firstLetter = "";

// console.log(firstLetter, "firstLetter");

// console.log(name[0]);
// console.log(name[5]);
// console.log(name[name.length - 1]);

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }
// let reverseName = "";

// for (let i = name.length - 1; i >= 0; i--) {
//   reverseName += name[i];
// }
// console.log(reverseName, "-reverseName");
let name = "gurbaasdkajsd";

let check = false;

for (let i = 0; i < name.length; i++) {
  //   console.log(name[i]);
  if (name[i] === "n") {
    // console.log("tapildi");

    check = true;
  }

  //   else {
  //     // console.log("yoxdur");
  //   }
}

if (check) {
  console.log("addda n  herfi var");
} else {
  console.log("addda n  herfi yoxdur");
}
