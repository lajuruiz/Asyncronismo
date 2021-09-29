let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;

let API="https://rickandmortyapi.com/api/character/";

//fech es una implementacion es6 es para hacer peticiones pero ella utiliza promesas  
//como se esta trabajando callbacks se usa el xmlhttprequest

function fetchData(url_api ,  callback){
    let xhttp= new XMLHttpRequest();
    //creado por microsoft XMLHttpRequest
    //xhttp es un shortcut 
    // con get se abre la conexion 
    xhttp.open("GET", url_api,true)
    // el tercer elemento en este caso true paraa ctivar el //asincronismo 
    //el true esta activando el asincronismo 
    xhttp.onreadystatechange= function (event){
        // se realiza la validacion para saber si se ejecuta el callback 
        if(xhttp.readyState===4){
            if (xhttp.status===200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error= new Error("error" + url_api);
                return callback(error, null)
            }
        }
    }
    // .send para enviar la solicitud
     xhttp.send();
}

// hacer peticion a nuestra API y obtener cuantos elementos tiene (personajes), acceder al primer personaje 
//y obtener la ubicacion en la que se encuentra para despues saber en que dimension esta 

//multiples peticiones a un API con Callbacks
//data1 informacion o los datos resultantes de la peticion 
fetchData(API, function(error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3){
        if(error3) return console.error(error3);
        //callback hell 
        // donde hago muchas peticiones encadenadas 
        //mala practica
        
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        }) 
    })
})