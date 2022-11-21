const nums = [7,5,9,3,2,4,10,1];


function sortAscending(data=[]){
    //1. it will modify the original
    //2. the parameters are different
    data.sort((elementA, elementB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
    
        return elementA-elementB;
    })
    return data;
}

function sortDescending(data){
    data.sort((elementA, elementB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
    
        return elementB-elementA; //baaaaaa
    })
    return data;
}

// console.log(sortDescending(nums))

const parks = [
    { name: "Biscayne The Thang Knah mean", rating: 4.2 },
    { name: "Grand", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
];
//sorting array of objects based on number- Ascending
function sortParksAscending(parksList=[]){
    parksList.sort((parkA, parkB)=>{
        return parkA.rating - parkB.rating;
    })
    return parksList;
}

//sorting array of objects based on number- Descending
function sortParksDescending(parksList=[]){
    parksList.sort((parkA, parkB)=>{
        return parkB.rating - parkA.rating;
    })
    return parksList;
}


//sorting strings
let names = ["Steph Curry", "saurabh", "Luka Doncic", "lebron James", "Kevin Durant", "Anthony Davis", "Baron Davis"]


function sortNamesAlphabetically(namesList=[]){
    namesList.sort((nameA, nameB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
        if(nameA.toLowerCase() > nameB.toLowerCase()){
            return 1;
        }else{
            return -1;
        }
    })
    return namesList
}

function sortNamesReverseAlphabetically(namesList=[]){
    namesList.sort((nameA, nameB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
        if(nameA.toLowerCase() > nameB.toLowerCase()){
            return -1;
        }else{
            return 1;
        }
    })
    return namesList
}




// console.log(sortNamesReverseAlphabetically(names))


function sortParksAlphabetically(parksList){
    parksList.sort((parkA, parkB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
        if(parkA.name.toLowerCase() > parkB.name.toLowerCase()){
            return 1;
        }else{
            return -1;
        }
    })
    return parksList
}





function sortParksByHowLongTheParkNameIs(parksList){
    parksList.sort((parkA, parkB)=>{
        //if you return a negative number -> it will move elementA before elementB
        //if you return a positive number -> it will move elementB before elementA
        //if you return a 0, it does nothing
        return parkA.name.length - parkB.name.length;
    })
    return parksList
}

console.log(sortParksByHowLongTheParkNameIs(parks))