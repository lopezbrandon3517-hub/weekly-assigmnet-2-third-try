const prompt = require(`prompt-sync`)();

let moviearray = []

while(true){
    let chooseoption = prompt("please select one of the following options.\n :add a movie\n:remove a movie\n:search for a movie\n:print all movies\n:count movies\n:make movie title uppercase\n:exit");
    console.log("you have chosen" + chooseoption)
    if(chooseoption.toLowerCase() === "add a movie"){
        let addmovie = prompt("add a movie").toLowerCase();
        console.log("youve added a movie");
        moviearray.push(addmovie)
    }
    if(chooseoption.toLowerCase() === "remove a movie"){
        let found = false;
        let remove = prompt("remove a movie").toLowerCase();
        for(let i = 0; i < moviearray.length; i++) {
            if(moviearray[i] === remove){
                moviearray.splice(i, 1);
                console.log("movie removed");
                found = true;
                break;
            }
        }
        
        if(!found){
            console.log("no movie found")
        }
    }
    if(chooseoption.toLowerCase() === "search for a movie"){
        let search = prompt("search for existing mvoie");
        let found = false;
        for(let i = 0; i < moviearray.length; i++){
        if(moviearray[i].toLowerCase() === search.toLowerCase()){
            console.log("movie was found");
            found = true;
            break;
        }
        }
        if(!found){
            console.log("movie was not found")
        }
    } 
    if(chooseoption.toLowerCase() === "print all the movies"){
        for(let i = 0; i < moviearray.length; i++){
            console.log([i + 1] + "," + moviearray[i]);
        }
    }
    if(chooseoption.toLowerCase() === "count movies"){
        let sum = 0;
        for(let i = 0; i < moviearray.length; i++){
            sum += moviearray[i]
        }
        console.log("total movies "  + moviearray.length)
    }
    if(chooseoption.toLowerCase() === "convert movie title to uppercase"){
        function capital(){
            let movie = prompt("please enter the movie title you would like to capitalize")
            return movie.split//im stuck cant find way to get it to capitalize
        }
    }
    if (chooseoption.toLowerCase() === "exit"){
        break;
    }
}