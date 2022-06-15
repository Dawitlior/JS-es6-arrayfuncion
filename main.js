// // ממיין לי מספרים מהקטן לגדול
// const numbersExample = [20, 14, 100, 3];
// numbersExample.sort((a, b) => a - b);
// // 1.	כתבו פונקציה המקבלת מערך של סטרינגים וממינת אותו על פי האלף-בית.
function getArrayAndSort(myArray) {
  console.log(myArray.sort());
}
getArrayAndSort(["lior", "elada", "daniel", "abaynech", "solomon", "aytegev"]);

// // 2.	כתבו פונקציה המקבלת מערך של מספרים וממיינת אותו מהקטן לגדול.
function getNumbersAndSort(numbers) {
  console.log(
    numbers.sort((a, b) => { return a - b;}) );
}
getNumbersAndSort([20, 14, 100, 3, 12, 67, 54, 3]);

// // 3.	כתבו פונקציה המקבלת מערך של מספרים וממינת אותו מהגדול לקטן.

// function getNumberAndSort(number) {
//   console.log(number.sort((a , b) => b - a));
// }
// getNumberAndSort([2, 43, 1, 3, 65, 57, 43, 22]);

// 4.	צרו פונקציה היוצרת מערך של 10 שמות פרטיים מהכיתה, השמות מתקבלים מהמשתמש, וסדרו אותו אלפביתית.

// let classStudents = [];
// let studentName = document.getElementById("student_name");
// function getArrayFromUser() {
//   if (classStudents.length < 10) {
//     classStudents.push(studentName.value);
//   }
//   studentName.value = "";
//   console.log(classStudents.sort());
// }

// 5.	צרו פונקציה היוצרת מערך רנדומלי של 10 גילים וסדרו אותו לפי סדר יורד.

// let ageArray = [];
// function getRandomAgeAndCreate(){
// for(let i = 0 ; i<10 ; i++){
//     ageArray.push(Math.floor(Math.random()*(65-18)+18))
// }
// ageArray.sort((a,b)=>{return a-b})
// console.log(ageArray);
// }
// getRandomAgeAndCreate();

// 6.	צרו מחרוזת שמחזיקה את המערך החדש מתרגיל 24 ומפרידה בין האיברים במקף (-).

// function createStringAndKeepTheArray() {
//   let str = classStudents.join("-");
//   console.log(str);
// }
// createStringAndKeepTheArray();

// 7.
// NOT FINISH
let arrayCompany = [
  "microsoft",
  "apple",
  "dell",
  "ibm",
  "intel",
  "facebook",
  "monday",
  "at&t",
  "sony",
  "hwawi",
];
function arrayTechCompany() {
  let divCompany = document.getElementById("id_div");
  for (let i = 0; i < arrayCompany.length; i++) {
    divCompany.innerHTML = arrayCompany[i];
  }
}

let arrayPictures = [
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/3/2/8/3328774-46.jpg",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fynet-images1.yit.co.il%2Fpicserver5%2Fcrop_images%2F2022%2F05%2F29%2FB1EJYdgu5%2FB1EJYdgu5_0_7_1024_576_0_x-large.jpg&imgrefurl=https%3A%2F%2Fwww.ynet.co.il%2Fsport%2Farticle%2Fb1avxulo5&tbnid=yvNMo5yj_4PkcM&vet=12ahUKEwiizrD32a74AhWCwAIHHWHFC2sQMygDegUIARDHAQ..i&docid=QJPVUHNZh9xgRM&w=1024&h=576&q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA%20%D7%A9%D7%9C%20%D7%A8%D7%99%D7%90%D7%9C%20%D7%9E%D7%93%D7%A8%D7%99%D7%93&ved=2ahUKEwiizrD32a74AhWCwAIHHWHFC2sQMygDegUIARDHAQ",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/3/1/0/3310077-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/3/1/0/3310064-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/2/9/9/3299772-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/3/1/0/3310068-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/2/8/5/3285032-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/2/8/4/3284011-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/2/8/0/3280415-46.jpg",
  "https://images.wcdn.co.il/f_auto,q_auto,w_300,t_54/3/2/8/0/3280417-46.jpg",
];
for(let i = 0 ; i < arrayPictures.length ; i++){
  if(i<12){
    // document.getElementById("");
    my_div1.innerHTML = "<img src="+ arrayPictures[5] + "/>"

  }
}