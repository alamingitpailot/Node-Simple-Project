
import { useState } from 'react';
import axios from 'axios';
import { bar } from '../utils/icons'
const FormInput = () => {
    const [text, setText] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/todo', {})
    }

    const inputHandle = (e) => {
        setText(e.target.value)
    }

    return <form className="w-[100%] pt-[25px] px-[20px]" onSubmit={onSubmit}>
        <div className="h-[50px] relative">
            <div className="absolute top-[12px] left-[17px]">{bar}</div>
            <input onChange={inputHandle} className='h-[100%] w-[100%] pl-[56px] outline-none border border-[#999] rounded-[5px] text-[18px] focus:border focus:border-[2px] focus:border-[solid] focus:border-[#3C87FF]' placeholder='Enter your text'></input>
        </div>
    </form>
}
export default FormInput;