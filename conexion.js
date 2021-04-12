//Pasos para conectarme al servidor de spotify

//1. Identifico la URL DEL SERVIDOR
let url="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";

//2. Si es necesario identifico un TOKEN de autorización
let token="Bearer BQBk2g_mIeoWEDXHhm9SGjIPO_FmWBXuF_bgdhuZFQw9JPnywmZZay3DcxB53L_vjd856cBZDrJJA8fuYDUJzF4ZzErhNUYJvcBb8ZkiKV8A1Pt1j0E4VpOAV3Q44sYz7Zh0sxUedWej2nwKWu0";

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