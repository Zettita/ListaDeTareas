import { useReducer, useRef, useState } from "react";
import TaskTable from "./TaskTable";

export default function TaskForm() {
  const inputRef = useRef();
  const selectRef = useRef();

  // Estado para almacenar la lista de tareas
  const [taskList, setTaskList] = useState({
    alta: [],
    media: [],
    baja: [],
  });

  const [tasks, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add_task": {
        const newTask = {
          id: state[action.importanciaValue].length + 1,
          title: action.taskValue,
          importance: action.importanciaValue,
        };

        // Actualiza el estado local de tasks
        const newTasksState = {
          ...state,
          [action.importanciaValue]: [...state[action.importanciaValue], newTask],
        };

        // Actualiza el estado de taskList
        setTaskList(newTasksState);

        return newTasksState;
      }

      default: {
        return state;
      }
    }
  }, taskList);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add_task",
      taskValue: inputRef.current.value,
      importanciaValue: selectRef.current.value,
    });

    inputRef.current.value = "";
  };
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          <>
            <label htmlFor="tarea">Nueva Tarea</label>
            <input
              id="tarea"
              type="text"
              name="task"
              placeholder="Nueva tarea"
              ref={inputRef}
            />
            <label htmlFor="importanciaSelect">
              Selecciona la importancia:
            </label>
            <select
              name="importancia"
              id="importanciaSelect"
              defaultValue="..."
              ref={selectRef}
            >
              <option value="..." disabled>
                Seleccione importancia
              </option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
            <button type="submit">Agregar tarea</button>
          </>
        }
      </form>
      <TaskTable tasks={tasks} />
    </>
  );
}
