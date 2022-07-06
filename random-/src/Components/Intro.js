import React, {useState} from "react"
import copy from "copy-to-clipboard";  

function Intro(){

  const url = "https://passwordinator.herokuapp.com/generate?num=true&caps=true&char=true&len=15"

  const[password, setPassword] = useState([{}])
    
   
   const fetchAPI = () => {
     fetch(url).then(
       response => response.json()
       ).then(
         data => {
         setPassword(data)
       }
     )
   }

   let myElement = document.getElementById("pass")

   

    return(
        <div>
        <h1><span>Generate a</span> random password</h1>
        <h4>Never use an insecure password again.</h4>
        <br></br>
        <button onClick= {() => fetchAPI()} type="button" id="passwordGenerator" className="btn btn-success">Generate Passwords</button>
        <hr id="horz"/>
        <div>
        <div id="pass" className="pw-display">{password.data}</div>
        </div>
        
        </div>
    )
}

export default Intro