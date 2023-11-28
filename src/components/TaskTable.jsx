import TaskRows from "./TaskRows";
import "../components/TaskTable.css"

export default function TaskTable({ tasks }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Importancia Alta</th>
            <th>Importancia Media</th>
            <th>Importancia Baja</th>
          </tr>
        </thead>
        <tbody>
          <TaskRows tasks={tasks} />
        </tbody>
      </table>
    </div>
  );
}
