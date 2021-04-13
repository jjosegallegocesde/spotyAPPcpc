//Pasos para conectarme al servidor de spotify

//1. Identifico la URL DEL SERVIDOR
let url="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";

//2. Si es necesario identifico un TOKEN de autorización
let token="Bearer BQCBAl7tQ2MbFCxLMvWcdBYkCOsKgjHj_yy9KjDEcuaeHmZAwYzbhfe2YsqATRkS6znTzYCKV64Yppj6Cg1hXwu5LojV_2AnpS_ZoFUdvwyYp8xEqkxNSZHDYLw3Lw_IJeUk9Qg48ctXI22w9KY";

//3. Configuro el metodo (GET/POST/PUT/DELETE)
// las cabeceras del envio de datos
let parametros={
    method:"GET",
    headers:{"Authorization":token}
}

//4. Establecer la conexión al servidor de spotify
fetch(url,parametros)
.then(respuesta=>respuesta.json())
.then(datos=>seleccionarInformacion(datos))

//5. Crear una funcion para seleccionar información
function seleccionarInformacion(datos){

    
    console.log(datos.tracks[0].album.images[0].url);//Imagen del album
    console.log(datos.tracks[0].preview_url); //MP3 cancion
    console.log(datos.tracks[0].name); //nombre cancion

    

    let cancion=document.getElementById("cancion1");
    cancion.src=datos.tracks[0].preview_url;

}