

let foglio = document.getElementById("foglio"); 

let disegno = foglio.getContext ("2d");

disegno.fillStyle = "red"

disegno.fillRect(200,20, 100, 200)

disegno.fillStyle = "green"

disegno.fillRect(250,200, 200,50)