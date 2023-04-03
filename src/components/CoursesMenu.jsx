import { useState } from "react";
import {
	Menu,
	Typography,
	Space,
	List,
	Collapse,
	Button,
	Row,
	Col,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;

import { COURSES_MENU_LIST, COURSES_LIST } from "@/constants";

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
		<Row gutter={[0, 5]} style={{ padding: "5rem" }}>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
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
				<Typography.Paragraph>
					<b>Mô tả: </b>
					{COURSES_LIST[course]["description"]}
				</Typography.Paragraph>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Người hướng dẫn
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<Typography.Text>
					<b>Họ tên: </b>
					{COURSES_LIST[course]["teacher"]["name"]}
				</Typography.Text>
			</Col>
			{COURSES_LIST[course]["teacher"]["experience"] && (
				<Col xs={24}>
					<Typography.Text>
						<b>Kinh nghiệm: </b>
						{COURSES_LIST[course]["teacher"]["experience"]}
					</Typography.Text>
				</Col>
			)}
			<Col xs={24}>
				<Typography.Text>
					<b>Công tác: </b>
					{COURSES_LIST[course]["teacher"]["business"]}
				</Typography.Text>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Paragraph>
					<b>Giới thiệu: </b>
					{COURSES_LIST[course]["teacher"]["description"]}
				</Typography.Paragraph>
			</Col>
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
								<List
									dataSource={lecture["lessons"]}
									size="small"
									renderItem={(lesson) => (
										<List.Item style={{ borderBlockEnd: "none" }}>
											<Button
												type="text"
												style={{
													display: "flex",
													alignItems: "center",
												}}
												icon={
													<FontAwesomeIcon
														icon={faCircle}
														style={{
															margin: "0px 5px",
															fontSize: "0.5em",
														}}
													/>
												}>
												{lesson}
											</Button>
										</List.Item>
									)}
								/>
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
				<List
					dataSource={COURSES_LIST[course]["goals"]}
					size="small"
					renderItem={(goal) => (
						<List.Item style={{ borderBlockEnd: "none" }}>
							<Button
								type="text"
								style={{
									display: "flex",
									alignItems: "center",
								}}
								icon={
									<FontAwesomeIcon
										icon={faCircle}
										style={{ margin: "0px 5px", fontSize: "0.5em" }}
									/>
								}>
								{goal}
							</Button>
						</List.Item>
					)}
				/>
			</Col>
		</Row>
	);
};

const CoursesMenu = () => {
	const [course, setCourse] = useState("nodejs");
	return (
		<Space direction="vertical">
			<Menu
				onClick={(e) => setCourse(e.key)}
				items={COURSES_MENU_LIST}
				selectedKeys={[course]}
				mode="horizontal"
				className="custom-bg"
				style={{ padding: "0 5rem" }}
			/>
			<Course course={course} />
		</Space>
	);
};

export default CoursesMenu;
