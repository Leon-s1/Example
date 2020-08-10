//массив объектов
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
  ]
 
  const visits = new WeakSet()

  visits.add(users[0]).add(users[1])

users.splice(1, 1) //удаляем пользователя с индексом 1 и количество элементов для удаления тоже 1
                    //объект удален и автоматически он удаляется из weakset

  console.log(visits.has(users[0]));
  console.log(visits.has(users[1]));