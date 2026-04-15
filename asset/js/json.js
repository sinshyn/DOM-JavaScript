// JSON -> định dạng dữ liệu(chuỗi)
// - JavaScript Object Notation
// JSON: number, string, boolean, null, array, object
/* nhận JSON từ backend -> chuyển sang ngôn ngữ lập trình */
// stringify: Từ Javascript type -> JSON
// parse:  Từ JSON -> Javascript type
// let json = '["java", "php", "c#"]';
let json = '{"name": "sang", "age": 24, "marital": true }';
let oject = JSON.parse(json);
//console.log(oject);
let string = "1";
//console.log(typeof JSON.parse(string));
let obj = { fullname: "Sang Toan", age: 24, marital: true };
let changed = JSON.stringify(obj);
// console.log(JSON.parse(changed));

/*--------------------------------------------------*/

/*---------PROMISE--------*/
//sync: đồng bộ -> nào viết trước chạy trước >< opposite
//async: bất đồng bộ -> callback để xử lý -> có lỗi -> promise
/* pain -> callback hell, pyramids of doom */
// lý thuyết - cách hoạt động
// thực hành - ví dụ

/* status of promise */
// 1.pending -> đang chạy
// 2.fulfilled -> chạy thành công
// 3.reject -> chạy thất bại
let promise = new Promise(
  //executor
  function (resolve, reject) {
    //logic
    // -> thanh cong: resolve()
    // -> that bai: reject()

    //fake call API
    // resolve([
    //   {
    //     id: 1,
    //     courseName: "javascript",
    //   },
    // ]);
    reject("loi!!!");
  },
);
promise
  //resolve được giải quyết -> then sau đó
  .then(function (couses) {
    // console.log(couses);
  })
  //reject từ chối -> catch bắt lỗi
  .catch(function (er) {
    // console.log(er);
  })
  // resolve or reject -> cuối cùng thì
  .finally(function () {
    // console.log("done");
  });

// ------------------------------------
function notHell(value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
}
notHell(1)
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    // console.log(value + 1);
  });

// ------------------------------------
let sleep = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
sleep(1000)
  .then(function () {
    // console.log(1);
    return sleep(1000);
  })
  .then(function () {
    // console.log(2);
    return new Promise(function (resolve, reject) {
      reject("oh no!!! loi mat roi");
    });
  })
  .then(function () {})
  .then(function () {
    // console.log(3);
    return sleep(1000);
  })
  .catch(function (er) {
    // console.log(er);
  });

// ------------------------------------
/*
 Promise.resolve
 Promise.reject
 Promise.all -> chạy song song các promise
 */
let succpromise = Promise.resolve("thanh cong");
succpromise = Promise.reject("loi roi");
succpromise
  .then(function (sc) {
    // console.log(sc);
  })
  .catch(function (er) {
    // console.log(er);
  });

let promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 3000);
  // reject('oh no')
});
Promise.all([promise1, promise2])
  .then(function ([result1, result2]) {
    // console.log(result1.concat(result2));
  })
  .catch(function (er) {
    // console.log(er);
  });

let user = [
  { id: 1, userName: "Nguyen Van An" },
  { id: 2, userName: "Tran Thi Binh" },
  { id: 3, userName: "Toan Thanh Cong" },
];

let comments = [
  {
    id: 1,
    user_ID: 1,
    content: "ăn gì chưa đó",
  },
  {
    id: 2,
    user_ID: 2,
    content: "ăn rồi !!!",
  },
  {
    id: 3,
    user_ID: 1,
    content: "ăn gì đó",
  },
];

/*
1. lấy comments
2. từ comments lấy ra userID
3. từ userID lấy ra user */

/*
array
function, callback
promise
dom */

//fake API
function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve, reject) {
    let result = user.filter(function (users) {
      return userIds.includes(users.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    let userIDs = comments.map((comment) => comment.user_ID);
    return getUsersByIds(userIDs).then(function (users) {
      return { users_name: users, comments_name: comments };
    });
  })
  .then(function (data) {
    let eUlComment = document.getElementById("comment-block");
    let html = " ";
    data.comments_name.forEach((comment) => {
      let user = data.users_name.find(function (user) {
        return user.id === comment.user_ID;
      });
      html += `<li>${user.userName}: ${comment.content} </li>`;
    });
    eUlComment.innerHTML = html;
  })
  .catch("loi roi");
