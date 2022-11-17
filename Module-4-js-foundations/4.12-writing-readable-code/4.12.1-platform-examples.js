const authors = [
    {
        id: 1,
        name: {
            firstName: "Philip",
            surname: "Pullman",
        },
        series: ["His Dark Materials", "Sally Lockhart"],
    },
    {
        id: 2,
        name: {
            firstName: "Terry",
            lastName: "Pratchett",
        },
        series: ["Discworld", "Long Earth"],
    },
];

function getAllSeries(authors=[]) {
    const result = [];
    for (let i = 0; i < authors.length; i++) {
        let currentAuthor = authors[i];
        for (let j = 0; j < currentAuthor.series.length; j++) {
            let currentSeries = currentAuthor.series[j]
            result.push(currentSeries);
        }
    }
    return result;
}

// getAllSeries(authors);
//> [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]



function getSeriesListById(authors, id=0) {
    if(!id || id === 0) return "No id provided"
    let selected = null;
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      if (author.id === id) selected = author;
    }
  
    if(selected === null) return [];

    const message = `Series list: ${selected.series.join(", ")}`;
    return message;
    
}

console.log(getSeriesListById(authors,2))



