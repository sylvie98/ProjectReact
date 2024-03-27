import React from 'react'
import ReactDOM from "react-dom/client";

const EventExanple =()=>{
    const handleFormInput = ()=>{
        console.log('handle form input');
    };
    const handleFormButton = ()=>{
       alert('handle button click');
    };
    return(
     <section>
        <form>
          <h2>Typical Form</h2> 
          <input type="text" name="example" onChange={handleFormInput } style={{margin:'1rem 0'}}/>
          <button type="submit">submit</button> 
        </form>
        <button onClick={handleFormButton}>click here</button>
    </section>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventExanple/>);