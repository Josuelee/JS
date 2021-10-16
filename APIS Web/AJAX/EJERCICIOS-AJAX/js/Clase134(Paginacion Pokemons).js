const d = document;
const $main = d.querySelector("main");
const $nav = d.getElementById("links");
const pokeAPI = async (url) => {
  $main.innerHTML = `<img src="assets/img/oval.svg" alt="loader">`;
  try {
    let res = await fetch(url);
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let $template = "";
    let $previous = "";
    let $next = "";

    for (let x = 0; x < json.results.length; x++) {
      try {
        let res = await fetch(json.results[x].url);
        let pokemon = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        $template += `
        <figure class ="poke-grid__item">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.species.name}">
          <figcaption class = "poke-grid__text">${pokemon.species.name}</figcaption>
        </figure>
        `;
      } catch (error) {
        let message = error.statusText | "Ocurrio un error";

        $template += `
          <figure>
            <figcaption>${message}</figcaption>
          </figure>
        `;

        console.log(error);
      }
    }
    $main.innerHTML = $template;
    $next = json.next ? `<a href="${json.next}">⏭️</a>` : "";
    $previous = json.previous ? `<a href="${json.previous}">⏮️</a>` : "";

    $nav.innerHTML = $previous + " " + $next;

  } catch (error) {
    let message = error.statusText | "Ocurrio un error";
    $main.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
  }
};

d.addEventListener("DOMContentLoaded", () =>
  pokeAPI("https://pokeapi.co/api/v2/pokemon/")
);

d.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.matches("#links a")) {
    pokeAPI(e.target.href);
    console.log(e.target.href);
  }
});
