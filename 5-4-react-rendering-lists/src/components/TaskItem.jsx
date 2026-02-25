// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* Done (TASK 4): Checkbox calls onToggle(task.id) on change
            Also make it reflect task.isDone using checked={task.isDone} */}
        <input type="checkbox" checked={task.isDone} onChange={() => onToggle(task.id)} />

        {/* Done (TASK 3): Show <DueBadge /> ONLY when task is NOT done (&&)
            Example:
              {!task.isDone && <DueBadge dueDate={task.dueDate} />} */}
              {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* Done (TASK 2): Display the task title
            Example:
              <span className="title">{task.title}</span> */}
              <span className="title">{task.title}</span>
      </label>

      {/* Done (TASK 4): Delete button calls onDelete(task.id) on click */}
      <button className="ghost" aria-label="Delete task" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  );
}