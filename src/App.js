import ReactDom from'react-dom';
import React, {useState,useEffect} from 'react';
import './App.css';


//useEffect - Fetch the data from API
function Userdemo(){
  const [photos,setPhotos]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data =>{
        setPhotos(data);
        setLoading(false);
      })
      .catch(error =>{
        console.error('Error fetching data');
        setLoading(false);
      })
  },[]);
  if(loading){
    return <p>Loading...</p>;
  }

  return(
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map(photo=>(
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
    </div>
  )
}
ReactDom.render(<Userdemo/>,document.getElementById("root"));
export default Userdemo;