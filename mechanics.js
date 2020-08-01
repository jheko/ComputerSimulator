




var getsElementText=document.getElementById("textId");

var keypressed=document.getElementById("GFG_Button");
var getsElementText=document.getElementById("textId");



var keypressed=document.getElementById("GFG_Button");

document.getElementById("yes").outerHTML = FirstStage.Descriptor;

//Checks Verbs and noums for Game Progression
function CommandCheck(verb,noum){
  if(verb=="skata"){
        
        console.log("ola kala");
        
    }
  }

if(getsElementText){
  getsElementText.addEventListener("keyup", function(event) {
  
    event.preventDefault();
    if (event.keyCode === 13) {
 
        keypressed.click();
 
    }
    
  });
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
  
  alert(splitCom);
}
