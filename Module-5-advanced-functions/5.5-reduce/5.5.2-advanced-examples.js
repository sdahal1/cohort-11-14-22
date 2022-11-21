
const movies = [
    {
        title: "Austin Powers",
        views: 1000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
    {
        title: "Finding Nemo",
        views: 2000,
        producer: { 
            name: "Disney",
            city: "Orlando"
        }
    },
    {
        title: "Forrest Gump",
        views: 3000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
];


/*1.  Add up all the views numbers */

function totalViews(movies=[]){
    let result = movies.reduce((accumulator,movieObj)=>{
        // accumulator += movieObj.views;

        // return accumulator;

        return accumulator+ movieObj.views
    },0)

    return result;
}

// console.log(totalViews(movies))



/*2.  given an array of movie objects, return an object where each key is a movie title, and the value is the producer name 
Example output:
{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}

*/

function movieAndProducerName(movies){
   let result =  movies.reduce((accumulator,movieObj)=>{
        //create a key in the accumulator object that represents the movieObj's title
        accumulator[movieObj.title] = movieObj.producer.name;

        return accumulator
   },{})
   return result;
}


// console.log(movieAndProducerName(movies));




/*3.  given an array of movie objects, return an object where each key is the producer name, and each value is an array of movies associated with that producer name 

example output: 

{
  'Universal Studios': [
   
  ],
  Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}


*/

function movieByProducer(movies=[]){
    let result = movies.reduce((accumulator, movieObj)=>{
        //create a key in the accumulator object reperesnting the movieObjs producer name
        //if the accumulator doest not have a key with the produceer name, then create that key, and set the value to be an empty array
        if(accumulator[movieObj.producer.name] === undefined){
            //at that key, set the value equal to an empty array
            accumulator[movieObj.producer.name] = []
        }
        //push to that array the current movieObj
        accumulator[movieObj.producer.name].push(movieObj)

        return accumulator
    },{})

    return result;
}

/* 
{
   "universal studios" :[ AustinPowerObject, ForrestGumpObject ],
   "disney": [ FindingNemoObject ]
}


*/

console.log(movieByProducer(movies))