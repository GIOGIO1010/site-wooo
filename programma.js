

let foglio = document.getElementById("foglio"); 

let disegno = foglio.getContext ("2d");

disegno.fillStyle = "black"

disegno.fillRect(250,200, 450, 10)

disegno.fillStyle = "black"

disegno.fillRect(250,0,10,500)

disegno.fillStyle = "red"

disegno.fillRect (260,0,280,200)

disegno.fillStyle = "yellow"

disegno.fillRect (260,300, 280, 200 )

disegno.fillStyle = "black"

disegno.fillRect (250, 300, 400, 10)

disegno.fillStyle = "blue"

disegno.fillRect (0,0,100,200)

disegno.fillStyle = "black"

disegno.fillRect (0,200, 100, 20)

disegno.fillStyle = "black"

disegno.fillRect (100, 0, 150, 10)

disegno.fillStyle = "black"

disegno.fillRect (100, 0,5, 600)

disegno.fillStyle = "black"

disegno.fillRect (0,400, 250, 8)


let paper = document.getElementById("paper"); 

let disegno2 = paper.getContext("2d");

paper.addEventListener("click", (evento) => {
    disegno2.strokeRect (evento.offsetX, evento.offsetY, 500 *Math.random(), 500 *Math.random());
});