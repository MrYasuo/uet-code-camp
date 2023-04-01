import { Space, Button, Typography, Divider } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MENU_BUTTONS_LIST } from "@/constants";

const AdditionalButtons = ({ buttons }) => {
	return (
		<>
			<Divider style={{ margin: "5px 0" }} />
			<Buttons buttons={buttons} />
		</>
	);
};

const Buttons = ({ buttons }) => {
	const location = useLocation();
	const additionalButtons = Object.keys(buttons).filter((button) => {
		const children = buttons[button].children;
		if (children)
			return Object.keys(children).some(
				(child) => location.pathname === children[child]["href"]
			);
	});
	return (
		<Space direction="vertical" align="center">
			{Object.keys(buttons).map((buttonName, i) => (
				<Link key={i} to={buttons[buttonName]["href"]}>
					<Button type="text" style={{ height: "auto", width: "100%" }}>
						<Space direction="vertical">
							{buttons[buttonName]["icon"]}
							<Typography.Text>{buttonName}</Typography.Text>
						</Space>
					</Button>
				</Link>
			))}
			{additionalButtons.length > 0 && (
				<AdditionalButtons
					buttons={buttons[additionalButtons[0]]["children"]}
				/>
			)}
		</Space>
	);
};

const Sidebar = () => {
	return (
		<Space
			direction="vertical"
			align="center"
			className="custom-bg"
			style={{ height: "100%", paddingLeft: "1rem" }}>
			<Buttons buttons={MENU_BUTTONS_LIST} />
		</Space>
	);
};

export default Sidebar;
