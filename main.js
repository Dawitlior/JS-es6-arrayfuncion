// // ממיין לי מספרים מהקטן לגדול
// const numbersExample = [20, 14, 100, 3];
// numbersExample.sort((a, b) => a - b);
// // 1.	כתבו פונקציה המקבלת מערך של סטרינגים וממינת אותו על פי האלף-בית.
// function getArrayAndSort(myArray) {
//   console.log(myArray.sort());
// }
// getArrayAndSort(["lior", "elada", "daniel", "abaynech", "solomon", "aytegev"]);

// // 2.	כתבו פונקציה המקבלת מערך של מספרים וממיינת אותו מהקטן לגדול.
// function getNumbersAndSort(numbers) {
//   console.log(
//     numbers.sort((a, b) => {
//       return a - b;
//     })
//   );
// }
// getNumbersAndSort([20, 14, 100, 3, 12, 67, 54, 3]);

// // 3.	כתבו פונקציה המקבלת מערך של מספרים וממינת אותו מהגדול לקטן.

// function getNumberAndSort(number) {
//   console.log(number.sort((a , b) => b - a));
// }
// getNumberAndSort([2, 43, 1, 3, 65, 57, 43, 22]);

// 4.	צרו פונקציה היוצרת מערך של 10 שמות פרטיים מהכיתה, השמות מתקבלים מהמשתמש, וסדרו אותו אלפביתית.

let classStudentsName = [];
let studentName = document.getElementById("student_name");
function getArrayFromUser() {
  if (classStudentsName.length < 10) {
    classStudentsName.push(studentName.value);
  }
  studentName.value = "";
  console.log(classStudentsName.sort());
}

// 5.	צרו פונקציה היוצרת מערך רנדומלי של 10 גילים וסדרו אותו לפי סדר יורד.

let ageArray = [];
function getRandomAgeAndCreate(){
for(let i = 0 ; i<10 ; i++){
    ageArray.push(Math.floor(Math.random()*(65-18)+18))
}
}
console.log(ageArray);
ageArray.sort((a,b)=> a - b);


