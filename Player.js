class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = 0;
        this.ended = false
    }
/*

car
    gameState 0
    players
        player1  
            name:
            distance:
        player2:
            name
            distance

    players/player1
    players/player1
playerCount 
*/
 update(){
    var pIndex = "players/player" + this.index
    db.ref(pIndex).set({
        name: this.name,
        distance: this.distance     })
 }


 getCount(){
    var ref = db.ref('playerCount');
    ref.on("value",function(data){
        playerCount = data.val();
    })
}

updateCount(value){
    var ref = db.ref('/')
    ref.update({
        playerCount: value
    })
}

static getPlayerInfo(){
    var ref = db.ref('players');
    ref.on("value",(data)=>{
        allPlayers = data.val();
    })

}

}