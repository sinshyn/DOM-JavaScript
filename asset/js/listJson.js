let listRecipesBlock = document.querySelector("#lRecipes");
let recipesApi = "http://localhost:3000/recipes";
function start() {
  getListRecipes(renderRecipes);
  handleCreateForm();
}
start();

function getListRecipes(callback) {
  fetch(recipesApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return callback(data);
    });
}
function postRecipe(data) {
  return fetch(recipesApi, {
    method: "POST", // Phương thức
    headers: {
      "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
    },
    body: JSON.stringify(data),
  }).then(function (response) {
    return response.json();
  });
}

function handleDelete(id) {
  fetch(recipesApi + "/" + id, {
    method: "DELETE", // Phương thức
    headers: {
      "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
    },
  })
    .then(function (response) {
      // Không parse JSON vì DELETE thường trả về rỗng
      if (response.ok) {
        return getListRecipes(renderRecipes);
      }
    })
    .catch((err) => console.log(err));
}

function putRecipe(id, name, ingredients) {
  return fetch(recipesApi + "/" + id, {
    method: "PUT", // Phương thức
    headers: {
      "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
    },
    body: JSON.stringify({ name: name, ingredients: ingredients }),
  })
    .then(function (response) {
      if (response.ok) {
        return getListRecipes(renderRecipes);
      }
    })
    .catch((err) => console.log(err));
}
function renderRecipes(recipes) {
  let htmls = recipes.map(function (recipe) {
    return `<li>
                <h3>Tên món ăn: ${recipe.name}</h3>
                <p><b>Nguyên liệu:</b> ${recipe.ingredients}</p>
                <button class="btn-delete" data-id="${recipe.id}">Xóa</button>
                <button class="btn-update" data-id="${recipe.id}" data-name="${recipe.name}"  data-ingredients="${recipe.ingredients}">Sua</button>
                <div class="update hidden">
                <input type="hidden" class="edit-id" value="${recipe.id}"/>
                <label for="">Tên món ăn:</label>
                <input type="text" class="edit-name" value="${recipe.name}"/>
                <label for="">Nguyên liệu:</label>
                <input type="text" class="edit-ingredients" value="${recipe.ingredients}"/>
                <button id="update" type="submit">Cap nhat</button>
                </div>
              </li>`;
  });
  listRecipesBlock.innerHTML = htmls.join(" ");

  // Gắn event sau khi render xong
  document.querySelectorAll(".btn-delete").forEach(function (btn) {
    btn.addEventListener("click", function () {
      handleDelete(this.dataset.id);
    });
  });

  // Gắn event sau khi render xong
  document.querySelectorAll(".btn-update").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".update")
        .forEach((u) => u.classList.add("hidden"));
      let li = this.closest("li");
      li.querySelector(".update").classList.remove("hidden");
    });
  });
  handleUpdateForm();
}

// function renderRecipes(recipes) {
//   let htmls = recipes.map(function (recipe) {
//     return `<li>
//                 <h3>Tên món ăn: ${recipe.name}</h3>
//                 <p><b>Nguyên liệu:</b> ${recipe.ingredients}</p>
//                  <button onclick="handleDelete(${recipe.id})">Xóa</button>
//              </li>`;
//   });
//   listRecipesBlock.innerHTML = htmls.join(" ");
// }

function handleCreateForm() {
  let createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    let ingredients = document.querySelector('input[name="ingredients"]').value;
    let data = {
      name: name,
      ingredients: ingredients,
    };
    postRecipe(data).then(console.log).catch("chac bi loi r ");
  };
}

function handleUpdateForm() {
  let updateBtn = document.querySelectorAll("#update").forEach(function (btn) {
    btn.addEventListener("click", function () {
      let li = this.closest("li");
      let id = li.querySelector(".edit-id").value;
      let name = li.querySelector(".edit-name").value;
      let ingredients = li.querySelector(".edit-ingredients").value;
      putRecipe(id, name, ingredients)
        .then(console.log)
        .catch("chac bi loi r ");
    });
  });
}
