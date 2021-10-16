console.log("si es este archivo va?")


const d = document,
  $form = d.getElementById("form"),
  $formElements = d.querySelectorAll("[required]"),
  $labels = d.querySelectorAll(".form__container"),
  $loader = d.getElementById("loader"),
  $resText = d.getElementById("res-text");

d.addEventListener("keyup", (e) => {
  $formElements.forEach((formElement) => {
    if (formElement === e.target) {
      const text = formElement.pattern || formElement.dataset.pattern;
      if (
        new RegExp(text).test(formElement.value) ||
        formElement.value === ""
      ) {
        $labels.forEach((label) => {
          if (label.id === formElement.name)
            label.classList.remove("form__container--error");
        });
      } else {
        $labels.forEach((label) => {
          if (label.id === formElement.name)
            label.classList.add("form__container--error");
        });
      }
    }
  });
});
d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    $loader.classList.add("form__loader--active");
    

    fetch("http://kunjoemail.great-site.net/sendEmail.php", {
      method: "POST",
      body: new FormData($form),
      mode: "cors"
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((text) => {
        console.log(text);
        $loader.classList.remove("form__loader--active");
        $resText.classList.add("form__response--active");
        //$resText.textContent = text.message
        setTimeout(
          () => $resText.classList.remove("form__response--active"),
          3000
          );
        })
        .catch((err) => {
          console.log(err)
        $loader.classList.remove("form__loader--active");
        $resText.classList.add("form__response--active");
        //$resText.textContent = err.message;
        setTimeout(
          () => $resText.classList.remove("form__response--active"),
          3000
        );
      });
  }
});
