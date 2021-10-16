const $main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/blog.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
      console.log(text);

      $main.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
      console.log(err);
      $main.innerHTML = `<p>Ocurrio un error al traer los datos MARKDOWN</p>`;
    });

  /* fetch("assets/blog.md")
  .then(res=>console.log(res)) */
});
