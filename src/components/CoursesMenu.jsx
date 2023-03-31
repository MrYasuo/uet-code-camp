import { useState } from "react";
import { Menu, Typography, Space, List, Collapse, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;

import { COURSES_MENU_LIST, COURSES_LIST } from "@/constants";

const Course = ({ course }) => {
	return (
		<Space direction="vertical">
			<Typography.Title level={5} style={{ width: "100%" }}>
				{COURSES_LIST[course]["title"]}
			</Typography.Title>
			<Typography.Text style={{ fontStyle: "italic" }}>
				{COURSES_LIST[course]["short"]}
			</Typography.Text>
			<Typography.Text>
				<b>Mức độ: </b>
				{COURSES_LIST[course]["level"]}
			</Typography.Text>
			<Typography.Paragraph>
				<b>Mô tả: </b>
				{COURSES_LIST[course]["description"]}
			</Typography.Paragraph>
			<Typography.Title level={5}>Người hướng dẫn</Typography.Title>
			<Typography.Text>
				<b>Họ tên: </b>
				{COURSES_LIST[course]["teacher"]["name"]}
			</Typography.Text>
			{COURSES_LIST[course]["teacher"]["experience"] && (
				<Typography.Text>
					<b>Kinh nghiệm: </b>
					{COURSES_LIST[course]["teacher"]["experience"]}
				</Typography.Text>
			)}
			<Typography.Text>
				<b>Công tác: </b>
				{COURSES_LIST[course]["teacher"]["business"]}
			</Typography.Text>
			<Typography.Paragraph>
				<b>Giới thiệu: </b>
				{COURSES_LIST[course]["teacher"]["description"]}
			</Typography.Paragraph>
			<Typography.Title level={5}>Chương trình học</Typography.Title>
			<List
				dataSource={COURSES_LIST[course]["lectures"]}
				renderItem={(lecture) => (
					<Collapse ghost>
						<Panel
							header={
								<Typography.Title level={5}>
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
			<Typography.Title level={5}>Mục tiêu</Typography.Title>
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
		</Space>
	);
};

const CoursesMenu = () => {
	const [course, setCourse] = useState("java");
	return (
		<Space direction="vertical">
			<Menu
				onClick={(e) => setCourse(e.key)}
				items={COURSES_MENU_LIST}
				selectedKeys={[course]}
				mode="horizontal"
			/>
			<Course course={course} />
		</Space>
	);
};

export default CoursesMenu;
