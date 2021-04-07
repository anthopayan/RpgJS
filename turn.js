class Turn{
    constructor(players, turn_number){
        this.players = shuffle(players);
        this.turn_number = turn_number;
    }

    startTurn = () => {
        console.log(`Le tour numero ${turn_number} commence !`);
        for (var current_player of players){
            if (current_player.status == "playing"){
                
            }
        }
    }



}