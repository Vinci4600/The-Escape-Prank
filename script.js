	function clickButton(){
    
		document.getElementById('ausgabe').innerHTML = event.target.innerHTML
    
		console.log("I've been clicked: "+event.target.innerHTML)

	}


	
	//Ereignisbehandlung initialisieren (nach der clickButton-Funktion)

	var buttons = document.getElementsByTagName('button')

	for (var i = 0; i < buttons.length; i++) {

    
		buttons[i].onclick = clickButton

	}
	const button = document.getElementById("fliehButton");

  button.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = x + "px";
    button.style.top = y + "px";
  });
   function scrollChaos() {
    window.scrollTo({
      top: Math.random() * document.body.scrollHeight,
      behavior: "smooth"
    });}

    function startMatrix(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = window.innerHeight;

  const letters = "アカサタナハマヤャラワ0123456789";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);

  window.addEventListener("resize", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = window.innerHeight;
  });
}

startMatrix("matrix-left");
startMatrix("matrix-right");







function Version3(){
  
  document.getElementById("hiddennn").style.display = "block";
  
 
}