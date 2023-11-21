
import UseEffectPage from './Useeffect'
import {useState} from 'react'


function Mounted() {
    const [showPage, setShowPage] = useState(false)



    return (
        <div style ={{padding: 30}}>
            <h1>Mounted</h1>
            <button onClick={() =>setShowPage(!showPage)}>SHOW</button>
            {showPage && <UseEffectPage />}
        </div>
    )
}

export default Mounted;