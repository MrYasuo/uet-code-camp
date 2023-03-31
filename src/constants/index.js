const COURSES_MENU_LIST = [
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

const COURSES_LIST = {
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
				lessons: [
					"Mô hình Web - Client (request, response, method là gì? ...",
					"Giới thiệu Spring Boot, cấu trúc project (n-tier controller - service - persistance), cấu trúc maven",
				],
			},
			{
				title: "Spring MVC",
				lessons: [
					"Các annotation cơ bản RequestMapping, PathVariable, RequestParam",
					"Giới thiệu về JSP, làm việc với Multipage và khai báo Static Resource (CSS, js)",
				],
			},
			{
				title: "Template engine",
				lessons: ["Sử dụng các tag trong JSP (JSLT) (if - else, for loop)"],
			},
			{
				title: "Accessing database",
				lessons: [
					"Giới thiệu về Hibnerate ORM 01 - kết nối databse",
					"Giới thiệu về Hibnerate ORM 02 - query",
					"CRUD trong Spring MVC 01 - query + phân trang",
				],
			},
			{
				title: "Sring MVC plus",
				lessons: [
					"Tạo Restful Web service trong Spring MVC, sử dụng Ajax trong Jquery",
					"Spring basic securiry, tạo trang đăng nhập",
				],
			},
			{
				title: "Building final project",
				lessons: [
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
				lessons: [
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
				lessons: [
					"Node.js là gì?",
					"Cài đặt môi trường, ứng dụng Hello World",
					"npm là gì?",
					"Developing and debugging",
					"Môi trường phát triển với Nodemon",
				],
			},
			{
				title: "Bất đồng bộ",
				lessons: [
					"Bất đồng bộ trong Node.js là gì",
					"Callstack và Event Loop",
					"Callback function",
					"Tìm hiểu về Promise",
					"Giới thiệu Async/Await",
				],
			},
			{
				title: "Xây dựng REST API với Express",
				lessons: [
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
				lessons: [
					"Hệ quản trị cơ sở dữ liệu là gì?",
					"MongoDB là gì? Cách cài đặt MongoDB",
					"Mongoose là gì? Schema, Model trong Mongoose",
					"CURD trong Mongoose",
					"Kết hợp với Express để xây dựng REST API",
				],
			},
			{
				title: "Bảo mật và xác thực trong ứng dụng REST API",
				lessons: [
					"Tại sao phải bảo mật cho REST API",
					"JWT là gì? JWT hoạt động như thế nào",
					"Áp dụng JWT cho REST API",
					"Mã hóa mật khẩu",
				],
			},
			{
				title: "Xây dựng ứng dụng thời gian thực",
				lessons: [
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
				lessons: [
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
				lessons: [
					"Khởi tạo ứng dụng đầu tiên của bạn",
					"Scaffold",
					"Mô hình MVC và thiết kế chuẩn RESTful",
				],
			},
			{
				title: "Làm việc với tầng Model",
				lessons: ["Migration", "Validation", "Callback", "Association"],
			},
			{
				title: "Làm việc với View",
				lessons: ["Layout", "Form Helper", "Asset Pipeline"],
			},
			{
				title: "Làm việc với Controller",
				lessons: ["Sesion và Cookie", "Strong Parameters", "Router"],
			},
			{ title: "Gửi và nhận email" },
			{
				title: "Làm việc với JavaScript",
				lessons: ["Rails AJAX", "jQuery AJAX"],
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

const GUESTS_OF_HONOR = [
	{
		avatar: "https://uetcodecamp.github.io/images/member/dinhvantien.jpg",
		name: "Anh Đinh Văn Tiến",
		role: "Công ty Tekko",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/ngothanhle.jpg",
		name: "Anh Ngô Thành Lê",
		role: "CEO công ty Higgsups",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/phamthihoaitrang.jpg",
		name: "Chị Phạm Thị Hoài Trang",
		role: "Công ty Tekko",
	},
];

const FIRE_TEAMS = [
	{
		avatar: "https://uetcodecamp.github.io/images/member/tranvantu3.png",
		name: "Anh Trần Văn Tú",
		role: "Công ty Foobla",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/leducanh.jpg",
		name: "Anh Lê Đức Anh",
		role: "Công ty TL Creative Solutions",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/nguyentienminh2.png",
		name: "Anh Nguyễn Tiến Minh",
		role: "BM Mạng MT & Truyền thông, UET",
	},
];

const ENTHUSIASTIC_TEAMS = [
	{
		avatar: "https://uetcodecamp.github.io/images/member/phamhuan.jpg",
		name: "Anh Phạm Huân",
		role: "Chủ nhiệm CLB thư viện hội sinh viên",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/nguyentuninh.jpg",
		name: "Anh Nguyễn Tú Ninh",
		role: "CLB thư viện hội sinh viên",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/hoangtiendong.jpg",
		name: "Anh Hoàng Tiến Đông",
		role: "CLB hỗ trợ sinh viên",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/nguyenthithoa.jpg",
		name: "Chị Nguyễn Thị Thoa",
		role: "Nguyên Chủ nhiệm CLB thư viện hội sinh viên",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/nguyennga.jpg",
		name: "Chị Nguyễn Nga",
		role: "CLB thư viện hội sinh viên",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/tranmanhcuong.jpg",
		name: "Anh Trần Mạnh Cường",
		role: "UET - VNU",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/dovansi.jpg",
		name: "Anh Đỗ Văn Sĩ",
		role: "UET - VNU",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/leanhson.jpg",
		name: "Anh Lê Anh Sơn",
		role: "Công ty Emddi",
	},
	{
		avatar:
			"https://uetcodecamp.github.io/images/member/nguyentrongminhdung.jpg",
		name: "Anh Nguyễn Trọng Minh Dũng",
		role: "Công ty Sota Tech",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/tranminhquy.jpg",
		name: "Anh Trần Minh Quý",
		role: "Công ty Higgsups",
	},
];

const AWESOME_CAMPERS = [
	{
		avatar: "https://uetcodecamp.github.io/images/member/ngominhphuong.jpg",
		name: "Ngô Minh Phương",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/tranmanhcuong.jpg",
		name: "Trần Mạnh Cường",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/dovansi.jpg",
		name: "Đỗ Văn Sĩ",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/haptienquan.jpg",
		name: "Hạp Tiến Quân",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/tranvanhieu.jpg",
		name: "Trần Văn Hiếu",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/doanvanquang.jpg",
		name: "Đoàn Văn Quang",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/ngogianguyen.jpg",
		name: "Ngô Gia Nguyên",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/duonghonganh.jpg",
		name: "Dương Hồng Anh",
	},
	{
		avatar: "https://uetcodecamp.github.io/images/member/phungdinhxuan.jpg",
		name: "Phùng Đình Xuân",
	},
];

const TIMELINE_START = [
	{
		title: "Mở đơn đăng kí",
		description: "28/2 - 10/3",
	},
	{
		title: "Tổ chức kiểm tra đầu vào",
		description: "11/3",
	},
	{
		title: "Gặp gỡ các thành viên Camp 2019",
		description: "14/3",
	},
	{
		title: "Tham gia khóa học ngắn với Git",
		description: "15-21/3",
	},
];

const TIMELINE_END = [
	{
		title: "Học, tìm tòi công nghệ mới",
		description: "22/3 - 22/4",
		status: "wait",
	},
	{
		title: "Làm dự án",
		description: "22/4 - 22/5",
	},
];

export {
	COURSES_LIST,
	COURSES_MENU_LIST,
	FIRE_TEAMS,
	ENTHUSIASTIC_TEAMS,
	AWESOME_CAMPERS,
	GUESTS_OF_HONOR,
	TIMELINE_START,
	TIMELINE_END,
};
