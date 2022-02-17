import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './theme.css';
import { changeTextColor } from './themeSlice';

const Theme = () => {
    
    const [color, setColor] = useState('black');
    const dispatch = useDispatch();

    return (
        <>
            <input className='textbox' type="text" onChange={(e)=>setColor(e.target.value)} />
            <button className='button' onClick={() => { dispatch(changeTextColor(color)) }}>Change Text Color</button>
        </>
    )
}

export default Theme;