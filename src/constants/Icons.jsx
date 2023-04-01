import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBlog,
	faHouse,
	faRoad,
	faAddressCard,
	faComments,
	faClock,
	faBookOpenReader,
	faPenToSquare,
	faRocket,
	faVrCardboard,
	faWallet,
	faGraduationCap,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const MENU_BUTTONS_LIST = {
	Blog: {
		href: "#",
		icon: (
			<FontAwesomeIcon
				className="padding-right-10"
				color="#593767"
				icon={faBlog}
			/>
		),
	},
	"Trang chủ": {
		href: "/",
		icon: (
			<FontAwesomeIcon
				className="padding-right-10"
				color="#593767"
				icon={faHouse}
			/>
		),
	},
	"Lộ trình": {
		href: "/roadmap",
		icon: (
			<FontAwesomeIcon
				className="padding-right-10"
				color="#593767"
				icon={faRoad}
			/>
		),
		children: {
			"Thời gian": {
				href: "/roadmap",
				icon: (
					<FontAwesomeIcon
						icon={faClock}
						className="padding-right-10"
						color="#593767"
					/>
				),
			},
			"Các khoá học": {
				href: "/courses",
				icon: (
					<FontAwesomeIcon
						icon={faBookOpenReader}
						className="padding-right-10"
						color="#593767"
					/>
				),
			},
		},
	},
	"Về chúng tôi": {
		href: "/about",
		icon: (
			<FontAwesomeIcon
				className="padding-right-10"
				color="#593767"
				icon={faAddressCard}
			/>
		),
	},
	"Liên hệ": {
		href: "/contact",
		icon: (
			<FontAwesomeIcon
				className="padding-right-10"
				color="#593767"
				icon={faComments}
			/>
		),
	},
};

const REGISTER_BUTTON = {
	"Đăng ký ngay": {
		href: "https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform",
		icon: (
			<FontAwesomeIcon
				className="padding-right-10"
				color="#593767"
				icon={faPenToSquare}
			/>
		),
	},
};

const INTRODUCES = [
	{
		title: "Công nghệ mới",
		description:
			"Những chủ đề của Code Camp hướng tới những công nghệ nóng, mới mẻ.",
		icon: <FontAwesomeIcon size="2x" color="#593767" icon={faRocket} />,
	},
	{
		title: "Ứng dụng thực tế",
		description:
			"Sử dụng kiến thức thu lượm được vào việc phát triển ứng dụng, có khả năng áp dụng thực tế.",
		icon: <FontAwesomeIcon size="2x" color="#593767" icon={faVrCardboard} />,
	},
	{
		title: "Cơ hội nghề nghiệp",
		description:
			"Kết thúc Code Camp, thành viên tham gia có thể sử dụng những kiến thức của mình để ứng tuyển vào các vị trí thực tập trong các công ty.",
		icon: <FontAwesomeIcon size="2x" color="#593767" icon={faWallet} />,
	},
	{
		title: "Tự tìm hiểu",
		description:
			"Tham gia Code Camp, bạn có cơ hội tự tìm hiểu công nghệ, dưới sự giúp đỡ của người hướng dẫn và trợ giảng.",
		icon: <FontAwesomeIcon size="2x" color="#593767" icon={faGraduationCap} />,
	},
	{
		title: "Làm việc nhóm",
		description:
			"Nâng cao kĩ năng làm việc nhóm của bạn thông qua các sự kiện nhỏ hơn được tổ chức theo nhóm.",
		icon: <FontAwesomeIcon size="2x" color="#593767" icon={faPeopleGroup} />,
	},
	{
		title: "Hỗ trợ",
		description:
			"Đồng hành với mỗi camp là các anh/chị có kinh nghiệm trong lĩnh vực công nghệ của họ. Có khát khao chia sẻ, giúp đỡ thế hệ trẻ hơn mình.",
		icon: <FontAwesomeIcon size="2x" color="#593767" icon={faComments} />,
	},
];

export { MENU_BUTTONS_LIST, REGISTER_BUTTON, INTRODUCES };