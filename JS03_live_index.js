// Print from 1 to 100
// fehler hafter Code

// for (let i = 1; 1 <= 100; 1++) {
//    document.write(i + "<br>") 
// }

/* 
start point i = 1
conditions 1 <= 100 true (we go inside the loop (block)) 1 + <br>
i = 2
conditions 2 <= 100 true (we go inside the loop (block)) 2 + <br>
i = 3
conditions 3 <= 100 true (we go inside the loop (block)) 3 + <br>

i = 100
conditions 100 <= 100 true (we go inside the loop (block)) 100 + <br>
i = 101
*/
// let students = ["John", "test 2", "Mary", "Serri", "MJ", "Dusan"];

// for (let i = 0; 1 < students.length, i++) {
//     document.write(students[i] + "<hr>");
// }

// standard for loop, <array, counting numbers>
// for of loop user only with arrays and it print you vaalues
// let students = [
//     "John",
//     "test 2",
//     "Mary",
//     "Serri",
//     "MJ",
//     "Dusan",
//     "Johnny",
//     "Karmin",
// ];

// students.forEach(function (val, i) {
//     console.log(val, i);
// }
// );

// students.forEach((element, i) => {
//     console.log(element, i);
// });


let numbers = [50,90, 20, 99, 5];

let max = numbers[0];

for(let val of numbers) {
    if(val > max){
        max = val;
    }
}

console.log(max);









