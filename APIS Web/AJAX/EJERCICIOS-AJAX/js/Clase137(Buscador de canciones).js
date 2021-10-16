const d = document;
const $form = d.getElementById("form");
const $template = d.getElementById("template").content;
const $singContent = d.getElementById("sing-container");
const $fragment = d.createDocumentFragment();

//strArtistThumb esta es la imagen
d.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    if (e.target === $form) {
      $singContent.innerHTML = `<img src="assets/img/oval.svg" alt="loading" class ='loader' >`;
  
      const $singer = e.target.artist.value.toLowerCase();
      const $sing = e.target.sing.value.toLowerCase();
  
      let resSinger =  fetch(
        `https://theaudiodb.com/api/v1/json/1/search.php?s=${$singer}`
      );
      
      let resLyrics =  fetch(
        `https://api.lyrics.ovh/v1/${$singer}/${$sing}`,
        {
          headers: {
            "Content-Type": "Aplication/json",
          },
          mode: "no-cors",
        }
      ); 
  
      const [singerRes , lyricsRes] = await Promise.all([resSinger, resLyrics])
      
      
     /*  let jsonLyrics = await resLyrics.json(); */
  
        let jsonSinger = await singerRes.json()
  
      if (jsonSinger.artists === null) {
        $singContent.innerHTML = `<p class = "singer__notFound">No se encuentra al artista <mark>${$singer}</mark></p>`;
      } else {
        const $img = $template.getElementById("img");
        let artist = jsonSinger.artists[0];
  
        $img.src = artist.strArtistThumb;
        $img.alt = artist.strArtist;
  
        $template.getElementById("artist").textContent = artist.strArtist;
        $template.getElementById("information").textContent =
          artist.strBiographyEN;
  
        const $clone = d.importNode($template, true);
  
        
        $singContent.innerHTML = "";
        $singContent.appendChild($clone);
      }
    }
  } catch (err) {
    console.log(err)
    let message = err.statusText || "Ocurrio un error"
    $singContent.innerHTML = `<p class = "singer__notFound">Error ${err.status}: ${message}</p>`
  }
  
});
