let comp = 0;
let userp = 0;
let n = 0;
let i =-1;


const roundbar = document.querySelector(".roundbar");
const b1 = document.querySelector(".one");
const b2 = document.querySelector(".two");
const b3 = document.querySelector(".three");
const b4 = document.querySelector(".four");
const b5 = document.querySelector(".five");
b1.addEventListener("click",()=>{n=1;i++;roundbar.style.height = "20px";roundbar.classList.add("disable-hover");b1.textContent="1";console.log(n)})
b2.addEventListener("click",()=>{n=3;i++;roundbar.style.height = "20px";roundbar.classList.add("disable-hover");b1.textContent="3";console.log(n);console.log(i)})
b3.addEventListener("click",()=>{n=5;i++;roundbar.style.height = "20px";roundbar.classList.add("disable-hover");b1.textContent="5"})
b4.addEventListener("click",()=>{n=8;i++;roundbar.style.height = "20px";roundbarbar.classList.add("disable-hover");b1.textContent="8"})
b5.addEventListener("click",()=>{n=10;i++;roundbar.style.height = "20px";roundbar.classList.add("disable-hover");b1.textContent="10"})

let container = document.querySelector(".result")

const rock = document.querySelector(".r");
rock.addEventListener("click",()=>{rockplay();i++;console.log(i)})
const paper = document.querySelector(".p");
paper.addEventListener("click",()=>{paperplay();i++;console.log(i)})
const scissor = document.querySelector(".s");
scissor.addEventListener("click",()=>{scissorplay();i++;console.log(i)})

function comin()
{
    let x=Math.random();
    if (x<0.33)
        return "rock"
    else if (0.33<=x<0.66)
        return "paper"
    else
        return "scissor"
}


function result(){
    if(i===n)
        {
            console.log("over")
            const but1 = document.querySelector(".r");
            const but2= document.querySelector(".p");
            const but3 = document.querySelector(".s");
            but1.classList.add("disable-button");
            but2.classList.add("disable-button");
            but3.classList.add("disable-button");
        
            if(userp<comp)
                container.textContent="u lost forever";
            else
                container.textContent="u won bro,forever";
        }
}


function paperplay()
{
    let x=comin();
    switch (x) {
        case "rock":
            container.textContent="win bro";
            userp++;
            console.log(userp)
            console.log(comp)
            result()
            break;
        case "paper":
            container.textContent="draw bro";
            console.log(userp)
            console.log(comp)
            result
            break;
        case "scissor":
            container.textContent="lost bro";
            comp++;
            console.log(userp)
            console.log(comp)
            result()
            break;
    }
}
function scissorplay()
{
    let x=comin();
    switch (x) {
        case "rock":
            container.textContent="lost bro";
            comp++;
            console.log(userp)
            console.log(comp)
            break;
        case "paper":
            container.textContent="win bro";
            userp++;
            console.log(userp)
            console.log(comp)
            break;
        case "scissor":
            container.textContent="draw bro";
            console.log(userp)
            console.log(comp)
            break;
    }
}
function rockplay()
{
    let x=comin();
    switch (x) {
        case "rock":
            container.textContent = "draw bro";
            console.log(comp)
            console.log(userp)
            break;
        case "paper":
            container.textContent="lost bro";
            console.log(userp)
            console.log(comp)
            comp++;
            break;
        case "scissor":
            container.textContent="win bro";
            console.log(userp)
            console.log(comp)          
            userp++;
            break;
    }
}
