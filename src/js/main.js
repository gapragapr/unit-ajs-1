export default function checkHP(hero){
    if (hero.health > 50){
        return 'healthy';
    } else if (hero.health >= 15 && hero.health <= 50){
        return 'wounded';
    } else if (hero.health < 15){
        return 'critical';
    }
}