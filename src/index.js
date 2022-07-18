import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Utama()
 {
  const [name,setName]=useState("");

  const handleSubmit=(event) => {
    event.preventDefault();
    alert('Masukan : ${name}');
  }

  return (
    <div id="layoutnya">
    <div id="header">
        <ul>
          <li><img src="images/logo.svg" height="30" width="60"></img></li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
    </div>

    <div id="tulisan">
    <div id="tulisan_1">
      More than <br/>
      shorter links
    </div>

    <div id="tulisan_2">
      Build your brand's recognition and get detailed <br/>
      insights on how your links are performing. <br/><br/>
    </div>

    <div id="tombolnya">
      <a href="#">Get Started</a>
    </div>

    </div>

    <div id="letak_gambar">
       <img src="images/illustration-working.svg" height="350" width="400"></img>
    </div>

    <br/><br/><br/><br/>
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="urlnya"
             value={name}
             onChange={(e) => setName(e.target.value)}
             size="40" class="input_shorten" />
             <input type="submit" value="Shorten It"   />
     </form>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Utama/>);
