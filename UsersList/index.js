/* записать кнопку добавить в переменную */
const addButton = document.getElementById('1')
const userCard = document.getElementsByClassName('userCard')[0]
const usersList = document.getElementsByClassName('users_list')[0]

/* создал функции */
function addNewElement(){
    const newCard = userCard.cloneNode(true)
    usersList.appendChild(newCard)
}
/* добавляю на кнопку обработчик события */
addButton.addEventListener('click',()=>addNewElement())

