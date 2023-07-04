import React, { useState, useEffect } from 'react';
import './DisplayBug.css'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const DisplayBug = () => {

    const [buggs, setBuggs] = useState([]);
    const [rating, setRating] = useState(0);
    const [name, setReview] = useState("");
    const [description, setError] = useState("");

  
    useEffect(() => {
      fetchBuggs();
      
    }, []);
  
    const fetchBuggs = async () => {
      try {
        const response=await fetch("http://localhost:5000/api/buggs");
       
      //  setData(response.data);
        const data = await response.json();
     
        setBuggs(data);
      } catch (error) {
        console.log("Error retrieving Bugs:", error);
      }
    };

    
 
  
  
  
  
    // const [data,setData]=useState("");
    


    // const data = [
    //     {  name: 'John', age: 25 },
    //     {  name: 'Jane', age: 30 },
    //     { name: 'Bob', age: 35 }
    //   ];



      return <div className="wrapper1">
         <div className='Topic'>Reported Bugs</div>
                   <form class="comment-form">
                     <div className="heading">
                       

                        <div className='tableContainer'>
                             <table>
                                <thead>
                                   <tr>
                                    
                                      <th className='dec1'>Name</th>
                                      <th className='dec'>Description</th>
                                   </tr>
                               </thead>
                                <tbody>
                                   {buggs.map((item) => (
                                       <tr key={item.name}>
                                          
                                           <td className='dec1'>{item.name}</td>
                                           <td className='dec'>{item.buggReview}</td>
                                      </tr>
                                   ))}
                               </tbody>
                           </table>
                           </div>
                     </div>     
                   </form>
     </div>;
}

DisplayBug.propTypes = propTypes;
DisplayBug.defaultProps = defaultProps;
// #endregion

export default DisplayBug;
