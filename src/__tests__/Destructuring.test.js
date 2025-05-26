import getSuperKill from "../destructuring";

const dataList = [
    [
        {
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
        },
        [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно'
            }
        ]
    ],
    [
        {
            name: 'Мечник',
            type: 'Zombie',
            health: 20,
            level: 5,
            attack: 90,
            defence: 0,
            special: [
                {
                    id: 1,
                    name: 'Прокусить глотку',
                    icon: 'http://...',
                    description: 'Прокусывает глотку с особой жестокостью'
                }, 
                {
                    id: 2,
                    name: 'Вырывает хребет',
                    icon: 'http://...',
                    description: 'Вырывает хребет и эпично ломает его о колено'

                }
            ]	
        },
        [
            {
                id: 1,
                name: 'Прокусить глотку',
                icon: 'http://...',
                description: 'Прокусывает глотку с особой жестокостью'
            }, 
            {
                id: 2,
                name: 'Вырывает хребет',
                icon: 'http://...',
                description: 'Вырывает хребет и эпично ломает его о колено'

            }
        ]
    ],
    [
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 9,
                    name: 'Двойной выстрел',
                    icon: 'http://...'
                }, 
                {
                    id: 10,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]	
        },
        [
            {
                id: 9,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Описание недоступно'

            }, 
            {
                id: 10,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно'
            }
        ]
    ],
]

test.each(dataList)('get super kill', (data, expected) => {
    const result = getSuperKill(data);
    expect(result).toEqual(expected);
});






