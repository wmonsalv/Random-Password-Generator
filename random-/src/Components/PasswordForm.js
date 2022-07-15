import "./PasswordGenerator.css"
import {useState} from "react"

function PasswordGenerator() {


    const [charCount, setCharCount] = useState("")
    const [digitCount, setDigitCount] = useState("")
    const [symbolCount, setSymbolCount] = useState("")

    const onCharChange = (event) => {
        const charValue = event.target.value
        setCharCount(charValue)
    }

    const onDigitChange = (event) => {
        const dValue = event.target.value
        setDigitCount(dValue)
    }

    const onSymbolChange = (event) => {
        const symbolValue = event.target.value
        setSymbolCount(symbolValue)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            characterCount: charCount,
            numberCount: digitCount,
            symbolsCount: symbolCount
        }

        setCharCount("")
        setDigitCount("")
        setSymbolCount("")

        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
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
                    <select className="form-control" value={digitCount} onChange={onDigitChange} id="exampleFormControlSelect1">
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
                    <select className="form-control" value={symbolCount} onChange={onSymbolChange} id="exampleFormControlSelect1">
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
                <button id="submit" type="submit" className="btn btn-success">Generate Passwords</button>
            </form>
        </div>
    )
}


export default PasswordGenerator

