//

const doSomethingAsync = () =>{
    return new Promise ((resolve, reject)=>{
        (true)
        ? setTimeout (() => resolve (" Do Something Async"),3000)
        : reject(new Error ("text Error"))
    });
}

const doSomething = async ()=> {
    const something = await doSomethingAsync();
    console.log (something);
}

console.log("before");
doSomething();
console.log("error");



// tener en cuenta como vamos a capturar los errores 

const anotherFunction= async () => {
    try{ 
    const something=await doSomethingAsync();
    console.log(something)
    } catch (error){
      console.error(error)  
    }
}



console.log("before x ");
anotherFunction();
console.log("error y ");

