const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

// DOM elements
const filterBtn1 = document.getElementById("js-btn-1-1");
const filterBtn2 = document.getElementById("js-btn-2-1");
const filterBtn3 = document.getElementById("js-btn-1-2");
const filterBtn4 = document.getElementById("js-btn-2-2");
const goLink = document.getElementById("js-go-link");
// const resetBtn = document.getElementById("js-reset-btn");
// const resetBtn2 = document.getElementById("js-reset-btn-2");

const resetBtns = [
  document.getElementById("js-reset-btn"),
  document.getElementById("js-reset-btn-2")
];

const cancelBtn = document.getElementById("js-cancel-btn");
const filterBlock = document.getElementById("js-filter");
const openFilterBtn = document.getElementById("js-filter-open");

// button styles
const styleActive = "filter__refine-btn--active";
const styleInactive = "filter__refine-btn--inactive";

// page link condition values;
let btnCond1;
let btnCond2;
let btnCond3;
let btnCond4;
let filterLink;

// sets the inital boolen value of page link onditions on load
if (filterBtn1.classList.contains(styleActive)) {
  btnCond1 = true;
  btnCond2 = false;
} else if (filterBtn2.classList.contains(styleActive)) {
  btnCond2 = true;
  btnCond3 = false;
}
if (filterBtn3.classList.contains(styleActive)) {
  btnCond3 = true;
  btnCond4 = false;
} else if (filterBtn4.classList.contains(styleActive)) {
  btnCond4 = true;
  btnCond3 = false;
}

// changes the stlying for each btn element onclick, changes the values for page link variable then calls function calculating page
filterBtn1.addEventListener("click", () => {
  switchClass(filterBtn1, styleActive, styleInactive);
  switchClass(filterBtn2, styleInactive, styleActive);
  btnCond1 = true;
  btnCond2 = false;
});

filterBtn2.addEventListener("click", () => {
  switchClass(filterBtn2, styleActive, styleInactive);
  switchClass(filterBtn1, styleInactive, styleActive);
  btnCond2 = true;
  btnCond1 = false;
});

filterBtn3.addEventListener("click", () => {
  switchClass(filterBtn3, styleActive, styleInactive);
  switchClass(filterBtn4, styleInactive, styleActive);
  btnCond3 = true;
  btnCond4 = false;
});

filterBtn4.addEventListener("click", () => {
  switchClass(filterBtn4, styleActive, styleInactive);
  switchClass(filterBtn3, styleInactive, styleActive);
  btnCond4 = true;
  btnCond3 = false;
});

openFilterBtn.addEventListener("click", () => {
  console.log(openFilterBtn);
  switchClass(filterBlock, "filter--visible", "filter--hidden");
});
