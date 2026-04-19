const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabItem = $$(".tab-item");
const tabPane = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".line");

console.log(tabActive);
tabItem.forEach((tab, index) => {
  const pane = tabPane[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
    line.style.width = this.offsetWidth + "px";
    line.style.left = this.offsetLeft + "px";
  };
});
console.log(tabItem, tabPane);
