window.addEventListener('load', function(){
   const card1=document.getElementById("card-one");
   const card2=document.getElementById("card-two");
   const card3=document.getElementById("card-three");
   const card4=document.getElementById("card-four");
   const card5=document.getElementById("card-five");
   const card6=document.getElementById("card-six");
   let htmlmatch = 0;
   let score=0;
   const card1click = () =>{
    card1.className="card-html";
    htmlmatch=htmlmatch+1;
    if (htmlmatch==2){
        score=score+5;
        card1.className="card-gone";
        card6.className="card-gone"
    }
}
   card1.addEventListener("click",card1click)

   const card6click = () =>{
    card6.className="card-html";
    htmlmatch=htmlmatch+1;
    if (htmlmatch==2){
        score=score+5;
        card1.className="card-gone";
        card6.className="card-gone"
    }
}
   card6.addEventListener("click",card6click)


   

})
