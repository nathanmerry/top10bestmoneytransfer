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

console.log(resetBtns)

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
    let partnerInfo = data[index];
    calculateOrder();
    let partnerHTML = createPartnerHTML(partnerInfo);
    $(".partners").append(partnerHTML);
  }
};

const partnerOrder1 = () => {
  data[0].order = 1;
  data[1].order = 2;
  data[2].order = 3;
  data[3].order = 4;
  data[4].order = 5;
  data[5].order = 6;
  data[6].order = 7;
  data[7].order = 8;
  data[8].order = 9;
  data[9].order = 10;
};

const partnerOrder2 = () => {
  data[0].order = 3;
  data[1].order = 2;
  data[2].order = 1;
  data[3].order = 4;
  data[4].order = 5;
  data[5].order = 6;
  data[6].order = 10;
  data[7].order = 9;
  data[8].order = 8;
  data[9].order = 7;
};

const partnerOrder3 = () => {
  data[0].order = 2;
  data[1].order = 5;
  data[2].order = 1;
  data[3].order = 6;
  data[4].order = 3;
  data[5].order = 7;
  data[6].order = 4;
  data[7].order = 8;
  data[8].order = 9;
  data[9].order = 10;
};

const partnerOrder4 = () => {
  data[0].order = 1;
  data[1].order = 5;
  data[2].order = 4;
  data[3].order = 3;
  data[4].order = 2;
  data[5].order = 6;
  data[6].order = 9;
  data[7].order = 8;
  data[8].order = 7;
  data[9].order = 10;
};

const calculateOrder = () => {
  if (btnCond1 && btnCond3 === true) {
    partnerOrder1();
  } else if (btnCond1 && btnCond4 === true) {
    partnerOrder2();
  } else if (btnCond2 && btnCond3 === true) {
    partnerOrder3();
  } else if (btnCond2 && btnCond4 === true) {
    partnerOrder4();
  } else {
    partnerOrder1();
  }
};

renderPartners(data);

// changes the stlying for each btn element onclick, changes the values for page link variable then calls function calculating page
filterBtn1.addEventListener("click", () => {
  switchClass(filterBtn1, styleActive, styleInactive);
  switchClass(filterBtn2, styleInactive, styleActive);
  btnCond1 = true;
  btnCond2 = false;
  renderPartners(data);
});

filterBtn2.addEventListener("click", () => {
  switchClass(filterBtn2, styleActive, styleInactive);
  switchClass(filterBtn1, styleInactive, styleActive);
  btnCond2 = true;
  btnCond1 = false;
  renderPartners(data);
});

filterBtn3.addEventListener("click", () => {
  switchClass(filterBtn3, styleActive, styleInactive);
  switchClass(filterBtn4, styleInactive, styleActive);
  btnCond3 = true;
  btnCond4 = false;
  renderPartners(data);
});

filterBtn4.addEventListener("click", () => {
  switchClass(filterBtn4, styleActive, styleInactive);
  switchClass(filterBtn3, styleInactive, styleActive);
  btnCond4 = true;
  btnCond3 = false;
  renderPartners(data);
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
    renderPartners(data);
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