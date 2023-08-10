import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
  // Aula - reducer 
  const [number, dispatch] = useReducer((state, action) => {
    const num = Math.floor(state);
    return Math.random(num)
  });

  // 2 avançando no useReducer 
  const initialTask = [
    { id: 1, text: "Fazer Alguma coisa" },
    { id: 2, text: "fazendo outra coisa" },
  ]

  // função para o  useReducer
  const taskReducer = (state, action) => {

    // agora gente vai fazer switch 
    // eslint-disable-next-line default-case
    switch (action.type) {
      // aqui meu case serao em string
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("")
        return [...state, newTask]
      case "DELETE":
        return state.filter((task) => task.id !== action.id)
      default:
        return state;
    }
  }

  // utilizarei useState para adicionar uma task
  const [taskText, setTaskText] = useState("")

  // assim irei iniciar minhas task
  // esse dispatchTasks vai ativar a função taskReducer
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)

  //função do formulario:

  const handleSubmits = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" })
  }

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  }
  return (
    <>
      <div>
        <h2> UseReducer </h2>
        <p>
          Número:{number}
        </p>
        <button
          onClick={dispatch} >Gerar novo numero !</button>
        <hr />
        <h3> Tarefas: </h3>
      </div>
      <div>
        <form onSubmit={handleSubmits}>
          <label>Adicionar Task:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText} />
          <input
            type="submit"
            value="Enviar"
          />
          {
            tasks.map((task) => (
              <li key={task.id} onDoubleClick={(e) => removeTask(task.id)}>{task.text}</li>
            ))
          }
        </form>
      </div>
    </>
  )
}

export default HookUseReducer