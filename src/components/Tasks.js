import Task from "./Task";

const Tasks = ({ tasks, removeTask, toggleTask }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					removeTask={removeTask}
					toggleTask={toggleTask}
				/>
			))}
		</>
	);
};

export default Tasks;
