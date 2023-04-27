import { useContext, useState, useRef } from "react";
import {
	Menu,
	Typography,
	List,
	Collapse,
	Row,
	Col,
	Carousel,
	Table,
} from "antd";
const { Panel } = Collapse;

import { COURSES_MENU_LIST, COURSES_LIST } from "@/constants";
import { AppContext } from "@/contexts";
import "./Course.css";

const colAllCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const _Lessons = ({ lessons }) => {
	if (!lessons) return;
	if (lessons.length === 0) return;
	if (typeof lessons[0] === "string")
		return (
			<ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
				{lessons.map((lesson, i) => (
					<li key={i}>{lesson}</li>
				))}
			</ul>
		);
	return (
		<List
			dataSource={lessons}
			renderItem={(lesson) => {
				return (
					<Collapse ghost>
						<Panel
							header={
								<Typography.Title level={5} className="no-margin-bottom">
									{lesson["title"]}
								</Typography.Title>
							}>
							<_Lessons lessons={lesson["lessons"]} />
						</Panel>
					</Collapse>
				);
			}}
		/>
	);
};

function unpack(obj, ...keys) {
	let titles = [];
	function traverse(detail, level, data, isObj = true) {
		data["key"] = titles.length;
		if (isObj) {
			if (detail.day) data["day"] = detail.day;
			data[keys[level]] = detail["title"];
			if (!detail.lessons) titles.push(data);
		} else {
			data[keys[level]] = detail;
			titles.push(data);
		}
		if (detail.lessons && detail.lessons.length > 0) {
			detail.lessons.forEach((lesson) => {
				const newData = { ...data };
				if (typeof lesson === "string")
					traverse(lesson, level + 1, newData, false);
				else traverse(lesson, level + 1, newData);
			});
		}
	}
	traverse(obj, 0, {});
	return titles;
}

const Lessons = ({ data, columns }) => {
	return (
		<Table columns={columns} dataSource={data} pagination={false} bordered />
	);
};

const Course = ({ course }) => {
	const prevDay = useRef(0);
	const prevPart = useRef(null);
	const prevContent = useRef(null);

	const columns = [
		{
			title: "Buổi",
			dataIndex: "day",
			onCell: (record) => {
				if (record["day"] !== prevDay.current) {
					prevDay.current = record["day"];
					return {
						rowSpan: data.filter((item) => item["day"] === record["day"])
							.length,
					};
				}
				prevDay.current = record["day"];
				return {
					rowSpan: 0,
				};
			},
		},
		{
			title: "Phần",
			dataIndex: "part",
			onCell: (record) => {
				if (record["part"] !== prevPart.current) {
					prevPart.current = record["part"];
					return {
						rowSpan: data.filter((item) => item["part"] === record["part"])
							.length,
					};
				}
				prevPart.current = record["part"];
				return {
					rowSpan: 0,
				};
			},
		},
		{
			title: "Nội dung",
			dataIndex: "content",
			onCell: (record) => {
				if (record["content"] !== prevContent.current) {
					prevContent.current = record["content"];
					return {
						rowSpan: data.filter(
							(item) => item["content"] === record["content"]
						).length,
					};
				}
				prevContent.current = record["content"];
				return {
					rowSpan: 0,
				};
			},
		},
		{
			title: "Chi tiết",
			dataIndex: "detail",
		},
	];

	const data = unpack(
		COURSES_LIST["nodejs"],
		...columns.map((column) => column.dataIndex)
	);

	const { isMobile } = useContext(AppContext);

	return (
		<Row gutter={[0, 16]} style={{ paddingTop: "1rem" }}>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={3} className="no-margin-bottom">
					{COURSES_LIST[course]["title"]}
				</Typography.Title>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Text style={{ fontStyle: "italic" }}>
					{COURSES_LIST[course]["short"]}
				</Typography.Text>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={3}>Chương trình học</Typography.Title>
			</Col>
			<Col xs={24}>
				{isMobile ? (
					<_Lessons lessons={COURSES_LIST[course]["lessons"]} />
				) : (
					<Lessons data={data} columns={columns} />
				)}
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Mục tiêu
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<Carousel
					autoplay
					className="carousel__container"
					style={{
						height: "160px",
						color: "#fff",
						textAlign: "center",
						border: "1px solid white",
						borderStyle: "dashed",
						borderRadius: "1rem",
						display: "flex",
						alignItems: "center",
					}}>
					{COURSES_LIST[course]["goals"].map((goal, i) => (
						<div key={i}>
							<h3 style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
								{goal}
							</h3>
						</div>
					))}
				</Carousel>
			</Col>
		</Row>
	);
};

const CoursesMenu = () => {
	const [course, setCourse] = useState("nodejs");
	const { isDesktop } = useContext(AppContext);
	return (
		<Row
			style={{
				paddingLeft: isDesktop ? "5rem" : "2rem",
				paddingRight: isDesktop ? "5rem" : "2rem",
				paddingBottom: "2rem",
			}}>
			<Col xs={24}>
				<div className="courses-menu__container">
					<Menu
						onClick={(e) => setCourse(e.key)}
						items={COURSES_MENU_LIST.map((course) => ({
							label: (
								<Typography.Title level={5}>{course["label"]}</Typography.Title>
							),
							key: course["key"],
						}))}
						selectedKeys={[course]}
						mode="horizontal"
						className="custom-bg"
						style={{
							backgroundColor: "#261c3d",
							borderBottom: "none",
						}}
					/>
				</div>
			</Col>
			<Col xs={24}>
				<div className="courses__container">
					<Course course={course} />
				</div>
			</Col>
		</Row>
	);
};

export default CoursesMenu;
