//step is used in a logic that helps user to insert alternate images(cross,nought)
let step;
let X=0,O=0;

//All the cells are are stored in a Nodelist
const boxes=document.querySelectorAll('.box');

//startGame is function that initiates the Game
function startGame(){
  step=1;
  document.getElementById('button').innerHTML='<h3>Reset!</h3>';
  //pos helps to trace which box is clicked.If cross is the img display on box the pos will be alligned with value 1 or else pos=0
  pos=[10,11,2,3,4,5,6,7,8];
  for(let i=0;i<boxes.length;i++){
    boxes[i].innerHTML='';
    boxes[i].addEventListener('click',handler,{once:true});
  }
}


//handler is a function,that access each box and onclick either the cross or nought is displayed on the boxes
function handler(event){
  
  if(step%2!==0){
    
    document.getElementById(event.target.id).innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
    document.getElementById('turn').innerHTML=`<h3>It's Player <img class="button-img"  src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png"> turn</h3>`;//display which player turn it is.
    step++;
    pos[event.target.id]=1;
    winner('cross');
   
  }
  else{
    
  document.getElementById(event.target.id).innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
  document.getElementById('turn').innerHTML=`<h3>It's Player <img class="button-img" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png"> turn</h3>`;//display which player turn it is.
  step++;
  pos[event.target.id]=0;
  winner('no');
  }

}

//winner Function determines which player has won the Game or is it a Draw
function winner(val){
 
  if((pos[0]===pos[1] && pos[1]===pos[2]) || (pos[0]===pos[4] && pos[4]===pos[8]) || (pos[6]===pos[4] && pos[4]===pos[2]) || (pos[6]===pos[7] && pos[7]===pos[8]) || (pos[0]===pos[3] && pos[3]===pos[6]) || (pos[3]===pos[4] && pos[4]===pos[5]) || (pos[1]===pos[4] && pos[4]===pos[7]) || (pos[2]===pos[5] && pos[5]===pos[8])){
    
    if(val==='cross'){
      //displays message on the button,player1 wins
      document.getElementById('turn').innerHTML='<h3>Player <img class="button-img" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png"> Wins! Play Again</h3>';
      X++;
      document.getElementById('scoreX').innerHTML=`<h4>${X}</h4>`;

  
    }
    else{
       //displays message on the button,player2 wins
      document.getElementById('turn').innerHTML='<h3>Player <img class="button-img"  src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png"> Wins! Play Again</h3>';
      O++;
      document.getElementById('scoreO').innerHTML=`<h4>${O}</h4>`;
      
    }
     
    for(i=0;i<boxes.length;i++){
      boxes[i].removeEventListener('click',handler);
    }
    
  
  
  }
   //displays message on the button,that the match is draw
  else if(step===10){
    document.getElementById('turn').innerHTML="<h3>It's a DRAW! Play Again</h3>";
    
  }

}
startGame();

//Restarts the Game By refresing the window
document.getElementById('turn').onclick=()=>{
  startGame();
}
document.getElementById('button').onclick=()=>{
  reset();
}
function reset(){
  X=0;
  O=0;
  document.getElementById('scoreO').innerHTML=`<h4>${O}</h4>`;
  document.getElementById('scoreX').innerHTML=`<h4>${X}</h4>`;
  startGame();
}

