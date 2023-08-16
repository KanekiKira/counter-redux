import React from 'react'
import { useDispatch } from 'react-redux'
import { nullClick } from '../store/clickSlice';
import style from '../index.module.css'
import Button from 'react-bootstrap/Button';

const ClickNull = () => {
    const dispatch = useDispatch();
  return (
    <div className={style.center}>
    <Button className={style.box} variant="danger" onClick={()=>dispatch(nullClick())}>Danger</Button>
    </div>
  )
}

export default ClickNull
