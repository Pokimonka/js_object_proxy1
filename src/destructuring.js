export default function getSuperKill(object) {
    let result = [];
    let special = object.special;
    for (let i in special) {
        const {id, name, icon, description = 'Описание недоступно'} = special[i];
        let forPush = {
            id: id,
            name: name,
            icon: icon,
            description: description
        }
        result.push(forPush)
    }
    return result;
}

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}

console.log(getSuperKill(character))