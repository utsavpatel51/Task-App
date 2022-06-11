import { FaTimes } from "react-icons/fa";

const Task = ({ task, removeTask, toggleTask }) => {
	return (
		<div
			className={`task ${task.reminder ? "task-reminder" : ""}`}
			onDoubleClick={() => toggleTask(task.id)}
		>
			<h3>
				{task.text}{" "}
				<FaTimes
					style={{
						color: "red",
						cursor: "pointer",
					}}
					onClick={() => removeTask(task.id)}
				/>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
