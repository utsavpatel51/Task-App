import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { fetchTask, insertTask, deleteTask, updateTask } from "./mockBackend";

function App() {
	const [modal, setModal] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const loadTask = async () => {
			setTasks(await fetchTask());
		};
		loadTask();
	}, []);

	// Add a Task
	const addTask = async (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		const updateTask = await insertTask(newTask);
		setTasks([...tasks, updateTask]);
	};

	// Remove a Task
	const removeTask = async (task_id) => {
		await deleteTask(task_id);

		setTasks(tasks.filter((task) => task.id != task_id));
	};

	// Toggle task reminder
	const toggleTask = async (task_id) => {
		const task = tasks.find((task) => task.id == task_id);
		const updatedTask = { ...task, reminder: !task.reminder };
		const data = await updateTask(task_id, updatedTask);
		setTasks(
			tasks.map((task) =>
				task.id == task_id ? { ...task, reminder: data.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header
				showAddTask={() => {
					setModal(true);
				}}
			/>
			{modal && (
				<AddTask
					closeModal={() => {
						setModal(false);
					}}
					addTask={addTask}
				/>
			)}

			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					removeTask={removeTask}
					toggleTask={toggleTask}
				/>
			) : (
				<h4 className="no-task">🎉 No Pending Tasks 🎉</h4>
			)}
		</div>
	);
}

export default App;
