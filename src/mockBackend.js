export const fetchTask = async () => {
	const res = await fetch("http://localhost:5000/tasks");
	const data = await res.json();
	return data;
};

export const insertTask = async (task) => {
	const res = await fetch("http://localhost:5000/tasks", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});
	return await res.json();
};

export const deleteTask = async (task_id) => {
	await fetch(`http://localhost:5000/tasks/${task_id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const updateTask = async (task_id, updatedTask) => {
	const res = await fetch(`http://localhost:5000/tasks/${task_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedTask),
	});
	return await res.json();
};
