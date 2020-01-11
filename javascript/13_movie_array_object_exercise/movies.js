movies = [
    {
        title: "Mad Max Fury Road",
        rating: 5,
        haveWatch: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        haveWatch : false 
    },
    {
        title: "Joker",
        rating: 4.5,
        haveWatch : true
    },
    {
        title : "Les Miserables",
        rating : 3.5,
        haveWatch : false
    }
];

// for(i = 0;i<movies.length;i++) {
//     if (movies[i].haveWatch === true) {
//         console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
//     }
//     else {
//         console.log("You have not seen \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
//     }
// }

function buildString(movie) {
    var result = "You have ";
    if (movie.haveWatch === true) {
        result += "watched ";
    }
    else {
        result+= "not seen ";
    }
    result+= "\"" + movie.title + "\" - ";
    result+= movie.rating + " stars";
    return result;
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
});