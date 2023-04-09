import { MENU_BUTTONS_LIST, REGISTER_BUTTON, INTRODUCES } from "./Icons";
import { BLOGS_LIST } from "./blogs";

const COURSES_MENU_LIST = [
	// {
	// 	label: "Java",
	// 	key: "java",
	// },
	{
		label: "NodeJS",
		key: "nodejs",
	},
	// {
	// 	label: "Ruby",
	// 	key: "ruby",
	// },
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
		teachers: [
			{
				name: "Anh Nguyễn Thái Tiệp",
				business: "Software Engineer - Teko Việt Nam",
				experience: "3+ năm trong lĩnh vực Công nghệ phần mềm",
				description:
					"Xin chào, Mình là sinh viên K63 khoa CNTT hiện đang là kỹ sư phần mềm tại Teko Việt Nam và cũng là một trong những thành viên của TVHSV. Mình yêu thích lập trình và muốn tạo ra những sản phẩm mang đến nhiều giá trị cho mọi người. Bằng sự hiểu biết và kinh nghiệm ít ỏi của mình, hy vọng sẽ giúp các bạn có nhiều hiểu biết hơn về phần mềm và cách xây dựng ra chúng.",
			},
			{
				name: "Anh Phạm Công Mạnh Hùng",
				prizes: [
					"Giải ba Hội nghị Sinh viên NCKH cấp Khoa năm 2023",
					"Sinh viên nghiên cứu tại lab Công nghệ Phần mềm",
					"Thực tập sinh NodeJS tại TokyoLife",
				],
				description:
					"Mình là sv K65 CACLC, chuyên ngành Khoa học máy tính. Khi bắt đầu lên đại học, mình cảm thấy khá thích JS nên đã quyết định thử và học, và tính tới giờ mình đã sử dụng và làm việc với Nodejs được gần 3 năm. Trong thời gian rảnh, mình thường hay mày mò sử dụng những công nghệ mới liên quan tới JS, hoặc tìm hiểu sâu và kỹ hơn về Nodejs. Cách để hiểu rõ nhất công nghệ chính là truyền đạt lại ý hiểu của mình cho người khác, nên rất vui được hợp tác và giảng dạy, trao đổi thêm với các bạn về ngôn ngữ JS cũng như Nodejs.",
			},
		],
		lessons: [
			{
				title: "Phần I. Introduction",
				lessons: [
					{
						title: "Tổng quan Camp Node.js",
					},
					{
						title: "Xây dựng phần mềm",
						lessons: [
							"Ứng dụng của phần mềm",
							"Xây dựng phần mềm trong thực tế",
						],
					},
					{
						title: "Git và Vscode",
						lessons: [
							"Giới thiệu git (cá nhân và nhóm)",
							"Làm việc với Vscode",
						],
					},
					{
						title: "Giới thiệu Frontend",
						lessons: ["HTML", "CSS", "Bootstrap"],
					},
					{
						title: "Deployment",
					},
				],
			},
			{
				title: "Phần II. Javascript (JS)",
				lessons: [
					{
						title: "Javascript Tutorial",
						lessons: [
							"Biến, các kiểu dữ liệu",
							"Mảng",
							"Object",
							"JS Loop (For, While, If …else, Switch case)",
						],
					},
					{
						title: "Javascript Versions",
						lessons: [
							"Giới thiệu về ES6 (arrow function, module).",
							"ES6 - khái niệm hoisting, scoping.",
							"Giới thiệu Node.js (optional)",
						],
					},
					{
						title: "Javascript Async",
						lessons: [
							{
								title: "Lập trình bất đồng bộ",
								lessons: [
									"JS Callbacks",
									"JS Asynchronous",
									"JS Asynchronous",
									"JS Async/Await",
								],
							},
							{
								title: "Tránh callback hell",
							},
							{
								title: "OOP trong Javascript",
							},
						],
					},
					{
						title: "DOM trong Javascript",
						lessons: [
							"Giới thiệu DOM",
							"Sử dụng JS để thay đổi DOM.",
							"Sử dụng Chrome Dev Tool để debug.",
						],
					},
				],
			},
			{
				title: "Phần III. Node.js",
				lessons: [
					{
						title: "Node.js Tutorial",
						lessons: [
							"Giới thiệu Node.js",
							"Demo ứng dụng sẽ làm.",
							"Node Package Manager (npm).",
							"Framework Express.js.",
							"Cấu trúc thư mục 1 dự án Node.js, cách setup và chạy server với ES6.",
						],
					},
					{
						title: "Cấu trúc dự án với Node.js",
						lessons: [
							"Giới thiệu mô hình MVC",
							"Giới thiệu routing (Sử dụng params url)",
							"Giới thiệu và khởi tạo Restful API",
							"HTTP Code",
						],
					},
					{
						title: "Node.js MongoDB",
						lessons: [
							"Giới thiệu về database MongoDB",
							"Làm việc với MongoDB (kết nối, cấu hình, thư viện mongoose)",
							"Thiết kế CSDL cho todo app và các use cases",
							"CRUD",
						],
					},
					{
						title: "Thực hành kết hợp Frontend",
						lessons: [
							"Khởi tạo các form frontend",
							"Tìm hiểu cách submit data từ form frontend.",
							"Thao tác đơn giản với server qua API (create, read, update, delete).",
						],
					},
					{
						title: "Authorization và Authenticate api NodeJS",
						lessons: [
							"Authenticate (login, signup) cơ bản.",
							"Authorization (xác thực người dùng) sử dụng cookie, jwt.",
							"Middleware",
							"Giới thiệu Socket.io (nếu các bạn sv muốn làm chat app)",
						],
					},
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

const MENTORS = [
	{
		avatar: "./nguyenthaitiep.jpg",
		name: "Nguyễn Thái Tiệp",
		role: "Software Engineer - Teko Việt Nam",
	},
	{
		avatar: "./phamcongmanhhung.jpg",
		name: "Phạm Công Mạnh Hùng",
		role: "Sinh viên nghiên cứu tại lab Công nghệ Phần mềm",
	},
];

const COUNSELORS = [
	{
		avatar: "./tranvantu.jpg",
		name: "Trần Văn Tú",
		role: "Mentor nodejs 2 mùa 2018, 2019\nSenior Software Engineer",
	},
	{
		avatar: "./tranmanhcuong.jpg",
		name: "Trần Mạnh Cường",
		role: "Giảng viên tại UET\nTham gia UCC 2018, Supporter tech UCC 2019",
	},
];

const CAMPERS2019 = [
	{
		avatar: "./dovansi.png",
		name: "Đỗ Văn Sĩ",
		role: "Backend Developer tại Bizzi Vietnam\nTham gia UCC 2018, Supporter tech UCC 2019",
	},
	{
		avatar: "./ngogianguyen.jpg",
		name: "Ngô Gia Nguyên",
		role: "Software Engineer tại công ty Teko Việt Nam\nTham gia UCC 2018",
	},
];

const TIMELINE_START = [
	{
		title: "Mở đơn đăng kí",
		time: "31/3",
		description:
			"Thời gian mở đơn đăng ký tham gia diễn ra từ ngày 31/03 đến 22:00 ngày 07/04. Đăng ký ngay!",
	},
	{
		title: "Vòng đánh giá năng lực",
		time: "17/4",
		description:
			"Các thí sinh tham gia vòng đơn sẽ làm một bài kiểm tra đầu vào bằng bài thi lập trình trên giấy",
	},
	{
		title: "Vòng tuyển chọn",
		time: "21/4",
		description:
			"Vòng phỏng vấn dành cho các thí sinh vượt qua bài kiểm tra đầu vào.",
	},
];

const TIMELINE_END = [
	{
		title: "Giai đoạn training",
		time: "21/04 - 21/06",
		description:
			"Quá trình này diễn ra trong vòng 2 tháng, để các thí sinh được học hỏi, bổ sung thêm kiến thức dưới sự hướng dẫn, giảng dạy của các mentor tài năng, giàu kinh nghiệm.",
	},
	{
		title: "Cuộc thi Campathon",
		time: "06/2023",
		description:
			"Thí sinh được chia thành các đội. Các đội thi sẽ phải phát triển một sản phẩm trong 2 ngày dựa trên đề tài được ban tổ chức đưa ra và thuyết trình về sản phẩm đó cho ban tổ chức chấm điểm.",
	},
];

const INVESTORS = [
	{
		alt: "Tekko",
		src: "https://uetcodecamp.github.io/images/tekko2.jpg",
	},
	{
		alt: "FooBla",
		src: "https://uetcodecamp.github.io/images/foobla.png",
	},
	{
		alt: "Sun",
		src: "https://uetcodecamp.github.io/images/sun-asterisk.jpg",
	},
];

const SUPPORTERS = [
	{
		alt: "higgsup",
		src: "https://uetcodecamp.github.io/images/higgsup.png",
	},
	{
		alt: "emdi",
		src: "https://uetcodecamp.github.io/images/emddi.png",
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
	MENU_BUTTONS_LIST,
	REGISTER_BUTTON,
	INTRODUCES,
	SUPPORTERS,
	INVESTORS,
	MENTORS,
	COUNSELORS,
	CAMPERS2019,
	BLOGS_LIST,
};
