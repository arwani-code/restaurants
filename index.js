const restaurantList = document.getElementById("restaurant-list");
const baseURL = "https://restaurant-api.dicoding.dev/list";

document.addEventListener("DOMContentLoaded", () => {
  fetch(baseURL)
    .then((e) => e.json())
    .then((e) => {
      e.restaurants.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element.description;
        restaurantList.appendChild(li);
      });
    })
    .catch((e) => console.log(e));
});
