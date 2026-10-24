import { useState } from 'react'
import Button from './Button'

const Calculator = () => {

    const [input,Setinput] = useState<string>("")

    const Handleclick = (value : string) => {
        if(value === "AC"){
            Setinput("")
        }else if(value === "DEL"){
            Setinput(prev => prev.slice(0,-1))
        }else if(value === "="){
            try {
                const result = eval(input)
                Setinput(String(result))
            } catch (error) {
                Setinput("Error");
            }
        }else{
            Setinput((prev) => prev + value)
        }
    }

    const btns = ["AC","DEL","%","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","="]

  return (
    <div className="border border-gray-400 rounded-2xl shadow-lg shadow-gray-500 p-7">
        <div className='text-right mb-4'>
            <h1 className='text-white text-3xl font-semibold p-6'>{input || 0}</h1>
        </div>
        <div className='grid grid-cols-4 gap-6'>
            {btns.map((btn)=>(
                <Button key={btn} value={btn} handleclick={Handleclick}/>
            ))}
        </div>
    </div>
  )
}

export default Calculator