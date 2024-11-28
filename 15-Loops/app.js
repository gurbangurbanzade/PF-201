// let setir = "salam";

// let length = 0;

// for (let i = 0; i < Infinity; i++) {
//   //setir[0]==s 1
//   //setir[1]==a 2

//   if (setir[i] != undefined) {
//     length++;
//   } else {
//     break;
//   }

//   console.log(setir[i], "uzunluq", length);
// }

// console.log("yekun uzunluq-", length);

// let a = 100;

// for (let i = 0; i < a; i++) {
//   console.log("salam \n");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);

//   if (i == 6) {
//     break;
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 6) {
//     continue;
//   }

//   console.log(i);
// }

// let i = 10;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;

// let word = "cvbnm,hjgmfndsfdghjkgfdsfgjhfdfsgrtgbfgbhngfdb/fgsgsdfasfadfa";

// let check = true;

// do {
//   console.log(word[i]);
//   if (word[i] == "/") {
//     console.log("tapildi");
//     check = false;
//   }
//   i++;
// } while (check);

// 1-dən 100-ə qədər olan ədədlərin ortalamasını tap.
// let eded = 100;
// let sum = 0;

// for (let i = 0; i <= eded; i++) {
//   sum += i;
// }

// console.log(sum / eded);
//        012345678910111212
// let db = "387654324567876543278756432557867";

// let maxNum = +db[0];
// let minNum = +db[0];

// for (let i = 0; i < db.length; i++) {
//   if (db[i] > maxNum) {
//     maxNum = +db[i];
//   }

//   if (db[i] < minNum) {
//     minNum = +db[i];
//   }

//   // console.log(+db[i]);
// }

// console.log(maxNum + minNum);
// let a = prompt("sdfgh");

// kino

// const ticketPrice = 10;
// const age = 18;

// let userAge = 13;
// let balance = 20;
// let countTicket = 5;

// if (userAge > age) {
//   if (balance >= countTicket * ticketPrice) {
//     console.log(
//       `${countTicket} bilet aldiniz. Balansiniz- ${
//         balance - countTicket * ticketPrice
//       } AZN`
//     );
//   } else {
//     console.log("sizin balansinizda kifayet qeder mebleg yoxdur");
//   }
// } else {
//   if (countTicket >= 3) {
//     if (balance >= countTicket * ticketPrice) {
//       console.log("siz 3 den artiq bilet sicdiyiniz ucun emeliyyat ugurludur");
//       console.log(
//         `${countTicket} bilet aldiniz. Balansiniz- ${
//           balance - countTicket * ticketPrice
//         } AZN`
//       );
//     } else {
//       console.log("sizin balansinizda kifayet qeder mebleg yoxdur");
//     }
//   } else {
//     console.log(
//       "yasiniz 18den az oldugu ucun 3 deneden az bilet ala bilmersiniz"
//     );
//   }
// }

// Bankomat proqramı tərtib edin. 1-düyməsini seçdikdə balans ekranda göstərilsin. 2-düyməsini seçdikdə balansa mədaxil olunsun və balans ekranda göstərilsin,
// 3-düyməsini seçdikdə balansdan pul çıxarılsın. 4-düyməsini seçdikdə çıxış verilsin.

// let balance = 1000;

// let exit = true;

// do {
//   let button = +prompt(
//     "emeliyyati secin: 1-balansa bax, 2-medaxil, 3-cixaris,4-cixis"
//   );
//   switch (button) {
//     case 1:
//       console.log("xos gelmisiniz");
//       console.log(`Balansiniz ${balance} AZN`);
//       break;

//     case 2:
//       console.log("xos gelmisiniz. Emanetleri daxil edin");

//       let addCash = prompt("meblegi daxil edin");
//       console.log(`Balansiniz ${(balance += +addCash)} AZN`);
//       break;

//     case 3:
//       console.log("xos gelmisiniz. Cixarmaq istediyiniz meblegi secin");
//       let getCash = prompt("meblegi daxil edin");
//       if (+getCash > balance) {
//         console.log("kifayet qeder mebleg yoxdur");
//       } else {
//         console.log(`Balansiniz ${(balance -= +getCash)} AZN`);
//       }
//       break;

//     case 4:
//       exit = false;
//       console.log("bizi secdiyiniz ucun tesekkur edirik!");
//       break;
//     default:
//       console.log("duzgun emeliyyati secin");
//       break;
//   }
// } while (exit);

// let arr2 = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   null,
//   true,
//   undefined,
//   [1, 23, 44, [undefined, null]],
// ];
//         0   1  2  3  4
let arr = [1, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

let obj = {
  name: "qurban",
  surname: null,
  age: 32,
  hobbies: ["game", "book"],
  secretInfo: {
    username: "gurban",
    password: "123456",
  },
};

console.log(obj.name);
console.log(obj["name"]);

obj.name = "kanan";
obj.surname = "gurbanzada";

console.log(obj);
