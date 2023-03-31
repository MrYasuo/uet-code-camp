import { Space, Button, Typography, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBlog,
	faHouse,
	faRoad,
	faAddressCard,
	faComments,
	faClock,
	faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const buttonsList = {
	Blog: {
		href: "#",
		icon: <FontAwesomeIcon icon={faBlog} />,
	},
	"Trang chủ": {
		href: "/",
		icon: <FontAwesomeIcon icon={faHouse} />,
	},
	"Lộ trình": {
		href: "/roadmap",
		icon: <FontAwesomeIcon icon={faRoad} />,
	},
	"Về chúng tôi": {
		href: "/about",
		icon: <FontAwesomeIcon icon={faAddressCard} />,
	},
	"Liên hệ": {
		href: "/contact",
		icon: <FontAwesomeIcon icon={faComments} />,
	},
};

const additionalButtons = {
	"Thời gian": {
		href: "/roadmap",
		icon: <FontAwesomeIcon icon={faClock} />,
	},
	"Các khoá học": {
		href: "/courses",
		icon: <FontAwesomeIcon icon={faBookOpenReader} />,
	},
};

const Buttons = ({ buttons }) => {
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
		</Space>
	);
};

const Sidebar = () => {
	const location = useLocation();
	const isRoadMap =
		location.pathname === "/roadmap" || location.pathname === "/courses";
	return (
		<Space direction="vertical" align="center">
			<Buttons buttons={buttonsList} />

			{isRoadMap && (
				<>
					<Divider style={{ margin: "5px 0" }} />
					<Buttons buttons={additionalButtons} />
				</>
			)}
		</Space>
	);
};

export default Sidebar;
