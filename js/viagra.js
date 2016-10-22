var x;
var y;
var mouse = document.getElementById('mouse_v');
var activo = false;

document.addEventListener("mousemove", function(){
  if(activo){
 followMouse(event);
 
  mouse.style.top = y+"px";
  mouse.style.left= x+"px";
  }
})

function followMouse(event){
     x = event.pageX-10;
     y = event.pageY-5; 
}
function viagriza(size){
  
  if(!activo){
   document.body.classList.add("mouseoff");
     mouse.style.display="block";
  
  setTimeout(function(){
      mouse.style.fontSize=size+"px";
  }, 500)


 activo = true;
}
}
function desvigrarizar(){
 
    
   mouse.style.fontSize="19px";
    setTimeout(function(){
     mouse.style.display="none";
      document.body.classList.remove("mouseoff");
      activo=false;
  }, 3000)
  
}