// let postApi = "https://jsonplaceholder.typicode.com/posts?_limit=3";
// fetch(postApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (posts) {
//     // console.log(posts);
//     let htmls = posts.map(function (post) {
//       return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//     });
//     let html = htmls.join("");
//     document.getElementById("post-block").innerHTML = html;
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/*--------------------------------------------*/
let listRecipes = document.getElementById("list-recipes");
let recipesAPI = "http://localhost:3000/recipes";

function start() {
  // getRecipes(function (recipes) {
  //   renderRecipes(recipes);
  // }); ==
  getRecipes(renderRecipes);
  createForm();
}
start();

function getRecipes(callback) {
  fetch(recipesAPI)
    .then((res) => res.json())
    .then(callback)
    .catch(function (err) {
      console.log(err);
    });
}

function createRecipe(data, callback) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(recipesAPI, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderRecipes(recipes) {
  let htmls = recipes.map(function (recipe) {
    return `<li>
                <h3>Food_Name: ${recipe.name}</h3>
                <p>Ingredients: ${recipe.ingredients}   </p>
              </li>`;
  });
  let html = htmls.join("");
  listRecipes.innerHTML = html;
}

function createForm() {
  let createBtn = document.querySelector("#create");
  createBtn.onclick = function (e) {
    e.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let ingredients = document.querySelector('input[name="ingredients"]').value;
    let form = {
      name: name,
      ingredients: ingredients,
    };

    createRecipe(form);
  };
  // console.log(createBtn);
}
