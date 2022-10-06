//var liczba1= document.getElementById(liczba1)
//var liczba2= document.getElementById(liczba2)
//var liczba3= document.getElementById(liczba3)
//var liczba4= document.getElementById(liczba4)
//var buttonprzelicz= document.getElementById(przelicz)
//var wyniki = document.getElementById(wyniki)

const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')
const buttonprzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

buttonprzelicz.addEventListener('click', () => {
    wynikiPojemnik.innerHTML=liczba1.value+liczba2.value+liczba3.value+liczba4.value
    console.dir(liczba1.value)
})