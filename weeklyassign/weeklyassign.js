const prompt = require(`prompt-sync`)();



let grademanager = []
let gardes = 0

while(true){
    let usersinput = prompt("what would you like to do\n:add a grade\n:remove a grade\n :get the average\n :find your highest grade\n:print your grades out\nexit")
    console.log("you have selected" + usersinput)
    if(usersinput.toLowerCase() === "add a grade"){
        let hisgrades = Number(prompt("add grades")) //
        console.log("you have added your grade");//telling him the option he chose
        grademanager.push(hisgrades) //puts values into array with push function
    }
        if(usersinput.toLowerCase() === "remove a grade"){
            let found = false;
            let remove = parseInt(prompt("remove a grade")); //parsiint makes it a integer
            for(let i = 0; i < grademanager.length; i++){//for loop
                if(grademanager[i] === remove){
                    grademanager.splice(i, 1); //splice to remove grade
                    console.log("your grade was removed")
                    found = true;
                    break;
                }
            }if(!found){
                console.log("could not find a grade");
            }
        }if(usersinput.toLowerCase() === "get the average"){
            let thesum = 0
            for(let i = 0; i < grademanager.length; i++){
                thesumsum += grademanager[i] //adds all grades in the array
            }
            let average = thesum / grademanager.length; //divides the total of the grades by the amount of grades then gives the average
            console.log("the average is" + average)
        }
            if(usersinput.toLowerCase() === "find your highest grade"){
                let bestgrade = Math.max(...grademanager);
                console.log("the highest grade is" + bestgrade)//find highest grade
            }
                if(usersinput.toLowerCase() === "print all grades"){
                    for(let i = 0; i < grademanager.length; i++){
                        console.log([i + 1] + "," + grademanager[i]); //prints all grades and numbers
                    }
                }
                if(usersinput.toLowerCase() === "exit"){ //giving the break option to end the program
                    break;
                }

}
