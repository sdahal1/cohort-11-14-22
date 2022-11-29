function useSetTimeout() {
    console.log("Start!"); //s
    setTimeout(()=>{
        console.log("first set timeout callback!")
    },1000) //async
    console.log("Processing");//s
    setTimeout(()=>{
        console.log("second time out callback")
    },0) //async
    console.log("End!");//s
}

useSetTimeout();//s



/* 
sync code

useSetTimeOut()
console.log("Start!");
console.log("Processing");
console.log("End!");
*/


/* 
async code-> event loop-> a queue (line) for async code to be in 

setTimeout(()=>{
        console.log("first settimeout callback!")
    },1000) //async

 setTimeout(()=>{
        console.log("second time out callback")
    },0) //async
*/