export default function geolocation (div){
  const $div = document.getElementById(div),
    option = {
    enabledHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
  },

  succes = (position)=>{
    let coords = position.coords


    $div.innerHTML = `
    <p>Su posicion actual es</p >
    <ul>
      <li>Su longitud es ${coords.longitude}</li>
      <li>Su latitud es ${coords.latitude}</li>
      <li>Su precision es ${coords.accuracy} metros</li>
    </ul><br><br>
    <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 20z" target ="_blank" rel="noopener" >Ver en googleMaps</a>    

    `            
  },
  
  error = (error)=>{
    $div.innerHTML = `
    <p><mark>Error en la geolocalizacion: ${error}</mark></p>
    `
    console.log(`Error en la geolocalizacion ${error}`)
  }

  navigator.geolocation.getCurrentPosition(succes,error,option)

          
}