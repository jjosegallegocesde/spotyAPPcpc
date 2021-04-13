//1. URL DEL SERVIDOR DE SPOTIFY(PEDIR TOKEN)
let url="https://accounts.spotify.com/api/token";

//2 DATOS DE CONTROL PARA DIENTIFICARME EN EL SERVIDOR DE SPOTIFY
let llave1="grant_type=client_credentials";
let llave2="client_id=c2b2053a590541d89ca4448ab69fbd6c";
let llave3="client_secret=a316cc09beb847e88bb203fd1ffad1d2";

//3 DEFINIR PARAMTEROS DE ENVIO DE DATOS
let parametros={
    method:"POST",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body:llave1+"&"+llave2+"&"+llave3
}

//4 LLAMAR AL SERVIDOR
fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>traerCanciones(datos)) 


//5. Funcion para cargar datos del artista
function traerCanciones(datosToken){

    let token="Bearer "+datosToken.access_token;
    
    let url="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";

    let parametros={
        method:"GET",
        headers:{"Authorization":token}
    }

    fetch(url,parametros)
        .then(respuesta=>respuesta.json())
        .then(datos=>seleccionarInformacion(datos))


}

function seleccionarInformacion(datos){

    
    console.log(datos.tracks[0].album.images[0].url);//Imagen del album
    console.log(datos.tracks[0].preview_url); //MP3 cancion
    console.log(datos.tracks[0].name); //nombre cancion

    

    let cancion=document.getElementById("cancion1");
    cancion.src=datos.tracks[0].preview_url;

}