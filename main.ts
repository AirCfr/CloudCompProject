console.log("Hello world");

abstract class Item {

    name: string;
    base_price: number;
    price: number;
    quantity: number;

    raisePrice(modif: number) {
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
    }
    getNextPrice(modif: number) {
        switch (modif) {
            case 1:
                return this.price
            case 10:
                return this.price * 20;
            case 100:
                return this.price * 7828749;
            default:
                return round(this.price * 1.15);
        }
    }


}

class Cursor extends Item {

    cps: number = 0.1;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }

    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }

}
class Grandma extends Item {

    cps: number = 1;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }
}
class Farm extends Item {

    cps: number = 8;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }
}
class Mine extends Item {

    cps: number = 47;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }
}
class Factory extends Item {

    cps: number = 260;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }
}

class Bank extends Item {

    cps: number = 1400;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }
}

class Temple extends Item {

    cps: number = 7800;

    constructor(name: string, base_price: number, price: number, quantity: number) {
        super();
        this.name = name;
        this.base_price = base_price;
        this.price = price;
        this.quantity = quantity;
    }
    // MONEYYYYY TIMEEEEEEEEEEEEEE
    moneyTime() {
        player.money += this.cps * this.quantity;
    }
}

class Inventory {                               // singleton

    cursor: Cursor;
    grandma: Grandma;
    farm: Farm;
    mine: Mine;
    factory: Factory;
    bank: Bank;
    temple: Temple;

    constructor() {
        this.cursor = new Cursor("cursor", 15, 15, 0);
        this.grandma = new Grandma("grandama", 100, 100, 0);
        this.farm = new Farm("farm", 1100, 1100, 0);
        this.mine = new Mine("mine", 12000, 12000, 0);
        this.factory = new Factory("factory", 130000, 130000, 0);
        this.bank = new Bank("bank", 1400000, 1400000, 0);
        this.temple = new Temple("tepmle", 20000000, 20000000, 0);
    }

    iter() {
        const res = [this.cursor, this.grandma, this.farm, this.mine, this.factory, this.bank, this.temple];
        return res;
    }
}
class Player {                                  // singleton

    money: number;
    inventory: Inventory;

    constructor(money, invent: Inventory) {
        this.money = money;
        this.inventory = invent;
    }
}


//============================= Event handlers =============================//

function onCookieClick() {
    player.money += 1;
}

function onBuySelector(selec: number) {
    buymodificator = selec;
}

function onCursorBuy() {
    if (player.money >= player.inventory.cursor.getNextPrice(buymodificator)) {
        player.inventory.cursor.quantity += 1 * buymodificator; // get quantityToBuy
        player.money -= player.inventory.cursor.getNextPrice(buymodificator);          // set new money
        player.inventory.cursor.raisePrice(buymodificator);     // set new price + new quantityOwned
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

function round(number: number) {
    return number - (number % 1);
}

//============================= Main Functions =============================//

function gameLoop() {

    var items = player.inventory.iter()

    setInterval(() => {

        console.log(player.inventory);

        items.forEach(item => {
            item.moneyTime();
        });

    }, 1000
    )
}




var buymodificator: number = 1;

var player = new Player(0, new Inventory());

gameLoop();


//var inventory = new Inventory();