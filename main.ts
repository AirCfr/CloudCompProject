console.log("Hello world");

class Player {

    money: number;
    inventory: Inventory;

    constructor(money, invent: Inventory) {
        this.inventory = money;
        this.inventory = invent;
    }
}

class Inventory {

    cursor: number;
    grandma: number;
    farm: number;
    mine: number;
    factory: number;
    bank: number;
    temple: number;

    constructor() {
        this.cursor = 0;
        this.grandma = 0;
        this.farm = 0;
        this.mine = 0;
        this.factory = 0;
        this.bank = 0;
        this.temple = 0;
    }
}

//============================= Event handlers  =============================//

//============================= Main Functions  =============================//

function gameLoop(Player){

    setInterval(() => {
        
        //console.log(Player.inventory);
        
        }, 1000
    )
}

function main(){
    var inventory =  new Inventory();

    var player = new Player(0, inventory);
    
    gameLoop(player);
}

main();