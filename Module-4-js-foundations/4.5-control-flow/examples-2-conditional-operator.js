let player = {
    name: "Lebron",
    isWinningChampionshipThisYear: false
}


// if(player.isWinningChampionshipThisYear === true){
// if(player.isWinningChampionshipThisYear){
//     console.log("Thats ring number 5!")
// }else{
//     console.log("Here come the haters")
// }


function sayResult(){
    /* Conditional operator */
    // player.isWinningChampionshipThisYear===true ? console.log("Thats ring number 5!") : console.log("Here come the haters")

    //using a conditonal operator on returns is slightly different syntax, put the return at the beginning of the condition
    return player.isWinningChampionshipThisYear===true ? "Thats ring number 5!" : "Here come the haters";


}