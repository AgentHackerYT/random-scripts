const responses = require('./responses.js');

module.exports = {
    scripts: (response) => {
        const answersArray = responses.scripts;
        const answer = answersArray[Math.floor(Math.random() * answersArray.length)];
        response(answer);
    }
}
