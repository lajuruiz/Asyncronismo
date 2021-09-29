
const somethingwillHappen = () =>{
    return new Promise((resolve, reject) => {
        if (true){
            resolve("hey lo hicimos ");
        } else{
            reject("Whoopppssss");
        }
    });
};

somethingwillHappen()
 .then(response => console.log(response))
 .catch(err => console.log (err)); 


 // ejemplo 2
// EJEMPLO CON TIEMPO 

const somethingwillHappen2 =() => {
     return new Promise((resolve, reject) => {
         if (true){
             setTimeout(() => {
                 resolve("true!!!!");
             }, 2000)
         } else {
             const error= new Error ("Whops");
             reject (error);
         }

     });
}
somethingwillHappen2()
.then(response => console.log(response))
.catch(err => console.error (err));

// tambien se puede hacer asi y agregar varios .then
//.then(response => console.log("es importante"))


//correr promesas encadenadas
//retornar un arreglo array 

Promise.all([somethingwillHappen(), somethingwillHappen2()])
.then(response => {
    console.log("array of results" , response)
})
.catch(err => {
    console.error(err);
})

