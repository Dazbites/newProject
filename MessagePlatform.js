const footballTeam = ['Melbourne Demons', 'Collingwood Magpies', 'Essendon Bombers'];
const footballPlayer = ['Clayton Oliver', 'Scott Pendelbury', 'Jake Stringer'];
const seasonResult = ['Premier', 'Middle Table', 'WoodenSpoon'];

let randomResult = () => {
    return Math.floor(Math.random()*3)
};

let returnedMessage = `Your team is ${footballTeam[randomResult()]} and their best player was ${footballPlayer[randomResult()]}. They finished the season as ${seasonResult[randomResult()]}.`;

console.log(returnedMessage);

