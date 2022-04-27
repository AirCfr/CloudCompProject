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
    return Inventory;
}());
var Player = /** @class */ (function () {
    function Player(money, invent) {
        this.money = money;
        this.inventory = invent;
    }
    return Player;
}());
//============================= Event handlers =============================//
function onCookieClick() {
    player.money += 1;
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
}
function onGrandmaBuy() {
    if (player.money >= player.inventory.grandma.getNextPrice(buymodificator)) {
        player.inventory.grandma.quantity += 1 * buymodificator;
        player.money -= player.inventory.grandma.getNextPrice(buymodificator);
        player.inventory.grandma.raisePrice(buymodificator);
    }
}
function onFarmBuy() {
    if (player.money >= player.inventory.farm.getNextPrice(buymodificator)) {
        player.inventory.farm.quantity += 1 * buymodificator;
        player.money -= player.inventory.farm.getNextPrice(buymodificator);
        player.inventory.farm.raisePrice(buymodificator);
    }
}
function onMineBuy() {
    if (player.money >= player.inventory.mine.getNextPrice(buymodificator)) {
        player.inventory.mine.quantity += 1 * buymodificator;
        player.money -= player.inventory.mine.getNextPrice(buymodificator);
        player.inventory.mine.raisePrice(buymodificator);
    }
}
function onFactoryBuy() {
    if (player.money >= player.inventory.factory.getNextPrice(buymodificator)) {
        player.inventory.factory.quantity += 1 * buymodificator;
        player.money -= player.inventory.factory.getNextPrice(buymodificator);
        player.inventory.factory.raisePrice(buymodificator);
    }
}
function onBankBuy() {
    if (player.money >= player.inventory.bank.getNextPrice(buymodificator)) {
        player.inventory.bank.quantity += 1 * buymodificator;
        player.money -= player.inventory.bank.getNextPrice(buymodificator);
        player.inventory.bank.raisePrice(buymodificator);
    }
}
function onTempleBuy() {
    if (player.money >= player.inventory.temple.getNextPrice(buymodificator)) {
        player.inventory.temple.quantity += 1 * buymodificator;
        player.money -= player.inventory.temple.getNextPrice(buymodificator);
        player.inventory.temple.raisePrice(buymodificator);
    }
}
//============================= Normal Functions =============================//
//============================= Math Functions =============================//
function round(number) {
    return number - (number % 1);
}
//============================= Main Functions =============================//
function gameLoop() {
    var items = player.inventory.iter();
    setInterval(function () {
        console.log(player.inventory);
        items.forEach(function (item) {
            item.moneyTime();
        });
    }, 1000);
}
var buymodificator = 1;
var player = new Player(0, new Inventory());
gameLoop();
//var inventory = new Inventory();
