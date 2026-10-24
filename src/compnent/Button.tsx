type Buttonprops = {
    value : string,
    handleclick : (value : string) => void;
}

const Button = ({value,handleclick } : Buttonprops) => {

  return (
    <div>
      <button 
      className="w-15 h-15 p-5 rounded-full text-center text-white text-lg border-gray-500 font-semibold" 
      style={{ boxShadow: '-4px -5px 7px rgba(75, 85, 99, 0.6)' }}
      onClick={() => handleclick(value)}>{value}</button>  
    </div>
  )
}

export default Button