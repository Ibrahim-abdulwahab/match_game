window.addEventListener('load', function(){

    //each card div will get an id. There can only be 2 divs that have an ids of the same animal. and only one div must get the bomb id
    //this is why when the counters excceed 2 (except the bomb is 1) the animal is removed from the list. We do this n order for the match game
    //to be random everytime 
    var stuff=["lion","squirl","dog","eagle","bomb"];
    var bomb_counter=0;
    var lion_counter=0;
    var squirl_counter=0;
    var dog_counter=0;
    var eagel_counter=0;
    var cards=document.getElementsByClassName("card");
    for (var i =0 ; i< cards.length; i++){
        var number=Math.floor(Math.random() * stuff.length);
        if(stuff[number]=="lion"){
            lion_counter=lion_counter+1;
            cards[i].setAttribute("id",stuff[number]);
            if(lion_counter==2){
                var index=stuff.indexOf("lion")
                if(index>-1){
                stuff.splice(index,1);
                }
            }
        }
        else if(stuff[number]=="squirl"){
            squirl_counter=squirl_counter+1;
            cards[i].setAttribute("id",stuff[number]);
            if(squirl_counter==2){
                var index=stuff.indexOf("squirl")
                if(index>-1){
                stuff.splice(index,1);
                }
            }
        }
        else if(stuff[number]=="dog"){
            dog_counter=dog_counter+1;
            cards[i].setAttribute("id",stuff[number]);
            if(dog_counter==2){
                var index=stuff.indexOf("dog")
                if(index>-1){
                stuff.splice(index,1);
                }
            }
        }
        else if(stuff[number]=="eagle"){
            eagel_counter=eagel_counter+1;
            cards[i].setAttribute("id",stuff[number]);
            if(eagel_counter==2){
                var index=stuff.indexOf("eagle")
                if(index>-1){
                stuff.splice(index,1);
                }
            }
        }
        else if(stuff[number]=="bomb"){
            bomb_counter=bomb_counter+1;
            cards[i].setAttribute("id",stuff[number]);
            if(bomb_counter==1){
                var index=stuff.indexOf("bomb")
                if(index>-1){
                stuff.splice(index,1);
                }
            }
        }
        
    }

    var score=0;
    var first_pick="";
    print=document.getElementById("score");
    var locks=[0,0,0,0,0,0,0,0,0];//anti cheat measure

//compares the cards.if the card the user pick is a bomb,they lose.if it's not and it's the first card they picked
//we save what they picked. if it's the 2nd pick then we compare the first pick and the second pick to see if they match. if they match
//then the user can't pick them again
    const comparitor=(x)=>{
        console.log("l");
        if(x.id=="bomb"){
            for (var i =0 ; i< cards.length; i++){
                cards[i].className="card bomb";
                locks[i]=1;
            }
            print.innerHTML="Kaboom You Lose!";
        }
        else if(first_pick==""){
            first_pick=x;
        }
        else if(first_pick.id==x.id){
            score=score+5;
            print.innerHTML="Score: "+score;
            for (var i =0 ; i< cards.length; i++){
                if(cards[i]==x){
                    locks[i]=1;
                }
                if(cards[i]==first_pick){
                    locks[i]=1;
                }
            }
            first_pick="";
        }
        else{
            score=score-5;
            print.innerHTML="Score: "+score;
            first_pick.className="card";
            x.className="card";
            first_pick="";
        }
    }

    
    cards[0].addEventListener("click", ()=>{
        if(locks[0]==0){
            cards[0].className+=" "+cards[0].id+"";
            setTimeout(()=>comparitor(cards[0]),1000);
        }})

    cards[1].addEventListener("click", ()=>{
        if(locks[1]==0){
            cards[1].className+=" "+cards[1].id+"";
            setTimeout(()=>comparitor(cards[1]),1000);
        }})

    cards[2].addEventListener("click", ()=>{
        if(locks[2]==0){
            cards[2].className+=" "+cards[2].id+"";
            setTimeout(()=>comparitor(cards[2]),1000);
    }})

    cards[3].addEventListener("click", ()=>{
        if(locks[3]==0){
            cards[3].className+=" "+cards[3].id+"";
            setTimeout(()=>comparitor(cards[3]),1000);
    }})

    cards[4].addEventListener("click", ()=>{
        if(locks[4]==0){
            cards[4].className+=" "+cards[4].id+"";
            setTimeout(()=>comparitor(cards[4]),1000);
    }})

    cards[5].addEventListener("click", ()=>{
        if(locks[5]==0){
            cards[5].className+=" "+cards[5].id+"";
            setTimeout(()=>comparitor(cards[5]),1000);
    }})

    cards[6].addEventListener("click", ()=>{
        if(locks[6]==0){
            cards[6].className+=" "+cards[6].id+"";
            setTimeout(()=>comparitor(cards[6]),1000);
    }})

    cards[7].addEventListener("click", ()=>{
        if(locks[7]==0){
            cards[7].className+=" "+cards[7].id+"";
            setTimeout(()=>comparitor(cards[7]),1000);
    }})

    cards[8].addEventListener("click", ()=>{
        if(locks[8]==0){
            cards[8].className+=" "+cards[8].id+"";
            setTimeout(()=>comparitor(cards[8]),1000);
    }})
   
   

})
