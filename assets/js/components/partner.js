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

const renderPartners = data => {
  document.getElementById("partners").innerHTML = "";
  for (index = 0; index < 10; index++) {
    // renders the partners
    let partnerInfo = data[index];
    let partnerHTML = createPartnerHTML(partnerInfo);
    $(".partners").append(partnerHTML);
  }
};

renderPartners(data);

const partnerOrder1 = (partners, partnerOrders) => {
  partners[0].style = "order: 1";
  partners[1].style = "order: 2";
  partners[2].style = "order: 3";
  partners[3].style = "order: 4";
  partners[4].style = "order: 5";
  partners[5].style = "order: 6";
  partners[6].style = "order: 7";
  partners[7].style = "order: 8";
  partners[8].style = "order: 9";
  partners[9].style = "order: 10";

  for (index = 0; index < 10; index++) {
    partnerOrders[index].innerHTML = partners[index].style.order;
  }
};

const partnerOrder2 = (partners, partnerOrders) => {
  partners[0].style = "order: 1";
  partners[1].style = "order: 2";
  partners[2].style = "order: 3";
  partners[3].style = "order: 4";
  partners[4].style = "order: 5";
  partners[5].style = "order: 6";
  partners[6].style = "order: 10";
  partners[7].style = "order: 9";
  partners[8].style = "order: 8";
  partners[9].style = "order: 7";

  for (index = 0; index < 10; index++) {
    partnerOrders[index].innerHTML = partners[index].style.order;
  }
};

const partnerOrder3 = partners => {
  partners[0].style = "order: 2";
  partners[1].style = "order: 5";
  partners[2].style = "order: 1";
  partners[3].style = "order: 6";
  partners[4].style = "order: 3";
  partners[5].style = "order: 7";
  partners[6].style = "order: 4";
  partners[7].style = "order: 8";
  partners[8].style = "order: 9";
  partners[9].style = "order: 10";

  for (index = 0; index < 10; index++) {
    partnerOrders[index].innerHTML = partners[index].style.order;
  }
};

const partnerOrder4 = partners => {
  partners[0].style = "order:1";
  partners[1].style = "order:5";
  partners[2].style = "order:4";
  partners[3].style = "order:3";
  partners[4].style = "order:2";
  partners[5].style = "order:6";
  partners[6].style = "order:9";
  partners[7].style = "order:8";
  partners[8].style = "order:7";
  partners[9].style = "order:10";

  for (index = 0; index < 10; index++) {
    partnerOrders[index].innerHTML = partners[index].style.order;
  }
};

const calculateOrder = (partners, partnerOrders) => {
  if (btnCond1 && btnCond3 === true) {
    partnerOrder1(partners, partnerOrders);
  } else if (btnCond1 && btnCond4 === true) {
    partnerOrder2(partners);
  } else if (btnCond2 && btnCond3 === true) {
    partnerOrder3(partners);
  } else if (btnCond2 && btnCond4 === true) {
    partnerOrder4(partners);
  } else {
    partnerOrder1(partners);
  }
};

const partnerArr = document.querySelectorAll("[data-partner]");
const partnerOrders = document.querySelectorAll("[data-number]");

// changes the stlying for each btn element onclick, changes the values for page link variable then calls function calculating page
filterBtn1.addEventListener("click", () => {
  switchClass(filterBtn1, styleActive, styleInactive);
  switchClass(filterBtn2, styleInactive, styleActive);
  btnCond1 = true;
  btnCond2 = false;
  calculateOrder(partnerArr, partnerOrders);
});

filterBtn2.addEventListener("click", () => {
  switchClass(filterBtn2, styleActive, styleInactive);
  switchClass(filterBtn1, styleInactive, styleActive);
  btnCond2 = true;
  btnCond1 = false;
  calculateOrder(partnerArr);
});

filterBtn3.addEventListener("click", () => {
  switchClass(filterBtn3, styleActive, styleInactive);
  switchClass(filterBtn4, styleInactive, styleActive);
  btnCond3 = true;
  btnCond4 = false;
  calculateOrder(partnerArr);
});

filterBtn4.addEventListener("click", () => {
  switchClass(filterBtn4, styleActive, styleInactive);
  switchClass(filterBtn3, styleInactive, styleActive);
  btnCond4 = true;
  btnCond3 = false;
  calculateOrder(partnerArr);
});

resetBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    switchClass(filterBtn1, styleActive, styleInactive);
    switchClass(filterBtn2, styleInactive, styleActive);
    switchClass(filterBtn3, styleActive, styleInactive);
    switchClass(filterBtn4, styleInactive, styleActive);
    switchClass(filterBlock, "filter--hidden", "filter--visible");
    btnCond1 = true;
    btnCond3 = true;
    btnCond2 = false;
    btnCond4 = false;
    calculateOrder(partnerArr);
  });
});

goLink.addEventListener("click", () => {
  switchClass(filterBlock, "filter--hidden", "filter--visible");
  renderPartners(data);
});

openFilterBtn.addEventListener("click", () => {
  switchClass(filterBlock, "filter--visible", "filter--hidden");
});

cancelBtn.addEventListener("click", () => {
  switchClass(filterBlock, "filter--hidden", "filter--visible");
});
