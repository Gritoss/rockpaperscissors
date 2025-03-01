let comp = 0;
let userp = 0;

function winner()
{
    let a="rock";
    let b="paper";
    let c="scissor";
    for(let i=0;i<5;i++)
    {
        let x=userin();
        if((x.toLowerCase()===a)||(x.toLowerCase()===b)||(x.toLowerCase()===c))
            {
                let y=comin();
                if(y==="rock")
                    rock(x)
                else if(y==="paper")
                    paper(x)
                else if(y==="scissor")
                    scissor(x)
                
            }
        else
        {
            console.log("give correct input")
            i--
        }
    }
    if(userp<comp)
        console.log("u lost forever")
    else
        console.log("u won bro,forever")
}
function userin()
{
    let x = prompt("enter rock paper or scissor");
    return x
}
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

function paper(x)
{
    switch (x.toLowerCase()) {
        case "rock":
            console.log("lost bro");
            comp++;
            break;
        case "paper":
            console.log("draw bro");
            break;
        case "scissor":
            console.log("win bro");
            userp++;
            break;
    }
}
function scissor(x)
{
    switch (x.toLowerCase()) {
        case "rock":
            console.log("win bro");
            userp++;
            break;
        case "paper":
            console.log("lost bro");
            comp++;
            break;
        case "scissor":
            console.log("draw bro");
            break;
    }
}
function rock(x)
{
    switch (x.toLowerCase()) {
        case "rock":
            console.log("draw bro");
            break;
        case "paper":
            console.log("win bro");
            userp++;
            break;
        case "scissor":
            console.log("lost bro");
            comp++;
            break;
    }
}
winner()