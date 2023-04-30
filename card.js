let a= document.getElementById("first")
a.style.backgroundColor="orange"
a.style.color="yellow"
a.style.textAlign="center"
let b=document.getElementById("second")
b.style.color="yellowgreen"

let c=document.getElementById("third")
c.style.backgroundColor="pink"
c.style.color="purple"
c.style.textAlign="center"

for (let i=0;i<=2;i++)
{
    let b=document.getElementsByClassName("card-title")
    b.style.color[i]="green"
}
// setTimeout(function()
//  {
//      alert("Wait!!Time Out"),3000})
// let c= document.querySelectorAll('#third')
// c.style.backgroundColor="red"

// let d = document.querySelectorAll('.ex')
// d[0].style.color="purple"
// d[1].style.color="golden"
// console.log(d)


console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card-title")).getElementsByTagName("a")
// alert("STOP")
// setTimeout(function()
//  {
//      alert("Wait!!Time Out"),3000})
// alert("STOP")

