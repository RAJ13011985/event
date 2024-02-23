
let myimage = document.querySelector("#myimage")
const btn = document.querySelector(".button")
let text = "No"
let container = document.querySelector(".container")
btn.addEventListener('click', () => {
if  (text ==="No"){
btn.innerText ="are you sure??"
text = "Plz don't do this.."
myimage.setAttribute('src','src/image2.gif')
}
else{
if(text ==="Plz don't do this.."){
btn.innerText = "Plz don't do this.."
text = "You broke my heart.."

myimage.setAttribute('src','src/image9.gif')
}
else{
if(text === "You broke my heart.."){
btn.innerText = "You broke my heart.."
text = "Plz say yes..."

myimage.setAttribute('src','src/image7.gif')
}
else{
if(text === "Plz say yes..."){
btn.innerText = "Plz say yes..."
text = "I am very sad.."

myimage.setAttribute('src','src/image4.gif')
}
else{
if (text === "I am very sad.."){
btn.innerText = "I am very sad.."
text = "You are very cruel"

myimage.setAttribute('src','src/image10.gif')

}
else{
if(text === "You are very cruel"){
btn.innerText = "You are very cruel"
text = "I wanna cry.."
myimage.setAttribute('src','src/image5.gif')
}
else{
if(text ===  "I wanna cry.."){
btn.innerText = "I wanna cry.."
text = "Plz choose yes.."
myimage.setAttribute('src','src/image3.gif')
}
else{
if(text === "Plz choose yes.."){
btn.innerText = "Plz choose yes.."
text = "Plz plz plz"
myimage.setAttribute('src','src/image11.gif')
}
else{
if(text === "Plz plz plz"){
btn.innerText = "Plz plz plz.."
text = "You broke my heart again and again..."
myimage.setAttribute('src','src/image12.gif')
}
else{
if(text ==="You broke my heart again and again..." ){
btn.innerText = "You broke my heart again and again..."
myimage.setAttribute('src','src/image13.gif')
text = "plzzzzzzzzz..."
}
else{
btn.innerText = "plzzzzzzzzz..."
myimage.setAttribute('src','src/image14.gif')
}
}
}
}
}
}
}
}
}
}
})
const h2 = document.querySelector( 'h2' ); 


const btn1 = document.querySelector(".btn")
btn1.addEventListener( 'click', () => { 
btn1.style.display = "none";
btn.style.display = "none";
container.style.backgroundColor = "rgb(255, 192, 245)"
h2.innerText = "Hurayyy!!"
h2.style.fontSize = "15rem"
myimage.setAttribute('src','src/image8.gif')
myimage.style.height = "35rem"
myimage.style.width = "35rem"
})