import noImagePlaceholderImage from "../assets/noImagePlaceholder.svg";

export default function Grid({ tasks }) {
  return (
    <ul className="flex flex-wrap">
      {tasks.map((task) => (
        <li
          className="block w-64 text-1xl text-center overflow-hidden text-elipsis"
          key={task.id}
        >
          <img
            className="m-auto w-32 mb-5 align-center"
            src={noImagePlaceholderImage}
            alt="Placeholder for no Logo"
          />
          {task.name}
        </li>
      ))}
    </ul>
  );
}
