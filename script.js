const btn = document.getElementById( 'btn' );

btn.addEventListener( 'click', function(){
  let fahrenheit, celsius, kelvin;
  const temp = parseInt( document.getElementById( 'temp' ).value );
  let opc = document.getElementById( 'opc' );
  let opcSel = parseInt( opc.options[ opc.selectedIndex ].value );
  let resultado = document.getElementById( 'resultado' );

  switch( opcSel ) {
    case 1:
      fahrenheit = ( temp * 1.8 ) + 32;
      resultado.innerHTML = fahrenheit;
      break;
    case 2:
      celsius = ( temp - 32 ) / 1.8;
      resultado.innerHTML = celsius;
      break;
    case 3:
      kelvin = temp + 273.15;
      resultado.innerHTML = kelvin;
      break;
    case 4:
      celsius = temp - 273.15;
      resultado.innerHTML = celsius;
      break;
    case 5:
      kelvin = ( ( 5 / 9 ) * ( temp - 32 ) ) + 273.15;
      resultado.innerHTML = kelvin;
      break;
    case 6:
      fahrenheit = ( 1.8 * ( temp - 273.15 ) ) + 32;
      resultado.innerHTML = fahrenheit;
      break;
    default:
      resultado.innerHTML = ( 'Dato inválido' );
      break;
  }
} );