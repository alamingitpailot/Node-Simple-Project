
const Controls = () => {
    return <div className="flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-solid border-[#ccc]">
        <div className="">
            <button className='outline-none mr-[5px] text-[17px] font-[500] text-[#444444] text-[#3C87FF]'>All</button>
            <button className='outline-none ml-[5px] mr-[5px] text-[17px] font-[500] text-[#444444]'>Pending</button>
            <button className='outline-none ml-[5px] text-[17px] font-[500] text-[#444444]'>Completed</button>
        </div>
        <div className="">
            <button className='text-[14px] font-[400] text-[#fff] outline-none bg-gradient-to-r from-cyan-500 to-blue-500 py-[7px] px-[13px] rounded-[5px]'>Clear All</button>
        </div>
    </div>
}
export default Controls;