import { useContext, useState } from "react";
import {
	Menu,
	Typography,
	Space,
	List,
	Collapse,
	Button,
	Row,
	Col,
	Divider,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;

import { COURSES_MENU_LIST, COURSES_LIST } from "@/constants";
import { AppContext } from "@/contexts";
import "./Course.css";

const colAllCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const colAlignCenter = {
	display: "flex",
	alignItems: "center",
};

const colJustifyCenter = {
	display: "flex",
	justifyContent: "center",
};

const Course = ({ course }) => {
	return (
		<Row gutter={[0, 5]} style={{ paddingTop: "1rem" }}>
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
			<Col xs={24}>
				<Typography.Text>
					<b>Mức độ: </b>
					{COURSES_LIST[course]["level"]}
				</Typography.Text>
			</Col>
			<Col xs={24}>
				<Typography.Paragraph style={{ textAlign: "justify" }}>
					<b>Mô tả: </b>
					{COURSES_LIST[course]["description"]}
				</Typography.Paragraph>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Người hướng dẫn
				</Typography.Title>
			</Col>
			{COURSES_LIST[course]["teachers"].map((teacher, i) => (
				<Row key={i}>
					<Col xs={24}>
						<Typography.Text>
							<b>Họ tên: </b>
							{teacher["name"]}
						</Typography.Text>
					</Col>
					{teacher["experience"] && (
						<Col xs={24}>
							<Typography.Text>
								<b>Kinh nghiệm: </b>
								{teacher["experience"]}
							</Typography.Text>
						</Col>
					)}
					{teacher["business"] && (
						<Col xs={24}>
							<Typography.Text>
								<b>Công tác: </b>
								{teacher["business"]}
							</Typography.Text>
						</Col>
					)}
					{teacher["prizes"] && (
						<Col xs={24}>
							<Typography.Text>
								<b>Thành tích nổi bật: </b>
							</Typography.Text>
							<ul
								style={{
									color: "white",
									marginLeft: "2rem",
									lineHeight: "1.25rem",
									marginTop: "1rem",
								}}>
								{teacher["prizes"].map((prize, i) => (
									<li key={i}>{prize}</li>
								))}
							</ul>
						</Col>
					)}
					<Col xs={24} style={colAllCenter}>
						<Typography.Paragraph style={{ textAlign: "justify" }}>
							<b>Giới thiệu: </b>
							{teacher["description"]}
						</Typography.Paragraph>
					</Col>
				</Row>
			))}
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Chương trình học
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<List
					dataSource={COURSES_LIST[course]["lectures"]}
					renderItem={(lecture) => (
						<Collapse ghost>
							<Panel
								header={
									<Typography.Title level={5} className="no-margin-bottom">
										{lecture["title"]}
									</Typography.Title>
								}>
								<ul style={{ listStyleType: "disc", marginLeft: "2rem" }}>
									{lecture["lessons"].map((lesson, i) => (
										<li key={i}>{lesson}</li>
									))}
								</ul>
							</Panel>
						</Collapse>
					)}
				/>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Mục tiêu
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<ul style={{ color: "white", marginLeft: "2rem" }}>
					{COURSES_LIST[course]["goals"].map((goal, i) => (
						<li key={i}>{goal}</li>
					))}
				</ul>
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
