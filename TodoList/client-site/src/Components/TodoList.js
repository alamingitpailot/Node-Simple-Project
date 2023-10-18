

import { useState, useEffect, useRef } from 'react';
import { dot } from "../utils/icons";

const TodoList = () => {
    const [actionArea, setActionArea] = useState(null);
    const mainArea = useRef();

    useEffect(() => {
        let handler = (e) => {
            console.log(mainArea.current.contains(e.target));
            if (!mainArea.current.contains(e.target)) {
                setActionArea(null);
            }
        }
        document.addEventListener("mousedown", handler);
    });

    return <div className="pb-[20px]" >
        <ul className="mb-[10px] border-b-[1px]">
            <li className="flex justify-between items-center border-b-[1px] border-solid border-[#ccc] py-[10px] mx-[20px]">
                <div className="flex items-center gap-[10px]">
                    <input type="checkbox" />
                    <p>Renew Gym membership</p>
                </div>
                <div className="action relative" ref={mainArea}>
                    <div className="cursor-pointer" onClick={() => setActionArea(0)}>
                        {dot}
                    </div>
                    {actionArea === 0 && <div className="actionArea absolute top-[21px] left-[8px] w-[100px] h-[60px] bg-[#000] px-[10px] py-[5px] rounded-[5px]">
                        <ul className='text-[#fff]'>
                            <li className='cursor-pointer'>Edit</li>
                            <li className='cursor-pointer'>Delete</li>
                        </ul>
                    </div>}
                </div>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-solid border-[#ccc] py-[10px] mx-[20px] last:border-b-0">
                <div className="flex items-center gap-[10px]">
                    <input type="checkbox" />
                    <p>Send project a client</p>
                </div>
                <div className="action relative" ref={mainArea}>
                    <div className="cursor-pointer" onClick={() => setActionArea(1)}>
                        {dot}
                    </div>
                    {actionArea === 1 && <div className="actionArea absolute top-[21px] left-[8px] w-[100px] h-[60px] bg-[#000] px-[10px] py-[5px] rounded-[5px]">
                        <ul className='text-[#fff]'>
                            <li className='cursor-pointer'>Edit</li>
                            <li className='cursor-pointer'>Delete</li>
                        </ul>
                    </div>}
                </div>
            </li>
        </ul>
    </div>
}
export default TodoList;