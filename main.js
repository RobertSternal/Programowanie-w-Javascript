//var liczba1= document.getElementById(liczba1)
//var liczba2= document.getElementById(liczba2)
//var liczba3= document.getElementById(liczba3)
//var liczba4= document.getElementById(liczba4)
//var buttonprzelicz= document.getElementById(przelicz)
//var wyniki = document.getElementById(wyniki)

const liczba1 = document.querySelector('#liczba1')
const buttonprzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

buttonprzelicz.addEventListener('click', () => {
    wynikiPojemnik.innerHTML=liczba1.value
    console.dir(liczba1.value)
})