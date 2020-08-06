


var keypressed=document.getElementById("GFG_Button");
var getsElementText=document.getElementById("textId");



var keypressed=document.getElementById("GFG_Button");


window.onload = function(){
  
  var lengthOfName = "skata"

  document.getElementById('printPanel').innerHTML = lengthOfName;
};
//Checks Verbs, noums and Commands for Game Progression
var Slash="/";
function CommandCheck(verb,noum){
  if(Slash=splitCom[0]){
        if(verb=Gen_Commands.Com1){
        console.log("ola kala");}
        
    }
  else{
    alert("ti koita re malaka");
  }
  }
//Detects the Enter Button
if(getsElementText){
  getsElementText.addEventListener("keyup", function(event) {
  
    event.preventDefault();
    if (event.keyCode === 13) {
 
        keypressed.click();
 
    }
    
  });
}
function BaseCommands(){

}
//Splits String  to two separate parts first is the verb and the second the noum
//Calls CommandCheck 
//Felt cute might delete later
function buttonCode()
{
  
  var str=getsElementText.value
  var splitCom=str.split(" ",2)
  var verb=splitCom[0]
  var noum=splitCom[1]
  
  CommandCheck(verb,noum);
  
  
}
