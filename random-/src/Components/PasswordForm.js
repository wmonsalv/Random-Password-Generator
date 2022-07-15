import "./PasswordGenerator.css"
import {useState} from "react"

function PasswordGenerator() {

    const [charCount, setCharCount] = useState("")
    // const [digitCount, setDigitCount] = useState("")
    // const [symbolCount, setSymbolCount] = useState("")

    const onCharChange = (e) => {
        const charValue = e.target.value
        setCharCount(charValue)
    }

    return (
        <div>
            <form>
            <div className="form-group">
                    <label id="labelF" for="exampleFormControlSelect1">Char count</label>
                    <select value={charCount} onChange={onCharChange} className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div className="form-group">
                    <label id="labelF" for="exampleFormControlSelect1">Digit count</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div className="form-group">
                    <label id="labelF" for="exampleFormControlSelect1">Symbol count</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <button id="submit" type="submit" class="btn btn-success">Generate Passwords</button>
            </form>
        </div>
    )
}


export default PasswordGenerator

