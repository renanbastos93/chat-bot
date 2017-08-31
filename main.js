const apiai = require('apiai');
const app = apiai("f0d449afa86d439fbf45e9307f15db2f"); // Access Token

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome the Chat Bot of the HemoHeroes!");

rl.on('line', 
    (input) => {
        if(input == "exit"){
            console.log("Thanks see you later!");
            rl.close();
        }else{
            app.textRequest(input, {    
                sessionId: "132131213" //can random id
            })
            .on('response', function(response) {
                if(response.status.code == 200){
                    console.log(`HemoHeroes > ${response.result.fulfillment.speech}`) // Print message of bot
                }else{
                    console.log("Sorry not receive message!")
                }
            })
            .on('error', function(error) {
                console.log(`Oops... Error: ${error}`);
            })
            .end();
        }
    }
);