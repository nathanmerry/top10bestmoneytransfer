// File displaying the accordian

const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const openButtons = document.querySelectorAll("[data-open]");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (
      button.nextElementSibling.classList.contains("accordian__text--hidden")
    ) {
      switchClass(
        button.nextElementSibling,
        "accordian__text--visible",
        "accordian__text--hidden"
      );
    } else {
      switchClass(
        button.nextElementSibling,
        "accordian__text--hidden",
        "accordian__text--visible"
      );
    }

    for (let i = 0; i < button.children.length; i++) {
      if (button.children[i].classList.contains("accordian__plus")) {
        if (button.children[i].innerHTML === "-") {
          button.children[i].innerHTML = "+";
        } else {
          button.children[i].innerHTML = "-";
        }
      }
    }
  });
});
