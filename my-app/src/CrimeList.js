import React from 'react';


const CrimeList = (props) => {
  
  const CrimeList = props.crimes.map((crime, i) => {
    
    return    <li key={i}>{crime.description}<button onClick={props.deleteItem.bind(null, i)}>Delete</button></li> 
    
    
  
  })


  console.log(props)
  return (
  <div>
    <h4>Crimes</h4>
    <ul>
      {CrimeList}
    </ul>
  </div>
  )
}



export default CrimeList