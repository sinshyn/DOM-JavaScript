/** DOM Document Oject Modal
 * có 3 thành phần
 * element: ID, class, tag, CSS selector, HTML collection(img, a,)
 * attribute
 * text
 */
/* Node điểm giao nhau  */

/* API Application Program Interface
ứng dụng mở ra cho ứng dụng khác nhìn thấy và giao tiếp được 
Web API */

/* lấy Element Node*/
let headingNode = document.getElementById("heading");
let headingNodes = document.getElementsByClassName("heading");
let tagNodes = document.getElementsByTagName("h1");
let selectNodes = document.querySelector(".heading");
let collection = document.forms;
// console.log(selectNodes);

/*test*/
var productsListElement = document.querySelector(".products-list");
var firstProductElement = document.querySelectorAll(".product");
var buttonElements = document.getElementsByTagName("button");
let listItemH3 = document.querySelector("h3");
// console.log(firstProductElement[0].getElementsByClassName("description"));
// console.log(collection);

/* lấy Attribute Node*/
let attNode = document.querySelector("h2");
/* setter attNode */
attNode.className = "attribute-class";
attNode.title = "attribute-title";
/* method attNode */
attNode.setAttribute("href", "duonglink"); //them att
let getArrNode = attNode.getAttribute("class"); //lay att
// console.log(attNode, getArrNode);
// console.log(attNode.title );

/* test */
let spAtt = document.querySelector("span");
spAtt.setAttribute("class", "green-text");
// console.log(aAtt);
/* assignment */
let headAtt = document.querySelector("h1");
let aAtt = document.querySelector("a");
headAtt.title = "F8 - Học lập trình để đi làm";
headAtt.setAttribute("data-title", "F8 - Học lập trình để đi làm");
aAtt.href = "https://fullstack.edu.vn/";
aAtt.setAttribute("target", "_blank");
// console.log(headAtt, aAtt);

/* lấy Text Node -> bỏ qua tag -> chỉ hiện text bên trong */
// console.log(headAtt.textContent);
//setter gán trực tiếp giá trị mới cho text
// headAtt.textContent = "đây là nội dung mới được gán bằng setter";
// console.log(headAtt.textContent);

/* test */
/*
 *innerText => trả về như những gì nhìn thấy trên web
            >< lúc thêm thì thêm luôn cả xuống dòng
 *textContent => trả luôn cả xuống dòng + những cái ẩn = trả giống sources 
            >< lúc thêm thì ngược lại
 */
let pIn = document.getElementsByClassName("inner")[0];
let pTe = document.getElementsByClassName("content")[0];
//set
pIn.innerText = `được thêm 
        bởi
 innerText`;
pTe.textContent = `dòng này
 từ 
 textContent`;
//get
// console.log(headAtt.innerText);
// console.log(headAtt.textContent);

/* thêm Element trong Element Node (thêm mã html)
 innerHTML, outerHTML */
let eBox = document.getElementsByClassName("box")[0];

//SET innerHTML
eBox.innerHTML = "<h2>full ma HTML</h2>";
//GET innerHTML(lấy con bên trong)
// console.log(eBox.innerHTML);

//SET outerHTML ghi đè luôn cha
eBox.outerHTML = "<span>outer</span>";
//GET outerHTML(lấy từ cha)
// console.log(eBox.outerHTML);

// function render(html) {
//   let eUl = document.querySelector("ul");
//   eUl.innerHTML = html;
//   return eUl;
// }
// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `);

// var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

// function render(courses) {
//   let newArr = courses.map((n) => `<li>${n}</li>`);
//   let eUl = document.querySelector("ul");
//   eUl.innerHTML = newArr.join("");
//   return eUl;
// }
// render(courses);

let property = document.querySelector(".new-property");

let eBoxOne = document.querySelector(".box-1");
// console.log([eBoxOne.nextElementSibling]);
eBoxOne.innerText = "camelCase";
// console.log(eBoxOne.style);
Object.assign(eBoxOne.style, {
  width: "200px",
  height: "200px",
  backgroundColor: "green",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "700",
});
/* lấy ra giá trị của thuộc tính CSS inline */
// console.log(eBoxOne.style.alignItems);

// let a = document.querySelector("div");
// Object.assign(a.style, {
//     backgroundColor: "#f00"
// });

// Object.assign(a.nextElementSibling.style, {
//     color: "#f05123"
// });

/* ClassList Property
=>DOMTokenList 
* add -> thêm class vào element
* contains -> check class có trong element k 
* remove -> delete class
* toggle -> nếu có Class thì xóa >< k có thì thêm class*/
let eBoxTwo = document.querySelector(".box-2");
// console.log(eBoxTwo.nextElementSibling.classList.add("hello"));
// console.log(eBoxTwo.classList);
eBoxTwo.classList.add("red-text", "multiclass");
eBoxTwo.classList.contains("multiclass");
eBoxTwo.classList.replace("multiclass", "replace");
eBoxTwo.classList.remove("multiclass");
// setInterval(function () {
//   eBoxTwo.classList.toggle("green-text");
//   console.log(eBoxTwo.classList);
// }, 1000);
