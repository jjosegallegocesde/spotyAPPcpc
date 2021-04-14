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
    
    let imagen1=document.getElementById("imagen1");
    imagen1.src=datos.tracks[0].album.images[0].url;
    let audio1=document.getElementById("audio1");
    audio1.src=datos.tracks[0].preview_url;
    let titulo1=document.getElementById("titulo1");
    titulo1.textContent=datos.tracks[0].name;

    let imagen2=document.getElementById("imagen2");
    imagen2.src=datos.tracks[1].album.images[0].url;
    let audio2=document.getElementById("audio2");
    audio2.src=datos.tracks[1].preview_url;
    let titulo2=document.getElementById("titulo2");
    titulo2.textContent=datos.tracks[1].name;

    let imagen3=document.getElementById("imagen3");
    imagen3.src=datos.tracks[2].album.images[0].url;
    let audio3=document.getElementById("audio3");
    audio3.src=datos.tracks[2].preview_url;
    let titulo3=document.getElementById("titulo3");
    titulo3.textContent=datos.tracks[2].name;

    let imagen4=document.getElementById("imagen4");
    imagen4.src=datos.tracks[3].album.images[0].url;
    let audio4=document.getElementById("audio4");
    audio4.src=datos.tracks[3].preview_url;
    let titulo4=document.getElementById("titulo4");
    titulo4.textContent=datos.tracks[3].name;

    let imagen5=document.getElementById("imagen5");
    imagen5.src=datos.tracks[4].album.images[0].url;
    let audio5=document.getElementById("audio5");
    audio5.src=datos.tracks[4].preview_url;
    let titulo5=document.getElementById("titulo5");
    titulo5.textContent=datos.tracks[4].name;

    let imagen6=document.getElementById("imagen6");
    imagen6.src=datos.tracks[5].album.images[0].url;
    let audio6=document.getElementById("audio6");
    audio6.src=datos.tracks[5].preview_url;
    let titulo6=document.getElementById("titulo6");
    titulo6.textContent=datos.tracks[5].name;

}