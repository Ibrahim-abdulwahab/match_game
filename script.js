window.addEventListener('load', function(){
   const card1=document.getElementById("card-one");
   const card2=document.getElementById("card-two");
   const card3=document.getElementById("card-three");
   const card4=document.getElementById("card-four");
   const card5=document.getElementById("card-five");
   const card6=document.getElementById("card-six");
   const scoreboard=document.getElementById("score");
   let card1pressed=0;//cheat prevention
   let card2pressed=0;
   let card3pressed=0;
   let card4pressed=0;
   let card5pressed=0;
   let card6pressed=0;
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
    card1pressed=0;
    card2pressed=0;
    card3pressed=0;
    card4pressed=0;
    card5pressed=0;
    card6pressed=0;
   }
   
   const card1click = () =>{
    if (card1pressed==0){
    card1pressed=1;
    card1.className="card-html";
    htmlmatch=htmlmatch+1;
    wrongmatch=wrongmatch+1;
    if (htmlmatch==2){
        correct(card1,card6)
    }
    if (wrongmatch==2){
        card1.className="wrong-card"
        setTimeout(() => {card1.className="card"}, 1000);
        htmlmatch=0;
        wrongmatch=1;
        card1pressed=0;
    }}
}   
   card1.addEventListener("click",card1click)

   const card6click = () =>{
    if (card6pressed==0){
    card6pressed=1;
    card6.className="card-html";
    htmlmatch=htmlmatch+1;
    wrongmatch=wrongmatch+1;
    if (htmlmatch==2){
        correct(card1,card6)
    }
    if (wrongmatch==2){
        card6.className="wrong-card"
        setTimeout(() => {card6.className="card"}, 1000);
        htmlmatch=0;
        wrongmatch=1;
        card6pressed=0;
    }}
}
   card6.addEventListener("click",card6click)

   const card2click = () =>{
    if (card2pressed==0){
    card2pressed=1;
    card2.className="card-css";
    cssmatch=cssmatch+1;
    wrongmatch=wrongmatch+1;
    if (cssmatch==2){
        correct(card2,card4)
    }
    if (wrongmatch==2){
        card2.className="wrong-card"
        setTimeout(() => {card2.className="card"}, 1000);
        cssmatch=0;
        wrongmatch=1;
        card2pressed=0;
    }}
}
   card2.addEventListener("click",card2click)

   const card4click = () =>{
    if (card4pressed==0){
    card4pressed=1;
    card4.className="card-css";
    cssmatch=cssmatch+1;
    wrongmatch=wrongmatch+1;
    if (cssmatch==2){
        correct(card2,card4)
    }
    if (wrongmatch==2){
        card4.className="wrong-card"
        setTimeout(() => {card4.className="card"}, 1000);
        cssmatch=0;
        wrongmatch=1;
        card4pressed=0;
    }}
}
   card4.addEventListener("click",card4click)

   const card3click = () =>{
    if (card3pressed==0){
    card3pressed=1;
    card3.className="card-js";
    jsmatch=jsmatch+1;
    wrongmatch=wrongmatch+1;
    if (jsmatch==2){
        correct(card3,card5)
    }
    if (wrongmatch==2){
        card3.className="wrong-card"
        setTimeout(() => {card3.className="card"}, 1000);
        jsmatch=0;
        wrongmatch=1;
        card3pressed=0;
    }}
}
   card3.addEventListener("click",card3click)

   const card5click = () =>{
    if (card5pressed==0){
    card5pressed=1;
    card5.className="card-js";
    jsmatch=jsmatch+1;
    wrongmatch=wrongmatch+1;
    if (jsmatch==2){
        correct(card3,card5)
    }
    if (wrongmatch==2){
        card5.className="wrong-card"
        setTimeout(() => {card5.className="card"}, 1000);
        jsmatch=0;
        wrongmatch=1;
        card5pressed=0;
    }}
}
   card5.addEventListener("click",card5click)



   

   

})
