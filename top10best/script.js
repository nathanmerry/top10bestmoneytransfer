const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const row1Row1 = document.getElementById("js-1-1");
const row1Row2 = document.getElementById("js-1-2");
const row2Row1 = document.getElementById("js-2-1");
const row2Row2 = document.getElementById("js-2-2");

const switchStyles = (rowActive, rowInactive) => {
  switchClass(rowActive, "cust-list-a-active", "cust-list-a-inactive");
  switchClass(rowInactive, "cust-list-a-inactive", "cust-list-a-active");
};

row1Row1.addEventListener("click", () => {
  switchStyles(row1Row1, row1Row2);
});

row1Row2.addEventListener("click", () => {
  switchStyles(row1Row2, row1Row1);
});


row2Row1.addEventListener("click", () => {
  switchStyles(row2Row1, row2Row2);
});

row2Row2.addEventListener("click", () => {
  switchStyles(row2Row2, row2Row1);
});
