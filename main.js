console.log("Hello world");
var Player = /** @class */ (function () {
    function Player(money, invent) {
        this.inventory = money;
        this.inventory = invent;
    }
    return Player;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.cursor = 0;
        this.grandma = 0;
        this.farm = 0;
        this.mine = 0;
        this.factory = 0;
        this.bank = 0;
        this.temple = 0;
    }
    return Inventory;
}());
function gameLoop(Player) {
    setInterval(function () {
        console.log(Player.inventory);
    }, 1000);
}
function main() {
    var inventory = new Inventory();
    var player = new Player(0, inventory);
    gameLoop(player);
}
main();
