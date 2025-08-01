const user = document.getElementById("user__card");
const template = document.querySelector("template");

//get result and update UI
export const updateUI = (data) => {
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
