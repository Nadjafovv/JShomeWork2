// task 1

// const num = +prompt('Введите диапозон')
// let sum = 0
// for (let i = 0; i < num; i++) {
//    sum = sum + i + 1
// }
// console.log(sum);

//task 2

// let a = +prompt('введите 1 число')
// let b = +prompt('введите 2 число');
// while (a != 0 & b != 0){
//     if(a > b){
//         a = a%b;
//     }else{
//         b = b%a;
// }
// }
// console.log(a+b);

// task 3

// let num = +prompt('введите число');
// let dev = 0;
// for (let i = 1; i <= num; i++) {
//     dev = num % i;
//     if (dev == 0) {
//         console.log(i);
//     } else {

//     }
// }
// task 4

// let number = +prompt('Введите число');
// let quantity = 0;
// for (let i = 1; number / i >= 1; i *= 10) {
// quantity ++;
// }
// alert(quantity)

//task 5



//task 6 

// let numberOne = 0;
// let Secondnum = 0;
// let result = true;
// let math_sign = "";
// do {
//   numberOne = +prompt("Введите первое число ");
//   Secondnum = +prompt("Введите второе число ");
//   math_sign = prompt("Введите математический знак");
//   switch (math_sign) {
//     case "+":
//       alert(
//         `${numberOne} ${math_sign} ${Secondnum} = ${numberOne + Secondnum}`
//       );
//       break;
//     case "-":
//       alert(
//         `${numberOne} ${math_sign} ${Secondnum} = ${numberOne - Secondnum}`
//       );
//       break;
//     case "*":
//       alert(
//         `${numberOne} ${math_sign} ${Secondnum} = ${numberOne * Secondnum}`
//       );
//       break;
//     case "/":
//       alert(
//         `${numberOne} ${math_sign} ${Secondnum} = ${numberOne / Secondnum}`
//       );
//       break;
//     default:
//       alert(`не ввели знак математической операции`);
//       break;
//   }
//   result = confirm("выполнить еще одну математическую операцию?");
// } while (result == true);


//task7
/////// Zadaniye 7 ///////

// let num = prompt("число сюда пищи ежже");
// let nepridumal = prompt("куда его сдвинуть скажи мне");
// let i = 0;

// do {
//     i = i+1;

// } 
// while (num[i] != undefined) {
//     let levo = "";
//     let pravo = "";
//     for (x = 0; x < i; x++) {
//         if (x < nepridumal) {
//             levo += num[x];
//         }
//         else {
//             pravo += num[x];
//         }
//     }
//     alert(pravo + levo);
// }

//task 8 


// let i = 0;

// do {
//     let first = "понедельник((";
//     let second = "вторник((";
//     let third = "среда((";
//     let fourth = "четверг)";
//     let fifth = "пятница))";
//     let sixth = "суббота!!))))";
//     let seventh = "воскресенье 50/50";

//     if (i == 0) {
//         alert(first);
//     }
//     else if (i == 1) {
//         alert(second);
//     }
//     else if (i == 2) {
//         alert(third);
//     }
//     else if (i == 3) {
//         alert(fourth);
//     }
//     else if (i == 4) {
//         alert(fifth);
//     }
//     else if (i == 5) {
//         alert(sixth);
//     }
//     else if (i == 6) {
//         alert(seventh);
//         i = -1;
//     }
    
//     i++;
// } while (confirm ("Продолжаем?"));

//task 9

// let kaktakto = "";
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     table += `${i} x ${j} = ` + i * j + ", ";
//   }
// }
// alert(table);
