import React,{useState} from 'react'
import './Calculator.css'

const Calculator = () => {

    const [input,setInput] =useState(" ");
    const [result, setResult] = useState("");

    const handleClick = (value) =>{
        setInput(input + value);
    };
    const Result=() =>{
        {
            setInput(eval(input).toString());
        }
    };

    const clearInput=()=>{
        setInput("");
        setResult("");
    };
  return (
    <div className='main_board'> Calculator 
     <div className='box'>
        <input className='inp' type="text" name='' id='display' value={input}/>
        <br />
       
        <button type='submit'className='btn'onClick={() =>clearInput("AC")}>AC</button>
        <button type='submit'className='btn'onClick={() =>handleClick("/")}>/</button>
        <button type='submit'className='btn'onClick={() =>clearInput("cross")}>cross</button>
        <button type='submit'className='btn'onClick={() =>handleClick("%")}>%</button>
        <button type='submit'className='btn'onClick={() =>handleClick("7")}>7</button>
        <button type='submit'className='btn'onClick={() =>handleClick("8")}>8</button>
        <button type='submit'className='btn'onClick={() =>handleClick("9")}>9</button>
        <button type='submit'className='btn'onClick={() =>handleClick("*")}>*</button>
        <button type='submit'className='btn'onClick={() =>handleClick("4")}>4</button>
        <button type='submit'className='btn'onClick={() =>handleClick("5")}>5</button>
        <button type='submit'className='btn'onClick={() =>handleClick("6")}>6</button>
        <button type='submit'className='btn'onClick={() =>handleClick("-")}>-</button>
        <button type='submit'className='btn'onClick={() =>handleClick("1")}>1</button>
        <button type='submit'className='btn'onClick={() =>handleClick("2")}>2</button>
        <button type='submit'className='btn'onClick={() =>handleClick("3")}>3</button>
        <button type='submit'className='btn'onClick={() =>handleClick("+")}>+</button>
        <button type='submit'className='btn'onClick={() =>handleClick("00")}>00</button>
        <button type='submit'className='btn'onClick={() =>handleClick("0")}>0</button>
        <button type='submit'className='btn'onClick={() =>handleClick(".")}>.</button>
        <button type='submit'className='btn'onClick={() =>Result("=")}>=</button>
     </div>
    </div>
  )
};

export default Calculator;