document.getElementById('calcular-btn').addEventListener('click', calcularFuncionLineal);

function calcularFuncionLineal() {
  const x1 = parseFloat(document.getElementById('x1').value);
  const y1 = parseFloat(document.getElementById('y1').value);
  const x2 = parseFloat(document.getElementById('x2').value);
  const y2 = parseFloat(document.getElementById('y2').value);

  if (x1 === x2) {
    document.getElementById('resultado').textContent = 'Los puntos no pueden tener el mismo valor de x.';
    return;
  }

  let m = (y2 - y1) / (x2 - x1);
  let n = y1 - m * x1;

  let ecuacion = 'La ecuación lineal es: Y = ';

  if (m !== 0) {

    if(Number.isInteger(m)==true){
    ecuacion += `${m}X `;
    } else{
    ecuacion += `(${decimalToFraction(m)})X `;
    }
    
    if(n<0){
      ecuacion += (Number.isInteger(n)==true) ? `${n}` : `${decimalToFraction(n)}`;
    } else{
      ecuacion += (Number.isInteger(n)==true) ? `+ ${n}` : `+ ${decimalToFraction(n)}`;
    }

  } else {
    if(Number.isInteger(n)==true){
    ecuacion += `${n}`;
    }else{
    ecuacion += `${decimalToFraction(n)}`
    }
  }
  
  document.getElementById('resultado').textContent = ecuacion;
}

function decimalToFraction(decimal) {
  if (decimal % 1 === 0) {
      return decimal + "/1";
  }

  let gcd = function(a, b) {
      if (!b) {
          return a;
      }
      return gcd(b, a % b);
  };

  let len = decimal.toString().length - 2;
  let denominator = Math.pow(10, len);
  let numerator = decimal * denominator;

  let divisor = gcd(numerator, denominator);

  numerator /= divisor;
  denominator /= divisor;

  if((numerator&&denominator)>99){
    return "≈" + Math.floor(numerator) + "/" + Math.floor(denominator);
  } else{
    return Math.floor(numerator) + "/" + Math.floor(denominator);
  }
}