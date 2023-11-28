let uid = document.querySelector('#uid')
console.log(uid)
let stud = document.querySelector('.student')
console.log(stud)
let uid1 = document.querySelectorAll('#uid')
console.log(uid1)
let stud1 = document.querySelectorAll('.student')
console.log(stud1)

let btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    console.log(e)
    alert('小可愛')
})