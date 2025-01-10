function hero(name, level){
    this.name = name;
    this.level = level;
}

let hero1 = new hero('sayeed', '9th')
console.log(hero1);

hero.prototype.greet = function(){
    return `Hello im ${this.name} and im ${this.level}'s hero!` 
}

console.log(hero1.greet());

function warrior(weapon){
    hero.call(this, name, level);
    this.weapon = weapon;

}
warrior.prototype.attack = function(){
    return `The warrior attacks with ${this.weapon}`
}

function healer(portion){
 hero.call(this, name, level);
 this.portion = portion;
}

healer.prototype.heal = function(){
    return `The healer heals with ${this.portion} portion`
}

const hero3 = new warrior('Bjorn', 1, 'axe');
const hero4 = new healer('Kanin', 1, 'cure');

console.log(hero3);