const d = document,
  w = window,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $loader = d.getElementById("loader"),
  $template = d.getElementById("post-template").content,
  $fragment = d.createDocumentFragment(),
  DOMAIN = "https://malvestida.com",
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed&page=1&per_page=5`,
  PAGES = `${API_WP}/pages`,
  CATEGORIES = `${API_WP}/categories`;

let page = 1;
let perPage = 5;

const getSiteData = () => {
  fetch(SITE)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      $site.innerHTML = `
        <h3>Sitio Web</h3>
        <h2>
          <a href="${json.url}" target = "_blank">${json.name}</a>
        </h2>
        <p>${json.description}</p>
        <p>${json.timezone_string}</p>
      `;
      console.log(json);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      $site.innerHTML = `<p>Ocurrio un error${message}</p>`;
    });
};

const getPosts = () => {
  $loader.style.display = "block";
  let categories = "";
  let tags = "";

  fetch(`${POSTS}&page=${page}&per_page=${perPage}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      json.forEach((el) => {

        el._embedded["wp:term"][0].forEach(
          (el) => (categories += `<li>${el.name}</li>`)
        );

        el._embedded["wp:term"][1].forEach(
          (el) => (tags += `<li>${el.name}</li>`)
        );

        $template.querySelector(".post__image").src = el._embedded[
          "wp:featuredmedia"
        ]
          ? el._embedded["wp:featuredmedia"][0].source_url
          : "";

        $template.querySelector(".post__title").textContent = el.title.rendered;

        $template.querySelector(".post__author").innerHTML = `
          <img src="${el._embedded.author[0].avatar_urls["48"]}" alt="${el._embedded.author[0].name}" class = "post__author-img" >
          <figcaption>${el._embedded.author[0].name}</figcaption>
        `;

        $template.querySelector(".post__date").textContent = new Date(
          el.date
        ).toLocaleString();

        $template.querySelector(".post__link").href = el.link;

        $template.querySelector(".post__excerpt").innerHTML =
          el.excerpt.rendered.replace("[&hellip;]", "...");

        $template.querySelector(".post__categories").innerHTML = `
          <p>Categories:</p>
          <ul>
            ${categories}
          </ul>
        `;
        $template.querySelector(".post__tags").innerHTML = `
          <p>Categories:</p>
          <ul>
            ${tags}
          </ul>
        `;

        $template.querySelector(".post__content > article").innerHTML =
          el.content.rendered;

        const $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $site.appendChild($fragment);
      $loader.style.display = "none";
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      $posts.innerHTML = `<p>Ocurrio un error${message}</p>`;
      $loader.style.display = "none";
    });
};

d.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
  getPosts();
});

w.addEventListener("scroll", (e) => {
  const { scrollTop, clientHeight, scrollHeight } = d.documentElement;
  console.log(scrollTop, clientHeight, scrollHeight);

  if (scrollTop + clientHeight >= scrollHeight) {
    page++;
    getPosts();
  }
});
