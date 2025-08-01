import "./mode.js";
import "./action.js";
import { getData, API } from "./request.js";
import { updateUI } from "./updateUI.js";

//reload
export const reload = () => {
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
