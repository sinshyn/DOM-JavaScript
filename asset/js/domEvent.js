/** DOM EVENTS
 * Attribute event
 * Assign event using the element node
 */
let eH2 = document.querySelectorAll("h2");
// eH2.forEach = onclick = function (e) {
//   console.log(e.target);
// }; SAI VÌ TẠO onclick global chạy cho toàn trang
eH2.forEach((e) => {
  e.onclick = function (event) {
    console.log(event.target);
  };
});

/*---------------Input--Select-----------------*/
let eInText = document.querySelector("input[type='text']");
eInText.oninput = function (event) {
  event.target.value;
  // console.log(Object.getPrototypeOf(event.target));
  // console.dir(event.target);
};

let eInCheck = document.querySelector("input[type='checkbox']");
eInCheck.onchange = function (event) {
  event.target.checked;
};

let eInSele = document.querySelector("select");
eInSele.onchange = function (event) {
  event.target.value;
};


/*---------------Keyup--Keydown-----------------*/
let eInput = document.querySelector("input[placeholder='eInput']");
// console.log(eInput);
eInput.onkeyup = function (event) {
  event.target.value;
};
// let str = "";
// document.onkeyup = function (event) {
//   str = event.key;
//   console.log(str);
// };
