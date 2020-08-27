class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  updateAll(){
    for(var i=1;i<=4;i++){
      var playerIndex="players/player"+i;
      console.log(playerIndex)
      database.ref(playerIndex).set({
        name:"player",
        distance:0
      })
    }
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
    getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank=data.val();
    })
 }
   static updateCarsAtEnd(rank){
   database.ref('/').update({
     CarsAtEnd:rank
   })
 }
}
