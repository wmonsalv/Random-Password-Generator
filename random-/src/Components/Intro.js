import React, { useState } from "react"
import PasswordGenerator from "./PasswordForm";

function Intro() {

  const[currentPass, setCurrentPass] = useState("")



  const passwordData = (enteredPass) => {
    const myData = {
      ...enteredPass,
    }

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
    let Newpassword = ""

    let number_letters = myData.characterCount
    let number_numbers = myData.numberCount
    let number_symbols = myData.symbolsCount


    for (let i = 0; i < letters.length; i++) {
      let randNumberLetters = Math.floor(Math.random() * 51)
      if (i <= number_letters) {
        Newpassword += letters[randNumberLetters]
      }
    }
    for (let i = 0; i < numbers.length; i++) {
      let randNumberNumbers = Math.floor(Math.random() * 10)
      if (i <= number_numbers) {
        Newpassword += numbers[randNumberNumbers]
      }
    }
    for (let i = 0; i < symbols.length; i++) {
      let randNumberSymbols = Math.floor(Math.random() * 9)
      if (i <= number_symbols) {
        Newpassword += symbols[randNumberSymbols]
      }
    }

    //function that shuffles character order

    function shuffle(s) {
      let arr = s.split('');

      arr.sort(function () {
        return 0.5 - Math.random();
      });
      s = arr.join('');
      return s;
    }

    let finalPassword = shuffle(Newpassword)

    console.log(finalPassword)

    setCurrentPass(finalPassword)
    
  }

  return (
    <div>
      <h1><span>Generate a</span> random password</h1>
      <h4>Never use an insecure password again.</h4>
      <br></br>
      <hr id="horz" />
      <PasswordGenerator onGeneratePass={passwordData} />
      <hr id="horz" />
      <div>
        <div id="pass" className="pw-display">{currentPass}</div>
      </div>
    </div>
  )
}

export default Intro