import React from 'react';


const CrimeList = (props) => {
  
  const CrimeList = props.crimes.map((crime, i) => {
    
    return <div className="card m-3 bg-light text-center" >  <p className="card-body text-center p-3" key={i}>{crime.description}<br></br><button className="btn btn-danger m-2" onClick={props.deleteItem.bind(null, i)}>Delete</button></p> 
    </div>
    
    
  
  })


  console.log(props)
  return (
  <div>
    <h1 className="text-center mt-4 text-dark">Crimes</h1>
    <ul>
      {CrimeList}
    </ul>
  </div>
  )
}



export default CrimeList