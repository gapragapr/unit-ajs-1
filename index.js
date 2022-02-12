export default function checkHP(hero){
    let result;
    if (hero.health > 50){
        result = 'healty';
    } else if (hero.health >= 15 && hero.health <= 50){
        result = 'wounded';
    } else if (hero.health < 15){
        result = 'critical';
    }
    return result
}