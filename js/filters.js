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
// Partners
const partner1 = document.getElementById("js-partner-1");
const partner2 = document.getElementById("js-partner-2");
const partner3 = document.getElementById("js-partner-3");
const partner4 = document.getElementById("js-partner-4");
const partner5 = document.getElementById("js-partner-5");
const partner6 = document.getElementById("js-partner-6");
const partner7 = document.getElementById("js-partner-7");
const partner8 = document.getElementById("js-partner-8");
const partner9 = document.getElementById("js-partner-9");
const partner10 = document.getElementById("js-partner-10");
// partner number text
const partnerNumber1 = document.getElementById("js-ptr-1-number");
const partnerNumber2 = document.getElementById("js-ptr-2-number");
const partnerNumber3 = document.getElementById("js-ptr-3-number");
const partnerNumber4 = document.getElementById("js-ptr-4-number");
const partnerNumber5 = document.getElementById("js-ptr-5-number");
const partnerNumber6 = document.getElementById("js-ptr-6-number");
const partnerNumber7 = document.getElementById("js-ptr-7-number");
const partnerNumber8 = document.getElementById("js-ptr-8-number");
const partnerNumber9 = document.getElementById("js-ptr-9-number");
const partnerNumber10 = document.getElementById("js-ptr-10-number");

console.log(partnerNumber1);

// console.log(openFilterBtn)

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

const partnerOrder1 = () => {
  console.log("1");
  partner1.style.order = "1";
  partnerNumber1.innerText = "1";

  partner2.style.order = "2";
  partnerNumber2.innerText = "2";

  partner3.style.order = "3";
  partnerNumber3.innerText = "3";

  partner4.style.order = "4";
  partnerNumber4.innerText = "4";

  partner5.style.order = "5";
  partnerNumber5.innerText = "5";

  partner6.style.order = "6";
  partnerNumber6.innerText = "6";

  partner7.style.order = "7";
  partnerNumber7.innerText = "7";

  partner8.style.order = "8";
  partnerNumber8.innerText = "8";

  partner9.style.order = "9";
  partnerNumber9.innerText = "9";

  partner10.style.order = "10";
  partnerNumber10.innerText = "10";
};

const partnerOrder2 = () => {
  console.log("2");
  partner1.style.order = "2";
  partnerNumber1.innerText = "2";

  partner2.style.order = "1";
  partnerNumber2.innerText = "1";

  partner3.style.order = "4";
  partnerNumber3.innerText = "4";

  partner4.style.order = "3";
  partnerNumber4.innerText = "3";

  partner5.style.order = "6";
  partnerNumber5.innerText = "6";

  partner6.style.order = "5";
  partnerNumber6.innerText = "5";

  partner7.style.order = "8";
  partnerNumber7.innerText = "8";

  partner8.style.order = "7";
  partnerNumber8.innerText = "7";

  partner9.style.order = "10";
  partnerNumber9.innerText = "10";

  partner10.style.order = "9";
  partnerNumber10.innerText = "9";
};

const partnerOrder3 = () => {
  console.log("3");
  partner1.style.order = "10";
  partnerNumber1.innerText = "10";

  partner2.style.order = "9";
  partnerNumber2.innerText = "9";

  partner3.style.order = "8";
  partnerNumber3.innerText = "8";

  partner4.style.order = "7";
  partnerNumber4.innerText = "7";

  partner5.style.order = "6";
  partnerNumber5.innerText = "6";

  partner6.style.order = "5";
  partnerNumber6.innerText = "5";

  partner7.style.order = "4";
  partnerNumber7.innerText = "4";

  partner8.style.order = "2";
  partnerNumber8.innerText = "2";

  partner9.style.order = 1;
  partnerNumber9.innerText = "1";

  partner10.style.order = "3";
  partnerNumber10.innerText = "3";
};

const partnerOrder4 = () => {
  console.log("4");
  partner1.style.order = "5";
  partnerNumber1.innerText = "5";

  partner2.style.order = "6";
  partnerNumber2.innerText = "6";

  partner3.style.order = "7";
  partnerNumber3.innerText = "7";

  partner4.style.order = "8";
  partnerNumber4.innerText = "8";

  partner5.style.order = "9";
  partnerNumber5.innerText = "9";

  partner6.style.order = "10";
  partnerNumber6.innerText = "10";

  partner7.style.order = "1";
  partnerNumber7.innerText = "1";

  partner8.style.order = "2";
  partnerNumber8.innerText = "2";

  partner9.style.order = "3";
  partnerNumber9.innerText = "3";

  partner10.style.order = "4";
  partnerNumber10.innerText = "4";
};

// calculates what page go btn will go to depeanding on page link conditions
const calculateOrder = () => {
  if (btnCond1 && btnCond3 === true) {
    // filterLink = "./filter/personal-1.html";
    partnerOrder1();
  } else if (btnCond1 && btnCond4 === true) {
    // filterLink = "./filter/personal-10.html";
    partnerOrder2();
  } else if (btnCond2 && btnCond3 === true) {
    // filterLink = "./filter/business-1.html";
    partnerOrder3();
  } else if (btnCond2 && btnCond4 === true) {
    // filterLink = "./filter/business-10.html";
    partnerOrder4();
  } else {
    // filterLink = "./filter/personal-1.html";
    partnerOrder1();
  }
  // goLink.setAttribute("href", filterLink);
};

console.log(btnCond1, btnCond2, btnCond3, btnCond4);

calculateOrder();

// changes the stlying for each btn element onclick, changes the values for page link variable then calls function calculating page
filterBtn1.addEventListener("click", () => {
  switchClass(filterBtn1, styleActive, styleInactive);
  switchClass(filterBtn2, styleInactive, styleActive);
  btnCond1 = true;
  btnCond2 = false;
  calculateOrder();
});

filterBtn2.addEventListener("click", () => {
  switchClass(filterBtn2, styleActive, styleInactive);
  switchClass(filterBtn1, styleInactive, styleActive);
  btnCond2 = true;
  btnCond1 = false;
  calculateOrder();
});

filterBtn3.addEventListener("click", () => {
  switchClass(filterBtn3, styleActive, styleInactive);
  switchClass(filterBtn4, styleInactive, styleActive);
  btnCond3 = true;
  btnCond4 = false;
  calculateOrder();
});

filterBtn4.addEventListener("click", () => {
  switchClass(filterBtn4, styleActive, styleInactive);
  switchClass(filterBtn3, styleInactive, styleActive);
  btnCond4 = true;
  btnCond3 = false;
  calculateOrder();
});

// resets the buttons and conditions back to normal

// resetBtn.addEventListener("click", () => {
//   switchClass(filterBtn1, styleActive, styleInactive);
//   switchClass(filterBtn2, styleInactive, styleActive);
//   switchClass(filterBtn3, styleActive, styleInactive);
//   switchClass(filterBtn4, styleInactive, styleActive);
//   btnCond1 = true;
//   btnCond3 = true;
//   btnCond2 = false;
//   btnCond4 = false;
//   calculateOrder();
// });

resetBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    switchClass(filterBtn1, styleActive, styleInactive);
    switchClass(filterBtn2, styleInactive, styleActive);
    switchClass(filterBtn3, styleActive, styleInactive);
    switchClass(filterBtn4, styleInactive, styleActive);
    btnCond1 = true;
    btnCond3 = true;
    btnCond2 = false;
    btnCond4 = false;
    calculateOrder();
  });
});

cancelBtn.addEventListener("click", () => {
  switchClass(filterBlock, "filter--hidden", "filter--visible");
});

goLink.addEventListener("click", () => {
  switchClass(filterBlock, "filter--hidden", "filter--visible");
  calculateOrder();
});

openFilterBtn.addEventListener("click", () => {
  console.log(openFilterBtn);
  switchClass(filterBlock, "filter--visible", "filter--hidden");
});
