const cursor= document.querySelector('.mouse');
document.addEventListener('mousemove', e=> {
  cursor.setAttribute("style", "top: " + (e.pageY -33) + "px; left: "+(e.pageX -33)+ "px;");
});
$(document).ready(function(){
    $('#exampleModal').modal('show');
}); 

document.getElementById("play-7years").addEventListener("click", function() {
  var audio = document.getElementById("sonido1");
  audio.play();
});

  const boton1 = document.getElementById('play-7years');
  const sonido1 = document.getElementById('sonido1');

  boton1.addEventListener('click', () => {
    sonido1.play();
  });

  const boton2 = document.getElementById('play-InsideOut');
  const sonido2 = document.getElementById('sonido2');

  boton2.addEventListener('click', () => {
    sonido2.play();
  });


  const boton3 = document.getElementById('play-OneLastTime');
  const sonido3 = document.getElementById('sonido3');

  boton3.addEventListener('click', () => {
    sonido3.play();
  });
