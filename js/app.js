const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user__card");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");

//get result and update UI
const updateUI = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { gender, name, picture, location, dob } = item;
  });
};
