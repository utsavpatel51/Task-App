import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const AddTask = ({ closeModal, addTask }) => {
	const [text, setTask] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === "" || day === "") {
			alert("Please enter a task and a day");
			return;
		}
		addTask({ text, day, reminder });
		closeModal();
		setTask("");
		setDay("");
		setReminder(false);
	};

	return (
		<div className="modal">
			<section className="modal-main">
				<form className="add-form" onSubmit={onSubmit}>
					<div className="form-control">
						<label>Task</label>
						<input
							type="text"
							placeholder="Task 1"
							value={text}
							onChange={(e) => setTask(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label>Add Day & Time</label>
						<input
							type="text"
							placeholder="Feb 6th at 1:30pm"
							value={day}
							onChange={(e) => setDay(e.target.value)}
						/>
					</div>
					<div className="form-control-check">
						<label>Set Reminder</label>
						<input
							type="checkbox"
							checked={reminder}
							onChange={(e) =>
								setReminder(e.currentTarget.checked)
							}
						/>
					</div>
					<input type="submit" value="Save Task" className="btn" />
				</form>
				<FaTimes className="modal-close-btn" onClick={closeModal} />
			</section>
		</div>
	);
};

export default AddTask;
