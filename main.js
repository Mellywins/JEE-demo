const list = document.querySelector("#list");
const loading = document.querySelector("#loading");
const URL = "https://api.spacexdata.com/v3/rockets";

// AJAX call
fetch(URL)
  .then((e) => {
    loading.parentNode.removeChild(loading);
    return e.json();
  })
  .then((e) => {
    return e.map((el) => {
      const title = document.createTextNode(el.rocket_name);
      const description = document.createTextNode(el.description);

      const titleEl = document.createElement("h2");
      titleEl.appendChild(title);

      const descriptionEl = document.createElement("p");
      descriptionEl.appendChild(description);

      const listEl = document.createElement("li");

      // add title and description
      listEl.appendChild(titleEl);
      listEl.appendChild(descriptionEl);

      return listEl;
    });
  })
  .then((e) =>
    e.forEach((element) => {
      list.appendChild(element);
    })
  );
