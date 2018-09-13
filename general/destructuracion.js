let hero = {
    name: "Maxwell",
    hp: 50,
    mp: 20
};

let { name: firstName, hp, mp } = hero;

console.log(firstName, hp, mp);