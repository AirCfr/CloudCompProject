var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello world");
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.raisePrice = function (modif) {
        switch (modif) {
            case 1:
                this.price = round(this.price * 1.15);
                break;
            case 10:
                this.price *= 20;
                break;
            case 100:
                this.price *= 7828749;
                break;
            default:
                break;
        }
    };
    Item.prototype.getNextPrice = function (modif) {
        switch (modif) {
            case 1:
                return this.price;
            case 10:
                return this.price * 20;
            case 100:
                return this.price * 7828749;
            default:
                return round(this.price * 1.15);
        }
    };
    return Item;
}());
var Cursor = /** @class */ (function (_super) {
    __extends(Cursor, _super);
    function Cursor(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 0.1;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Cursor.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Cursor;
}(Item));
var Grandma = /** @class */ (function (_super) {
    __extends(Grandma, _super);
    function Grandma(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 1;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Grandma.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Grandma;
}(Item));
var Farm = /** @class */ (function (_super) {
    __extends(Farm, _super);
    function Farm(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 8;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Farm.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Farm;
}(Item));
var Mine = /** @class */ (function (_super) {
    __extends(Mine, _super);
    function Mine(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 47;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Mine.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Mine;
}(Item));
var Factory = /** @class */ (function (_super) {
    __extends(Factory, _super);
    function Factory(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 260;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Factory.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Factory;
}(Item));
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 1400;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Bank.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Bank;
}(Item));
var Temple = /** @class */ (function (_super) {
    __extends(Temple, _super);
    function Temple(name, base_price, price, quantity) {
        var _this = _super.call(this) || this;
        _this.cps = 7800;
        _this.name = name;
        _this.base_price = base_price;
        _this.price = price;
        _this.quantity = quantity;
        return _this;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    Temple.prototype.moneyTime = function () {
        player.money += this.cps * this.quantity;
    };
    return Temple;
}(Item));
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.cursor = new Cursor("cursor", 15, 15, 0);
        this.grandma = new Grandma("grandama", 100, 100, 0);
        this.farm = new Farm("farm", 1100, 1100, 0);
        this.mine = new Mine("mine", 12000, 12000, 0);
        this.factory = new Factory("factory", 130000, 130000, 0);
        this.bank = new Bank("bank", 1400000, 1400000, 0);
        this.temple = new Temple("tepmle", 20000000, 20000000, 0);
    }
    Inventory.prototype.iter = function () {
        var res = [this.cursor, this.grandma, this.farm, this.mine, this.factory, this.bank, this.temple];
        return res;
    };
    Inventory.prototype.toDict = function () {
        return { cursor: this.cursor };
    };
    return Inventory;
}());
var Player = /** @class */ (function () {
    function Player(money, invent) {
        this.money = money;
        this.inventory = invent;
    }
    Player.prototype.toDict = function () {
        return { money: this.money, inventory: this.inventory.toDict() };
    };
    return Player;
}());
//============================= Event handlers =============================//
function onStop() {
    clearInterval(clock);
}
function onImport() {
    console.log("Loading exemple");
    var ex = '{"money":0,"inventory":{"cursor":{"cps":0.1,"name":"cursor","base_price":15,"price":15,"quantity":999},"grandma":{"cps":1,"name":"grandama","base_price":100,"price":100,"quantity":0},"farm":{"cps":8,"name":"farm","base_price":1100,"price":1100,"quantity":0},"mine":{"cps":47,"name":"mine","base_price":12000,"price":12000,"quantity":0},"factory":{"cps":260,"name":"factory","base_price":130000,"price":130000,"quantity":0},"bank":{"cps":1400,"name":"bank","base_price":1400000,"price":1400000,"quantity":0},"temple":{"cps":7800,"name":"tepmle","base_price":20000000,"price":20000000,"quantity":0}}}';
    player = JSON.parse(ex);
    console.log("Loaded exemple successfully !");
}
function onExport() {
    var toExport = JSON.stringify(player);
    console.log(toExport);
}
function onCookieClick() {
    player.money += 1;
    update();
}
function onBuySelector(selec) {
    buymodificator = selec;
}
function onCursorBuy() {
    if (player.money >= player.inventory.cursor.getNextPrice(buymodificator)) {
        player.inventory.cursor.quantity += 1 * buymodificator; // get quantityToBuy
        player.money -= player.inventory.cursor.getNextPrice(buymodificator); // set new money
        player.inventory.cursor.raisePrice(buymodificator); // set new price + new quantityOwned
    }
    update();
}
function onGrandmaBuy() {
    if (player.money >= player.inventory.grandma.getNextPrice(buymodificator)) {
        player.inventory.grandma.quantity += 1 * buymodificator;
        player.money -= player.inventory.grandma.getNextPrice(buymodificator);
        player.inventory.grandma.raisePrice(buymodificator);
    }
    update();
}
function onFarmBuy() {
    if (player.money >= player.inventory.farm.getNextPrice(buymodificator)) {
        player.inventory.farm.quantity += 1 * buymodificator;
        player.money -= player.inventory.farm.getNextPrice(buymodificator);
        player.inventory.farm.raisePrice(buymodificator);
    }
    update();
}
function onMineBuy() {
    if (player.money >= player.inventory.mine.getNextPrice(buymodificator)) {
        player.inventory.mine.quantity += 1 * buymodificator;
        player.money -= player.inventory.mine.getNextPrice(buymodificator);
        player.inventory.mine.raisePrice(buymodificator);
    }
    update();
}
function onFactoryBuy() {
    if (player.money >= player.inventory.factory.getNextPrice(buymodificator)) {
        player.inventory.factory.quantity += 1 * buymodificator;
        player.money -= player.inventory.factory.getNextPrice(buymodificator);
        player.inventory.factory.raisePrice(buymodificator);
    }
    update();
}
function onBankBuy() {
    if (player.money >= player.inventory.bank.getNextPrice(buymodificator)) {
        player.inventory.bank.quantity += 1 * buymodificator;
        player.money -= player.inventory.bank.getNextPrice(buymodificator);
        player.inventory.bank.raisePrice(buymodificator);
    }
    update();
}
function onTempleBuy() {
    if (player.money >= player.inventory.temple.getNextPrice(buymodificator)) {
        player.inventory.temple.quantity += 1 * buymodificator;
        player.money -= player.inventory.temple.getNextPrice(buymodificator);
        player.inventory.temple.raisePrice(buymodificator);
    }
    update();
}
//============================= Normal Functions =============================//
//============================= Display Functions ===========================//
function updateCookie() {
    document.getElementById('counter').innerHTML = "Cookies: " + round(player.money);
}
function updateStore() {
    document.getElementById('CursorPrice').innerHTML = "Cursor - " + round(player.inventory.cursor.price);
    document.getElementById('CursorId').innerHTML = player.inventory.cursor.quantity.toString();
    document.getElementById('GrandmaPrice').innerHTML = "Grandma - " + round(player.inventory.grandma.price);
    document.getElementById('GrandmaId').innerHTML = player.inventory.grandma.quantity.toString();
    document.getElementById('FarmPrice').innerHTML = "Farm - " + round(player.inventory.farm.price);
    document.getElementById('FarmId').innerHTML = player.inventory.farm.quantity.toString();
    document.getElementById('MinePrice').innerHTML = "Mine - " + round(player.inventory.mine.price);
    document.getElementById('MineId').innerHTML = player.inventory.mine.quantity.toString();
    document.getElementById('FactoryPrice').innerHTML = "Factory - " + round(player.inventory.factory.price);
    document.getElementById('FactoryId').innerHTML = player.inventory.factory.quantity.toString();
    document.getElementById('BankPrice').innerHTML = "Bank - " + round(player.inventory.bank.price);
    document.getElementById('BankId').innerHTML = player.inventory.bank.quantity.toString();
    document.getElementById('TemplePrice').innerHTML = "Temple - " + round(player.inventory.temple.price);
    document.getElementById('TempleId').innerHTML = player.inventory.temple.quantity.toString();
}
function update() {
    updateStore();
    updateCookie();
}
//============================= Math Functions =============================//
function round(number) {
    return number - (number % 1);
}
//============================= Main Functions =============================//
function gameLoop() {
    var items = player.inventory.iter();
    clock = setInterval(function () {
        console.log(player.inventory);
        items.forEach(function (item) {
            item.moneyTime();
        });
    }, 1000);
}
var clock = undefined;
var buymodificator = 1;
var player = new Player(0, new Inventory());
//import
//parsePlayer(DbGet(sessionid))
gameLoop();
//export
//var inventory = new Inventory();
