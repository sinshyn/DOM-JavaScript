/*----------------------------------------------------------- */
// Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div
let eDiv = document.querySelectorAll("div");
eDiv.forEach((element) => {
  element.classList.add("box");
});

/*----------------------------------------------------------- */
// Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
let eButton = document.querySelector("button");
eButton.onclick = function (event) {
  Object.assign(event.target.style, {
    color: "#fff",
  });
};
/*  event.target.classList.add("white-color"); 
      -> đúng ask for but add more class in css */
/*----------------------------------------------------------- */

