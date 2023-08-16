import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import style from '../index.module.css'
const ClickCounter = () => {
    const clicks = useSelector(state => state.clicks.clicks);
  return (
    <div>
      <h3 className={style.counter}>{clicks}</h3>
    </div>
  )
}

export default ClickCounter
