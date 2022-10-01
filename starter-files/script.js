// API
const API_ENDPOINT = 'https://yesno.wtf/api';


let divRespuesta = document.getElementById("answer");
let btnGet = document.getElementById("button");
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 5 seconds
 * 5. Optional: add loading/error states
 *
 */

 //consige los datos mediante un fetch  y muestra en html

function fetchAnswer (){
    let promesa = fetch("https://yesno.wtf/api", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then((data) => {
            console.log(data.answer);
            divRespuesta.innerText = data.answer;
            console.log(typeof (data));
            const tiempo = setTimeout(clear, 5000); //limpiar la consola después de 5 segundos
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.log("este es el error " + error);
    })}; //Fetchansswer

 
 //event listener
 
 btnGet.addEventListener("click", function (e) {
 
     e.preventDefault();
     if (validar()==true) {
         fetchAnswer();
     }
 
 });//btnGet
 
 //valida que exitan datos en la pregunta
 function validar() {
    if (document.getElementById("input").value) {
        return true;
    } else {
        divRespuesta.innerText="ingresa una pregunta";
        return false;
    }

};//validar
 

 

//limpiar consola
function clear() {
    answer.innerText = "";
    document.getElementById("input").value = '';
};