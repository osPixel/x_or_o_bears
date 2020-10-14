var Spielerstatus = "keiner";
var Gewinner = "keiner";
var Spielstand = [null, null, null, null, null, null, null, null, null];
var Spielfeld = 1;

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(2));
}

function NeuesSpiel(){
  var Beginner = getRandomInt();
  for (i = 0; i < 9; i++){
  document.getElementById(i).className = "neutral";
  }
  window.Spielstand = [null, null, null, null, null, null, null, null, null];
  window.Gewinner = "keiner";
  window.Spielfeld = 1;
  if (Beginner === 0){
  window.Spielerstatus = "gelbzieht";
  document.getElementById('SpielerStatusAnzeige').innerHTML = ("Das Mädchen ist am Zug");
  } else {
  window.Spielerstatus = "blauzieht";
  document.getElementById('SpielerStatusAnzeige').innerHTML = ("Pandi ist am Zug");
  }
}

function Gewinnstatus(){
if (Spielstand[0] === "blau" && Spielstand[1] === "blau" && Spielstand[2] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[3] === "blau" && Spielstand[4] === "blau" && Spielstand[5] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[6] === "blau" && Spielstand[7] === "blau" && Spielstand[8] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[0] === "blau" && Spielstand[3] === "blau" && Spielstand[6] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[1] === "blau" && Spielstand[4] === "blau" && Spielstand[7] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[2] === "blau" && Spielstand[5] === "blau" && Spielstand[8] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[0] === "blau" && Spielstand[4] === "blau" && Spielstand[8] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[2] === "blau" && Spielstand[4] === "blau" && Spielstand[6] === "blau"){
  window.Gewinner = "blau";
}
if (Spielstand[0] === "gelb" && Spielstand[1] === "gelb" && Spielstand[2] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[3] === "gelb" && Spielstand[4] === "gelb" && Spielstand[5] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[6] === "gelb" && Spielstand[7] === "gelb" && Spielstand[8] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[0] === "gelb" && Spielstand[3] === "gelb" && Spielstand[6] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[1] === "gelb" && Spielstand[4] === "gelb" && Spielstand[7] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[2] === "gelb" && Spielstand[5] === "gelb" && Spielstand[8] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[0] === "gelb" && Spielstand[4] === "gelb" && Spielstand[8] === "gelb"){
  window.Gewinner = "gelb";
}
if (Spielstand[2] === "gelb" && Spielstand[4] === "gelb" && Spielstand[6] === "gelb"){
  window.Gewinner = "gelb";
}
}

function Spielbrett(){
  if (Spielstand[0] != null && Spielstand[1] != null && Spielstand[2] != null  && Spielstand[3] != null && Spielstand[4] != null && Spielstand[5] != null && Spielstand[6] != null && Spielstand[7] != null && Spielstand[8] != null){
    console.log("Alle Felder voll!");
    window.Spielfeld = 0;
  } else {
    console.log("Noch nicht alle Felder voll!");
  }
}

function Spielzug(a){
Spielbrett();
if (Spielfeld == 1){
switch (Spielerstatus) {
  case "keiner":
    document.getElementById('SpielerStatusAnzeige').innerHTML = ("Bitte neues Spiel starten!");
    break;
  case "blauzieht":
    document.getElementById(a).className = "spielerblau";
    Spielstand[a] = "blau";
    Gewinnstatus();
    if (Gewinner != ("blau" || "gelb")) {
    document.getElementById('SpielerStatusAnzeige').innerHTML = ("Das Mädchen ist am Zug");
    window.Spielerstatus = "gelbzieht";
    break;
    } else {
      document.getElementById('SpielerStatusAnzeige').innerHTML = ("Pandi hat gewonnen... <br>Bitte neues Spiel starten!");
      window.Spielerstatus = "keiner";
      break;
    }
  case "gelbzieht":
    document.getElementById(a).className = "spielergelb";
    Spielstand[a] = "gelb";
    Gewinnstatus();
    if (Gewinner != ("gelb" || "blau")) {
    document.getElementById('SpielerStatusAnzeige').innerHTML = ("Pandi ist am Zug");
    window.Spielerstatus = "blauzieht";
    break;
    } else {
      document.getElementById('SpielerStatusAnzeige').innerHTML = ("Das Mädchen hat gewonnen... <br>Bitte neues Spiel starten!");
      window.Spielerstatus = "keiner";
      break;
    }
    }
  }else{
    document.getElementById('SpielerStatusAnzeige').innerHTML = ("Keiner hat gewonnen... <br>Bitte neues Spiel starten!");
    window.Spielerstatus = "keiner";
  }
  }
