const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user__card");
const clearBtn = document.getElementById("clear__button");
const template = document.querySelector("template");

//refresh
formButton.addEventListener("click", (e) => {
  e.preventDefault;
  reload();
  clearBtn.classList.remove("hidden");
});

// clear

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

// search by name
form["form__input"].addEventListener("input", () => {
  const inputValue = form["form__input"].value.toLocaleLowerCase();
  const userName = document.querySelectorAll(".user__name");

  userName.forEach((item) => {
    if (
      item.lastElementChild.textContent.toLocaleLowerCase().includes(inputValue)
    ) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

//get result and update UI
const updateUI = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { gender, name, picture, location, dob } = item;

    const clone = template.content.cloneNode(true);

    const user__img = clone.querySelector(".user__img");
    const user__name_tem = clone.querySelector(".user__name_tem");
    const user__age__tem = clone.querySelector(".user__age__tem");
    const user__gender__tem = clone.querySelector(".user__gender__tem");
    const user__location__tem = clone.querySelector(".user__location__tem");

    user__img.src = `${picture.large}`;
    user__name_tem.textContent = `${name.title} ${name.first} ${name.last}`;
    user__age__tem.textContent = `${dob.age}`;
    user__location__tem.textContent = `${location.city} ${location.country}`;
    user__gender__tem.textContent = `${gender}`;

    user.appendChild(clone);
  });
};

//delete user

document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "delete__btn") {
    e.target.parentElement.remove();
  }
  if (!user.children.length) {
    clearBtn.classList.add("hidden");
  }
});
