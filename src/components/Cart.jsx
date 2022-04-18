import { React, useRef } from 'react';
import {GrClose} from 'react-icons/gr'

const Cart = ({cartOpened, setCartOpened}) => {
  const myCart = useRef(null)
  return (
    <div ref={myCart} className={`${cartOpened ? 'h-[100vh] w-[300px] bg-white mycart absolute top-0 right-0 block': 'hidden'}`}>

      <GrClose className='cursor-pointer text-2xl absolute right-3 top-3 text-[#282828] font-medium' onClick={()=> setCartOpened(false)}/>
    </div>
  )
}

export default Cart