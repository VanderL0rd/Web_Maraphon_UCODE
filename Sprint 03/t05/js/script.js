let guestList = new Map();
guestList.set('John', 'Already in list');
guestList.set('Suzy', 'Already in list');
guestList.set('Jane', 'Already in list');
guestList.set('Rendi', 'Already in list');

console.log(guestList);
console.log(guestList.get('Jane'));
console.log(guestList.length);
console.log(guestList.delete('Rendi'));
console.log(guestList);

///////////////////////////////////////////

let menu = new Set();

let borch = { dish: "Borch", price: '120$' };
let lunch = { dish: "Lunch", price: '50$' };
let steak = { dish: "Steak", price: '150$' };
let pizza = { dish: "Pizza", price: '100$' };

menu.add(borch);
menu.add(lunch);
menu.add(steak);
menu.add(pizza);
menu.add(pizza);

console.log(menu.size);

for (let d of menu) {
    console.log(d.dish, d.price);
}


//////////////////////////////////////////////

let bankVault = new WeakMap();

let cr2345 = { Name: "Fall" };
let cr1234 = { Name: "Plot" };
let cr5678 = { Name: "Akor" };
let cr9123 = { Name: "Json" };

bankVault.set(cr1234, { Pr: 5682 });
bankVault.set(cr2345, { Pr: 8435 });
bankVault.set(cr5678, { Pr: 9725 });
bankVault.set(cr9123, { Pr: 95768 });

console.log(bankVault.get(cr9123));
console.log(bankVault.has(cr1234));


//////////////////////////////////////////////////

let coinCollection = new WeakSet();

coin_1 = { coin: '¤' };
coin_2 = { coin: '$' };
coin_3 = { coin: '£' };
coin_4 = { coin: '€' };

coinCollection.add(coin_1);
coinCollection.add(coin_2);
coinCollection.add(coin_3);
coinCollection.add(coin_4);
coinCollection.add(coin_1);

coinCollection.has(coin_2);
console.log(coinCollection);
console.log(coinCollection.delete(coin_4));
console.log(coinCollection);

