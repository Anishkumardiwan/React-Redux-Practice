import React from 'react';
import { useSelector } from 'react-redux';

const Coin = () => {
    const count = useSelector((state) => state.counter.count);
    const themeTextColor = useSelector((state) => state.theme.color);

    return (
        <>
            <h1 style={{ color: themeTextColor }}>You Have a {count} Coins </h1>
        </>
    )
}

export default Coin;