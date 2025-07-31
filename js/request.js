// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

const loader = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getData = async (resource) => {
  loader(true);
  const request = await fetch(resource);
  if (request.status != 200) {
    throw new Error("Xatolik");
  }
  const data = await request.json();
  loader(false);
  return data;
};

const reload = () => {
  getData(API)
    .then((data) => {
      updateUI(data.results);
    })
    .catch((err) => {
      console.log(err.message);
      loader(false);
    });
};

document.addEventListener("DOMContentLoaded", reload);
