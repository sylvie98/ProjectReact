import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import Card from "./components/card.js";

const EventExanple =()=>{
    return(
    <section className='bookList'>
        <Book/>
    </section>
    );
};
const Book=()=>{
     return(
        <>
         <div className='book'>
            <Card image="./photo/cup.jpg" title=" hello" author="dinah"/>
            </div>
          <div>
            <Card image="./photo/lap.jpg" title=" hello" author="dinah"/>
            </div>
            <div>
            <Card image="./photo/computer.jpg" title=" hello" author="dinah"/>
            </div>
          
        </>
   );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventExanple/>);