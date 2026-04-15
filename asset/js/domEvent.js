/*--- DOM EVENTS => làm nhiều việc cùng 1 lúc --*/
/*
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

/*--------------PreventDefault-----------------*/
//loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ  html
let eA = document.links;
for (let i = 0; i < eA.length; i++) {
  eA[i].onclick = function (event) {
    // console.log(event.target.href);
    if (!event.target.href.startsWith("https://fullstack.edu.vn/")) {
      event.preventDefault();
    }
  };
}

let eUl = document.querySelector(".pre");
eUl.onmousedown = function (e) {
  e.preventDefault();
};
eUl.onclick = function (e) {
  // console.log(e.target);
};

/*--------------stopPropagation-----------------*/
// dừng hành vi nổi bọt
document.querySelector(".stop").onclick = function (e) {
  console.log("div");
};
document.querySelector(".stop button").onclick = function (e) {
  e.stopPropagation();
  console.log("click me!!!");
};

/*--------hủy lắng nghe dom event----------*/


/*--------------listener Events-----------------*/
let eBtn = document.getElementById("btn");
// eBtn.onclick = function (e) {
//   console.log("job 1");
//   console.log("job 2");
//   console.log(e);
// };

eBtn.addEventListener("click", function (e) {
  // console.log(Math.random());
});

function job1() {
  console.log("viec 1");
}
function job2() {
  console.log("viec 2");
}
eBtn.addEventListener("click", job1);
eBtn.addEventListener("click", job2);
setTimeout(() => {
  eBtn.removeEventListener("click", job1);
}, 3000);
