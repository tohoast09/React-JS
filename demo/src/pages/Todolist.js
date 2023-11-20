import { useState } from 'react'






function TodoList() {
    
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(() =>{
        const initTodos = localStorage.getItem("Jobs")
        const ObjInitTodos = JSON.parse(initTodos)
        return ObjInitTodos ?? []
    })

    const handleInput = (value) => {
        setTodo(value)
    }
    
    
    const handleClick = () => {
        setTodos(prev => {
            const newJobs = [...prev, todo]
            const jsonJobs = JSON.stringify(newJobs)
            console.log(jsonJobs);
            localStorage.setItem("Jobs",jsonJobs )

            return newJobs
        })
        
        setTodo('')
    }

    return (
        <div style={{ padding: 32 }}>
            <input
                value ={todo}
                onChange={(e) => handleInput(e.target.value)}
            >

            </input>
            <button
                onClick={handleClick}
            >Add</button>

            
                <ul>
                    {todos.map((adddetail, index) => (
                            <li key={index}>{adddetail}</li>
                            )
                    )}
                </ul>
            
        </div>
    )
}

export default TodoList