const responses = require('./response');


    const Scripts = (limit = 1 , showCount = false)=>{
        let arr = []
        var i = 0
        var j = 1
        if(showCount == true){
            while(limit !== i){
                const return1 = Generate()
            arr.push(`${j++}) ${return1}`)
            i++
            }
        }else{
        while(limit !== i){
            const return1 = Generate()
        arr.push(return1)
        i++
        }
    }
    return arr
    }
function Generate(){
    const answersArray = responses.scripts;
    const answer = answersArray[Math.floor(Math.random() * answersArray.length)];
    return answer
}
const Credits = () =>{
    return `Developed By Agent Hacker#0477 , Version: ${require("./package.json").version}`
}
module.exports = {
    Scripts,
    Credits
}
