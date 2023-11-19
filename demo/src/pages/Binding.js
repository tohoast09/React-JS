import { useState } from "react"

function Binding() {
    const [name, setName] = useState('')

    const courses = [
        {
            id: 1,
            name: 'HTML, CSS'
        },
        {
            id: 2,
            name: 'Javascript'
        },
        {
            id: 3,
            name: 'ReactJS'
        },
    ]

    const [checked, setChecked] = useState([])
    // console.log(checked);
    const handleChecked = (id) => {
        setChecked(prev => (
            checked.includes(id)? checked.filter(item => item !== id) : [...prev,id]
        ))
    }
    console.log(checked);
    const handleSubmit = () => {
        //call API
        console.log({ids: checked});
    }
    return (
        <div>
            <h1>Binding Page</h1>
            <input value={name} onChange={e => setName(e.target.value)}>
            </input>
            <button onClick={() => setName('Nguyen Van')}>Change</button>


            
            {
                courses.map(course => (
                    <div key={course.id}> 
                        <input 
                            type="checkbox"
                            checked={checked.includes(course.id)}
                            onChange={() => handleChecked(course.id)}
                        />
                            {course.name}
                        
                    </div>
                ))
            }

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Binding