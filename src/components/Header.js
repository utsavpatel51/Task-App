import Button from "./Button";

const Header = ({ showAddTask }) => {
	return (
		<header className="header">
			<h1>Task Tracker</h1>
			<Button text="Add" showAddTask={showAddTask} />
		</header>
	);
};

export default Header;
