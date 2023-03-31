import { useState } from "react";
import { Menu, Typography, Space } from "antd";

const items = [
	{
		label: "Java",
		key: "java",
	},
	{
		label: "NodeJS",
		key: "nodejs",
	},
	{
		label: "Ruby",
		key: "ruby",
	},
];

const courses = {
	java: {
		title: "Lập trình ứng dụng Web với Spring Framework - Spring boot",
		short: "Thành thạo Spring boot và phát triển ứng dụng web theo mô hình MVC",
		level: "Nhập môn (dễ)",
		description:
			"Khóa học này được thiết kế để giới thiệu cho bạn về Spring boot và mô hình web MVC cũng như cách hoạt động của chúng. Bạn không cần bất kỳ kinh nghiệm nào về lập trình ứng dụng web, nhưng bạn cần có kiến thức cơ bản về Java",
		teacher: {
			name: "anh Lê Đức Anh",
			business:
				"Software Developer công ty TL Creative Solutions, cựu sinh viên UET (K58)",
			description: `Là người làm việc độc lập và thích đương đầu với nhiều thử thách. Thích tìm hiểu công nghệ mới để thỏa mãn sự tò mò. Câu nói yêu thích: "Kẻ mạnh không phải là kẻ giẫm lên vai kẻ khác để thoả mãn lòng ích kỉ. Kẻ mạnh chính là kẻ giúp đỡ kẻ khác trên đôi vai của chính mình" - Nam Cao`,
		},
		lectures: [
			{
				title: "Tổng quan về Java web",
				lessions: [
					"Mô hình Web - Client (request, response, method là gì? ...",
					"Giới thiệu Spring Boot, cấu trúc project (n-tier controller - service - persistance), cấu trúc maven",
				],
			},
			{
				title: "Spring MVC",
				lessions: [
					"Các annotation cơ bản RequestMapping, PathVariable, RequestParam",
					"Giới thiệu về JSP, làm việc với Multipage và khai báo Static Resource (CSS, js)",
				],
			},
			{
				title: "Template engine",
				lessions: ["Sử dụng các tag trong JSP (JSLT) (if - else, for loop)"],
			},
			{
				title: "Accessing database",
				lessions: [
					"Giới thiệu về Hibnerate ORM 01 - kết nối databse",
					"Giới thiệu về Hibnerate ORM 02 - query",
					"CRUD trong Spring MVC 01 - query + phân trang",
				],
			},
			{
				title: "Sring MVC plus",
				lessions: [
					"Tạo Restful Web service trong Spring MVC, sử dụng Ajax trong Jquery",
					"Spring basic securiry, tạo trang đăng nhập",
				],
			},
			{
				title: "Building final project",
				lessions: [
					"Thảo luận, đưa ra solution, thuyết trình về ý tưởng trước khi thực hiện",
					"Phân tích bài toán, tài liệu hệ thống (UML), design DB",
					"Xây dựng hệ thống (2 - tuần)",
					"Bảo vệ đồ án tốt nghiệp, chia sẻ kinh nghiệm với các Senior",
				],
			},
		],
		goals: [
			"Hiểu được kiến trúc web cơ bản, xây dựng đươc ứng dụng Web với Spring MVC",
			"Nắm chắc kiến thức về Hibernate ORM",
			"Quy trình và các thức xây dựng project Java Web",
			"Khả năng xử lý các vấn đề",
			"Có cơ hội được giới thiệu vào các công ty công nghệ và tham gia các dự án thực tế",
		],
	},
	nodejs: {
		title: "Trở thành Node.js developer",
		short: "Xây dựng Restful API với Node.js, Express và MongoDB",
		level: "Nhập môn (dễ)",
		description:
			"Học cách xây dựng một ứng dụng Restful API với đầy đủ tính năng như một dự án thực tế bằng cách sử dụng Node, Express và MongoDB.",
		teacher: {
			name: "anh Trần Văn Tú",
			business: "Web Developer công ty Foobla, cựu sinh viên UET (K58)",
			experience:
				"Hơn 3 năm kinh nghiệm làm việc với vai trò web developer tại Foobla và hơn 2 năm kinh nghiệm với Node.js.",
			description:
				"Chào thế giới! Mình là Tú, mình ở đây để hỗ trợ các lập trình viên đầy tham vọng tiếp cận tới một cấp bậc mới trong con đường sự nghiệp của mình. Mình làm việc ở vị trí Full Stack Developer đã và đang làm việc với PHP, MySQL, Node.js, MongoDB, ReactJS, Redis, Elasticsearch. Mình cũng là một trong hai mentor chính của khóa ReactJS năm 2018 của UET CodeCamp.",
		},
		lectures: [
			{
				title: "Làm quen với Javascript",
				lessions: [
					"Javascript là gì?",
					"Cú pháp",
					"Biến và kiểu dữ liệu",
					"Operators, Phép gán",
					"Hàm và scope",
					"Object, Array",
					"Điều kiện và vòng lặp",
				],
			},
			{
				title: "Làm quen với Node.js",
				lessions: [
					"Node.js là gì?",
					"Cài đặt môi trường, ứng dụng Hello World",
					"npm là gì?",
					"Developing and debugging",
					"Môi trường phát triển với Nodemon",
				],
			},
			{
				title: "Bất đồng bộ",
				lessions: [
					"Bất đồng bộ trong Node.js là gì",
					"Callstack và Event Loop",
					"Callback function",
					"Tìm hiểu về Promise",
					"Giới thiệu Async/Await",
				],
			},
			{
				title: "Xây dựng REST API với Express",
				lessions: [
					"Http module là gì?",
					"Cách tạo một web server? Sử dụng Express để tạo 1 web server",
					"Middleware trong Express",
					"Middleware trong Express",
					"MVC là gì? Áp dụng mô hình MVC trong Express",
					"Sử dụng POSTMan để test request",
				],
			},
			{
				title: "Xử lý dữ liệu với MongoDB",
				lessions: [
					"Hệ quản trị cơ sở dữ liệu là gì?",
					"MongoDB là gì? Cách cài đặt MongoDB",
					"Mongoose là gì? Schema, Model trong Mongoose",
					"CURD trong Mongoose",
					"Kết hợp với Express để xây dựng REST API",
				],
			},
			{
				title: "Bảo mật và xác thực trong ứng dụng REST API",
				lessions: [
					"Tại sao phải bảo mật cho REST API",
					"JWT là gì? JWT hoạt động như thế nào",
					"Áp dụng JWT cho REST API",
					"Mã hóa mật khẩu",
				],
			},
			{
				title: "Xây dựng ứng dụng thời gian thực",
				lessions: [
					"WebSocket là gì?",
					"Tại sao phải dùng WebSocket thay vì HTTP",
					"Socket.IO là gì? Áp dụng Socket.IO vào ứng dụng",
					"Lắng nghe và phát sự kiện trong Socket.IO",
					"Broadcasting Events",
				],
			},
		],
		goals: [
			"Hiểu căn bản về lập trình Web đặc biệt là về phía backend",
			"Hiểu và biết cách lập trình với Node.js cơ bản",
			"Biết cách tạo một ứng dụng Restful API với Node.js và Express",
			"Làm quen cơ bản với hệ quản trị cơ sở dữ liệu như MongoDB",
			"Cách cài đặt và triển khai một ứng dụng Node.js lên server",
			"Tăng khả năng tự học và cách xử lý vấn đề",
		],
	},
	ruby: {
		title: "Lập trình ứng dụng web với Ruby on Rails Framework",
		short:
			"Sử dụng framework Ruby on Rails để xây dựng ứng dụng web theo mô hình MVC",
		level: "Nhập môn (dễ)",
		description:
			"Khóa học giúp trang bị một số kiến thức, kĩ năng không thể thiếu trong quá trình phát triển sự nghiệp của lập trình viên Ruby on Rails.",
		teacher: {
			name: "anh Md. Mahmudur Rahman (tên thường gọi: Mahmud)",
			business:
				"Education Section, Human Development Division, Sun* Inc. (tiền thân là Framgia Inc.)",
			description:
				"anh Mahmud là một lập trình viên với 3 năm kinh nghiệm làm việc với ngôn ngữ lập trình Ruby và framework Ruby on Rails, đã trải qua nhiều dự án với quy mô, độ phức tạp khác nhau. Sáng tạo, chuyên nghiệp, không ngừng học hỏi để tiến bộ là những phẩm chất mà anh rèn luyện hàng ngày trong công việc, đồng thời anh cũng mong muốn truyền đạt tinh thần ấy đến với những bạn thực tập sinh, nhân viên thử việc do anh trực tiếp kèm cặp tại công ty Sun*.",
		},
		lectures: [
			{
				title: "Ruby cơ bản",
				lessions: [
					"Mở đầu",
					"Kiểu dữ liệu",
					"Biểu thức và toán tử",
					"Các cấu trúc điều khiển",
					"Phương thức, Proc, Lambda",
					"Lớp, Module",
				],
			},
			{
				title: "Làm quen với framework Ruby on Rails",
				lessions: [
					"Khởi tạo ứng dụng đầu tiên của bạn",
					"Scaffold",
					"Mô hình MVC và thiết kế chuẩn RESTful",
				],
			},
			{
				title: "Làm việc với tầng Model",
				lessions: ["Migration", "Validation", "Callback", "Association"],
			},
			{
				title: "Làm việc với View",
				lessions: ["Layout", "Form Helper", "Asset Pipeline"],
			},
			{
				title: "Làm việc với Controller",
				lessions: ["Sesion và Cookie", "Strong Parameters", "Router"],
			},
			{ title: "Gửi và nhận email" },
			{
				title: "Làm việc với JavaScript",
				lessions: ["Rails AJAX", "jQuery AJAX"],
			},
		],
		goals: [
			"Có khả năng sử dụng công cụ quản lý phiên bản để làm việc nhóm trong các dự án phát triển phần mềm",
			"Nắm được các khái niệm, cú pháp cơ bản của ngôn ngữ Ruby",
			"Hiểu về kiến trúc web cơ bản, thực hành xây dựng website với framework Ruby on Rails",
			"Rèn luyện tư duy logic, năng lực tiếp cận và xử lý vấn đề",
		],
	},
};

const Course = ({ course }) => {
	return (
		<Space direction="vertical">
			<Typography.Title level={5}>{courses[course]["title"]}</Typography.Title>
			<Typography.Text style={{ fontStyle: "italic" }}>
				{courses[course]["short"]}
			</Typography.Text>
			<Typography.Text>
				<b>{"Mức độ: "}</b>
				{courses[course]["level"]}
			</Typography.Text>
			<Typography.Paragraph>
				<b>{"Mô tả: "}</b>
				{courses[course]["description"]}
			</Typography.Paragraph>
			<Typography.Title level={5}>{"Người hướng dẫn"}</Typography.Title>
			<Typography.Text>
				<b>{"Họ tên: "}</b>
				{courses[course]["teacher"]["name"]}
			</Typography.Text>
			{courses[course]["teacher"]["experience"] && (
				<Typography.Text>
					<b>{"Kinh nghiệm: "}</b>
					{courses[course]["teacher"]["experience"]}
				</Typography.Text>
			)}
			<Typography.Text>
				<b>{"Công tác: "}</b>
				{courses[course]["teacher"]["business"]}
			</Typography.Text>
			<Typography.Paragraph>
				<b>{"Giới thiệu: "}</b>
				{courses[course]["teacher"]["description"]}
			</Typography.Paragraph>
			<Typography.Title level={5}>{"Chương trình học"}</Typography.Title>
		</Space>
	);
};

const CoursesMenu = () => {
	const [course, setCourse] = useState("java");
	return (
		<Space direction="vertical">
			<Menu
				onClick={(e) => setCourse(e.key)}
				items={items}
				selectedKeys={[course]}
				mode="horizontal"
			/>
			<Course course={course} />
		</Space>
	);
};

export default CoursesMenu;
