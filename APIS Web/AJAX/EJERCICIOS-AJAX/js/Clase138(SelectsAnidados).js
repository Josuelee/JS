const d = document;
const $principal = d.getElementById("principal");
const $secondary = d.getElementById("secondary");

const fillStates = () => {
  fetch(`https://apis.datos.gob.ar/georef/api/provincias?`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let province = json.provincias;
      let $options = '<option value="Provincia">--Provincia--</option>';

      province.forEach((el,i) => $options += ` <option value="${el.nombre}">${i+1}. ${el.nombre}</option>`)
      $principal.innerHTML = $options;

    })
    .catch((err) => {
      console.error(`${err} ocurrio un error`);
      let message = err.statusText || "Ocurrio un error";
      $principal.insertAdjacentHTML(
        "afterend",
        `<p>Error ${err.status}: ${message}</p>`
      );
    });
};

const fillDepartaments = (province) => {
  fetch(
    `https://apis.datos.gob.ar/georef/api/municipios?provincia=${province}&campos=id,nombre&max=100`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      let municipality = json.municipios;
      let $options = '<option value="Municipalidad">--Municipalidad--</option>';

      (municipality.length !== 0) 
        ? municipality.forEach((el,i) => $options += `<option value="${el.nombre}">${i+1}. ${el.nombre}</option>`)
        :$options += `<option value="No hay municipalidad">La provincia ${province} no tiene municipalidad!</option>`
            
      $secondary.innerHTML = $options;
    });
};

d.addEventListener("DOMContentLoaded", fillStates);

$principal.addEventListener("change", (e) => fillDepartaments(e.target.value));
