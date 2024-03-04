const answerList = require("./lib/dict");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function iniciarPregunta() {
  readline.question(
    `que pruevas tienes de que la tierra es plana?`,
    (answer) => {
      respuesta(answer.toLocaleLowerCase());
      iniciarPregunta();
    }
  );
}
function randomTex() {
  let aleatorio = Math.random();
  let aleatorioDe6 = aleatorio * 5;
  let redondeo = Math.round(aleatorioDe6 + 1);

  if (redondeo === 1) {
    console.log("LOS TERRAPLANISTAS COMEN VIDRIO");
  }
  if (redondeo === 2) {
    console.log(
      "UN TERRAPLANISTA ES COMO UN FORUNCULO EN MI CULO, LOS DOS ME MOLESTAIS CUANDO ME SIENTO"
    );
  }
  if (redondeo === 3) {
    console.log("NO TE DOY BOLA, SOS UN BOLUDO Y NO TENES HUEVOS");
  }
  if (redondeo === 4) {
    console.log("CUAL ES EL COLMO DE UN TERRAPLANISTA? TENER UNA NOVIA PLANA");
  }
  if (redondeo === 5) {
    console.log("LOS TERRAPLANISTAS SON COMO LAS LOMBRICES, CIEGAS...");
  }
  if (redondeo === 6) {
    console.log(
      "QUE LE DIJO UN TERRAPLANISTA A UN FISICO NUCLEAR CON 6 MASTER EN ASTROFISICA?... BORREGO"
    );
  }
}
function respuesta(answer) {
  let argumentoEncontrado = 0;

  Object.keys(answerList).forEach(function (key) {
    if (answer.includes(key)) {
      argumentoEncontrado++;
      console.log(answerList[key]);
      console.log(randomTex());
    }
  });

  if (argumentoEncontrado === 0) {
    console.log(
      "No entiendo como podes pensar algo así,puede ser que desde que eras bebe, al caerte de la cunita, el golpe desacomodara un poco el cerebro y no le haces a la lógica…. me parece que deberías explayarte un poco más con esos conceptos pues hasta ahora no veo que ofrezcas algún buen argumento, no seas parguelas, intenta de nuevo!!!"
    );
  }
}
iniciarPregunta();
