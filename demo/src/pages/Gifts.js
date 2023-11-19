import { useState } from 'react'

const gifts = [
    'CPU i9',
    'Ram 32GB RGB',
    'RGB Keyboard',
]



function Gifts() {
    const [gift, setGift] = useState('Chưa có phần thưởng')

    const handleGift = () => {
        setGift(`Phần thưởng của bạn là ${gifts[Math.floor(Math.random()*gifts.length)]}`)
    }


    return (
        <div className="gifts" style={{ padding: 32 }}>
            <h1>Trang lấy thưởng</h1>
            <h2>{gift}</h2>
            <button onClick = {handleGift}> Lấy thưởng </button>
        </div>
    )

}

export default Gifts