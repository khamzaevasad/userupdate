// api
export const API = "https://randomuser.me/api/?results=30";

// for leader
const overlay = document.getElementById("overlay");

//toggle loader
const loader = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

//request
export const getData = async (resource) => {
  loader(true);
  const request = await fetch(resource);
  if (request.status != 200) {
    throw new Error("Xatolik");
  }
  const data = await request.json();
  loader(false);
  return data;
};
