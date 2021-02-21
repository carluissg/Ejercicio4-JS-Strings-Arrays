let palabras = ['café', 'croissant', 'tostada', 'zumo'];
let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1));
console.log(palabrasParesModificadas);

function modificaPares(palabras, fx) {
  let palabrasParesModificadas = [];
  for (const i in palabras) {
    if (i % 2 !== 0) {
      palabrasParesModificadas.push(fx(palabras[indice]));
    } else {
      palabrasParesModificadas.push(palabras[indice]);
    }

  }
  return palabrasParesModificadas;
}
