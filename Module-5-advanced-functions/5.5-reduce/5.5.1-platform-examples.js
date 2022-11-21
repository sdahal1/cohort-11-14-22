const areas = [768, 1004.2, 433.1];

function getTotalWithoutReduce(list=[]){
    let accumulator = 0
    for (let i = 0; i < list.length; i++) {
        accumulator += list[i];
    }
    return accumulator
}


// console.log(getTotalWithoutReduce(areas))



function getTotalWithReduce(list=[]){

   let result = list.reduce((accumulator,num, idx)=>{
        console.log(`Accumulator: ${accumulator}. Num is: ${num}. Idx is: ${idx}`)
        //accumulate to the accumulator (add to the accumulator)
        // accumulator+=num;

        //you must return the accumulator if you want the value to be 
        return accumulator+num
   },0)

   return result;

}

// console.log(getTotalWithReduce(areas))



function getTotalWithReduceOneLiner(list=[]){

    return list.reduce((accumulator,num)=> accumulator+num)
 
 
}

// console.log(getTotalWithReduceOneLiner(areas))

const parks = [
    { name: "Acadia", areaInSquareKm: 198.6 },
    { name: "Crater Lake", areaInSquareKm: 741.5 },
    { name: "Kenai Fjords", areaInSquareKm: 2710 },
    { name: "Zion", areaInSquareKm: 595.9 },
];


function generateParksToAreaObject(parksList){

    let result = parksList.reduce((accumulator,parkObj)=>{
        // console.log(accumulator)
        let {name, areaInSquareKm} = parkObj;
        accumulator[name] = areaInSquareKm

        return accumulator;
    },{})
    return result;
}

console.log(generateParksToAreaObject(parks))
