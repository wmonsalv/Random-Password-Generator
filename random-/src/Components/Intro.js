import React from "react"

function intro(){
    return(
        <div>
        <h1><span>Generate a</span> random password</h1>
        <h4>Never use an insecure password again.</h4>
        <br></br>
        <button type="button" id="passwordGenerator" class="btn btn-success">Generate Passwords</button>
        <hr id="horz"/>
        <form>
        <input class="form-control" id="myForm" type="text" placeholder="Random Generated password number 1"/>
        <input class="form-control" id="myForm" type="text" placeholder="Random Generated password number 2"/>
        </form>
        </div>
    )
}

export default intro