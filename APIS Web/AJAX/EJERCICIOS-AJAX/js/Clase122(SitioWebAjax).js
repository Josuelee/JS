const $main = document.querySelector("main");

const Ajax = ({ url }) => {
  const xhr = new XMLHttpRequest();

  console.log(xhr);
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;
    if (xhr.status > 199 && xhr.status < 300) {
      $main.innerHTML = xhr.responseText
    } else {
      $main.innerHTML = xhr.responseText ||  `ERROR: ${xhr.status} No se obtuno ninguna respuesta`      
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-type", "text/html; charset= utf-8");
  xhr.send();
};

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("#home")) {
    Ajax({ url: e.target.href });
  }
  if (e.target.matches("#about")) {
    Ajax({ url: e.target.href });
  }
  if (e.target.matches("#service")) {
    Ajax({ url: e.target.href });
  }
  if (e.target.matches("#contact")) {
    Ajax({ url: e.target.href });
  }
});

document.addEventListener("DOMContentLoaded" , ()=>Ajax({url: "assets/home.html"}))
