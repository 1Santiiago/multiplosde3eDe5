import "./styles.css";

// criar uma funcção somente para siomar os multiplos de 3 e de 5
// apenas os multiplos

// multiplos de  3 (dentro de 10)
// 3,.6,9
//multiplos de 5
//5,10

function somarMultiplos(e) {
  let multiplos3 = 0;
  let multiplos5 = 0;
  for (let i = 0; i <= e; i++) {
    if (i % 3 === 0) {
      multiplos3 += i;
    } else if (i % 5 === 0) {
      multiplos5 += i;
    }
  }

  console.log(multiplos3 + multiplos5);
}

somarMultiplos(10);
