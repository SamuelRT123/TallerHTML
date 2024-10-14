const cursor= document.querySelector('.mouse');
document.addEventListener('mousemove', e=> {
  cursor.setAttribute("style", "top: " + (e.pageY -33) + "px; left: "+(e.pageX -33)+ "px;");
});
$(document).ready(function(){
    $('#exampleModal').modal('show');
});
