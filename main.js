let step=1;
let pos1=2,pos2=2;pos=3,pos3=66,pos4=7,pos5=9,pos6=11,pos7=22,pos8=223,pos9=44;

function winner(val){
  if((pos1===pos2 && pos2===pos3) || (pos1===pos5 && pos5===pos9) || (pos7===pos5 && pos5===pos3) || (pos7===pos8 && pos8===pos9) || (pos1===pos4 && pos4===pos7) || (pos4===pos5 && pos5===pos6) || (pos2===pos5 && pos5===pos8) || (pos3===pos6 && pos6===pos9)){
    
    if(val==='cross'){
      document.getElementById('button').innerHTML='<h4>Player <img class="button-img" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png"> Wins! Play Again<h4>';

  
    }
    else{
      document.getElementById('button').innerHTML='<h4>Player <img class="button-img"  src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png"> Wins! Play Again<h4>';
      
    }
     element1.onclick=null; element2.onclick=null; element3.onclick=null; element4.onclick=null; element5.onclick=null; element6.onclick=null; element7.onclick=null; element8.onclick=null; element9.onclick=null;
  
  }

}


let element1=document.getElementById('box1');
element1.onclick=()=>{
  element1.onclick=null;
  if(step%2!==0){
  element1.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
  pos1=1;
  
  winner('cross');
}
else{
element1.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
pos1=0;
winner('no');
}
}
let element2=document.getElementById('box2');
element2.onclick=()=>{
  element2.onclick=null;
  if(step%2!==0){
  element2.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
  pos2=1;
  winner('cross');
}
else{
element2.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
 pos2=0;
 winner('no');
}
}
let element3=document.getElementById('box3');
element3.onclick=()=>{
  element3.onclick=null;
  if(step%2!==0){
  element3.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
   pos3=1;
   winner('cross');
}
else{
element3.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
 pos3=0;
 winner('no');
}
}

let element4=document.getElementById('box4');
element4.onclick=()=>{
  element4.onclick=null;
  if(step%2!==0){
  element4.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
   pos4=1;
   winner('cross');
}
else{
element4.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
 pos4=0;
 winner('no');
}
}

let element5=document.getElementById('box5');
element5.onclick=()=>{
  element5.onclick=null;
  if(step%2!==0){
  element5.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
   pos5=1;
   winner('cross');
}
else{
element5.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
 pos5=0;
 winner('no');
}
}


let element6=document.getElementById('box6');
element6.onclick=()=>{
  element6.onclick=null;
  if(step%2!==0){
  element6.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
  pos6=1;
  winner('cross');
}
else{
element6.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
 pos6=0;
 winner('no');
}
}


let element7=document.getElementById('box7');
element7.onclick=()=>{
  element7.onclick=null;
  if(step%2!==0){
  element7.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
  pos7=1;
  winner('cross');
}
else{
element7.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
 pos7=0;
 winner('no');
}
}


let element8=document.getElementById('box8');
element8.onclick=()=>{
  element8.onclick=null;
  if(step%2!==0){
  element8.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
   pos8=1;
   winner('cross');
}
else{
element8.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
pos8=0;
winner('no');
}
}

let element9=document.getElementById('box9');
element9.onclick=()=>{
  element9.onclick=null;
  if(step%2!==0){
  element9.innerHTML='<img class="cross" src="./1-16405_american-red-cross-computer-icons-christian-cross-symbol.png">';
  step++;
  pos9=1;
  winner('cross');
 
}
else{
element9.innerHTML='<img class="nought" src="./421-4211837_fond-colors-circle-poster-u37711-transparent-red-strikethrough.png">';
step++;
pos9=0;
winner('no');
}
}
;