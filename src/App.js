import { useState } from 'react';
import './App.css';



function App() {
  const [data,setdata]=useState(["Relative1","Relative2","Relative3","Relative4"])
  
  return (
    <>
     <h4>Relative List</h4>
    {
      data.map(function(data, index) {
        return (
          <div key={index} >
          <ol start={index}>   
             
            <li>{data}</li>   
                
            </ol>
           
            </div>

        )
    })
    }
    </>
  )
}

export default App;
