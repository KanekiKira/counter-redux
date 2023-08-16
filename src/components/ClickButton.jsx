import React from 'react'
import { useDispatch } from 'react-redux'
import { addClick } from '../store/clickSlice';
import Buttonn from 'react-bootstrap/Button';
import style from '../index.module.css'


const ClickButton = () => {
    const dispatch = useDispatch();
  return (
      <div className={style.center}>

      <Buttonn className={style.box}  onClick={()=>dispatch(addClick())}>+</Buttonn>

      </div>
  )
}

export default ClickButton
