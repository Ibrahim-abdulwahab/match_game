window.addEventListener('load', function(){
   const card1=document.getElementById("card-one");
   const card2=document.getElementById("card-two");
   const card3=document.getElementById("card-three");
   const card4=document.getElementById("card-four");
   const card5=document.getElementById("card-five");
   const card6=document.getElementById("card-six");
   const scoreboard=document.getElementById("score");
   let htmlmatch = 0;
   let cssmatch=0;
   let jsmatch=0;
   let wrongmatch=0;
   let score=0;
    
   const correct = (x,y) =>{
    score=score+5;
    scoreboard.innerHTML=`Score: ${score}`;
    setTimeout(() => { x.className="card-gone"; y.className="card-gone"; }, 1000);
    wrongmatch=0;
   }
   
   const card1click = () =>{
    card1.className="card-html";
    htmlmatch=htmlmatch+1;
    wrongmatch=wrongmatch+1
    if (htmlmatch==2){
        correct(card1,card6)
    }
    if (wrongmatch=2){
        card1.className="card"
        wrongmatch=1;
        htmlmatch=0;
    }
}
   card1.addEventListener("click",card1click)

   const card6click = () =>{
    card6.className="card-html";
    htmlmatch=htmlmatch+1;
    if (htmlmatch==2){
        correct(card1,card6)
    }
}
   card6.addEventListener("click",card6click)

   const card2click = () =>{
    card2.className="card-css";
    cssmatch=cssmatch+1;
    if (cssmatch==2){
        correct(card2,card4)
    }
}
   card2.addEventListener("click",card2click)

   const card4click = () =>{
    card4.className="card-css";
    cssmatch=cssmatch+1;
    if (cssmatch==2){
        correct(card2,card4)
    }
}
   card4.addEventListener("click",card4click)

   const card3click = () =>{
    card3.className="card-js";
    jsmatch=jsmatch+1;
    if (jsmatch==2){
        correct(card3,card5)
    }
}
   card3.addEventListener("click",card3click)

   const card5click = () =>{
    card5.className="card-js";
    jsmatch=jsmatch+1;
    if (jsmatch==2){
        correct(card3,card5)
    }
}
   card5.addEventListener("click",card5click)



   

   

})
