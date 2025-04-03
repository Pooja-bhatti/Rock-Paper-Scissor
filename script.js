let userscore=0;
let compscore=0;
const userpara=document.querySelector("#userscore");
const comppara=document.querySelector("#computerscore");

const choices=document.querySelectorAll(".choice");
const mess=document.querySelector("#message");
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        //win
        mess.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        userscore++;
        userpara.innerText=userscore;
        mess.style.backgroundColor="green";
        console.log("Win");
    }
    else{
        //lose
        mess.innerText=`You Lose ${compchoicechoice} beats your ${userchoicechoice}`;
        compscore++;
        console.log("Lost");
        comppara.innerText=compscore;
        mess.style.backgroundColor="red";
    }
}
const drawgame=()=>{
    userscore++;
    compscore++;
    userpara.innerText=userscore;
    comppara.innerText=compscore;
    console.log("Draw");
    mess.innerText="Game was Draw! Try Again";
    
    
}
const gencomp=()=>{
    const opt=["rock","paper","scissor"];
    const ch=opt[Math.floor(Math.random()*3)];
    return ch;
}
const playgame=(userchoice)=>{
    const compchoice=gencomp();
    let userwin;
    console.log("computer choice",compchoice);
    console.log("user choice",userchoice);
    if(userchoice==compchoice){ drawgame();}
    else{
        userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);

    }
    


}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>

    {   const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})