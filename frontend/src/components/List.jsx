export default function List({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li className="font-medium mb-4 text-3xl" key={task.id}>
          {task.name}
        </li>
      ))}
    </ul>
  );
}
