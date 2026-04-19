let str = "es6";
let str1 = "template noi suy";
//console.log(`${str} ${str1} \${}`);

//declaration
function newfunction(log) {
  //console.log(log);
}
//Expression
let str2 = function (log) {
  //console.log(log);
};
//Arrow
let say = (mess) => {
  //console.log(mess);
};

let num = (a, b) => ({ a: a, b: b });
say("hello");
//console.log(num(5, 6));

/*------------constructor--------------- */
function Students(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}

/*------------class--------------- */
class Teaches {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
let student = new Students("Sang", 26);
//console.log(student);

/*------------default parameter values--------------- */
function logger(log, type = "log") {
  //console[type](log);
}
logger("notification", "error");

/*------------Enhanced object literals--------------- */
/*định nghĩa key: value cho oject 
định nghĩa method cho oject
định nghĩa key cho oject dạng biến*/
let name = "javascript";
let prices = 100;

let course = {
  name,
  prices,
  getPrice() {
    return prices;
  },
};
//console.log(course);

let fillName = "name";
let fillCost = "price";

let thing = {
  [fillName]: "car",
  [fillCost]: 90,
};
// console.log(thing);

/*------------Destructuring, Rest--------------- */
let array = ["Sang", "love", "Thy"];
let [a, ...rest] = array;
// console.log(a);
// console.log(rest);

let oject = {
  fullname: "Toan Sang",
  age: 16,
  contact: {
    fullname: "Sin Shyn",
  },
};
let {
  fullname: parentName,
  contact: { fullname },
} = oject;
// console.log(parentName);
// console.log(fullname);
/* Rest */
function multiLog(...params) {
  //params.forEach((num) => console.log(num));
}
multiLog(1, 2, 3, 4, 5);

function Destructuring({ a, o }) {
  //console.log(a, o);
}
Destructuring({
  a: "Array",
  o: "oject",
});

/*-------- Spread----------- */
//bỏ đi cặp ngoặc đằng trước
let ar1 = ["java", "php", "c#"];
let ar2 = ["react", "bootstrap", "xampp"];
let ar3 = [...ar2, ...ar1];
//console.log(ar3);

let oj1 = {
  groom: "Sang",
};
let oj2 = {
  Bride: "Thy",
};

let oj3 = {
  ...oj1,
  ...oj2,
};
//console.log(oj3);

/**---------Tagged template literals--------- */
function highlight([firstArr, ...strings], ...values) {
  const result = values.reduce(
    (acc, cur) => [...acc, `<b>${cur}</b>`, strings.shift()],
    [firstArr],
  );
  return result.join("");
}
let brand = "f8";
let newcourse = ".net";
const html = highlight`hoc lap trinh ${newcourse} tai ${brand} nha`;
//console.log(html)

/**---------Modules--------- */
//chia nhỏ từng hành động muốn giải quyết thành từng file riêng
//import
//export
import moduleLog from "./moduleLog.js";
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";
import * as constants from "./constants.js";
//console.log(constants);
//moduleLog("hello");

/**---------Optional chaining (?.)--------- */
