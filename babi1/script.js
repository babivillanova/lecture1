// get reference to sliders

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

// listen to slider events

function makeRows() {

  // remove existing table
  let table = document.getElementById( 'table' )

  if ( table ) {
    table.remove()
  }

  table = document.createElement( 'table' )
  table.id = 'table'
  document.body.appendChild( table )

  const columns = x_slider.valueAsNumber
  const rows = y_slider.valueAsNumber

  document.getElementById( 'x_label' ).innerHTML = "x"
  document.getElementById( 'y_label' ).innerHTML = "y"

  for ( i = 0; i < rows; i ++ ) {
  
     const row = document.createElement( 'tr' )
    table.appendChild( row )

    for ( j = 0; j < columns; j ++ ) {

        const cell = document.createElement( 'td' )
      
        for (|i + j| = 0) {
            cell.innerText = "bem me quer"
            else {
             cell.innerText = "mal me quer"
            }
        }

      row.appendChild( cell )

    }
  }
}