export default function TaskRows({ tasks, importance }) {
  return (
    <>
      <tr>
        <td>
          {tasks.alta?.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </td>
        <td>
          {tasks.media?.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </td>
        <td>
          {tasks.baja?.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </td>
      </tr>
    </>
  );
}
