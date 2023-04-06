/* записать кнопку добавить в переменную */
const addButton = document.getElementById('1')
const userCard = document.getElementsByClassName('userCard')[0]
const usersList = document.getElementsByClassName('users_list')[0]


const listNames = ['Nancy','Jim','Maria','Steve','Mark','Alice','Sofia','Harry','Richard']
const listWorks = ['Developer','Doctor','Teacher','Manager','Student','Police','Driver','Enginer','Arhitecrot']
const listCountry = ['London','LA','Roma','Berlin','Rio','NY','Sidney']


/* создал функции */
function addNewElement(){
    /* создаю клон первой картички */
    const newCard = userCard.cloneNode(true)
    /* создаю случайного пользователя */
    const randomUser = createRandomUser()

    /* меняю содержимое тегов карточки */
    newCard.getElementsByClassName('username')[0].innerHTML = randomUser.name
    newCard.getElementsByClassName('right')[0].innerHTML = randomUser.age
    newCard.getElementsByClassName('right')[2].innerHTML = randomUser.works
    newCard.getElementsByClassName('right')[3].innerHTML = randomUser.country

    /* добавляю карточку в usersList */
    usersList.appendChild(newCard)
    

}

/* функция для создания нового пользователя */
function createRandomUser(){

    const newPerson = {
        name:listNames[Math.floor(Math.random()*listNames.length)],
        age:Math.floor(Math.random()*45),
        works:listWorks[Math.floor(Math.random()*listWorks.length)],
        country:listCountry[Math.floor(Math.random()*listCountry.length)]
    }

    return newPerson
   
}

const a = createRandomUser()
console.log(a)
/* добавляю на кнопку обработчик события */
addButton.addEventListener('click',()=>addNewElement())



/* создаем нового пользователя */

const randomNumber = Math.floor(Math.random()*listNames.length)
console.log(listNames[randomNumber])


