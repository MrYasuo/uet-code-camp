import { Avatar, Typography, Space, List, Card, Image, Row, Col } from "antd";
import { CAMPERS2019, MENTORS, COUNSELORS } from "@/constants";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;

const MyRow = ({ people }) => {
	return (
		<Row gutter={32} style={{ height: 350 }}>
			{people.map((person, i) => (
				<Col key={i} style={{ display: "flex", height: "100%" }}>
					<Card
						style={{
							width: 280,
							height: 240,
							display: "flex",
							flexDirection: "column",
						}}
						cover={
							<img
								src={person.avatar}
								style={{
									objectFit: "contain",
									height: "100%",
								}}
							/>
						}>
						<Meta
							title={person.name}
							description={person.role}
							avatar={<Avatar src={person.avatar} />}
						/>
					</Card>
				</Col>
			))}
		</Row>
	);
};

const MyList = ({ people }) => {
	return (
		<List
			grid={{
				column: 2,
				gutter: 16,
				xs: 1,
				sm: 1,
			}}
			dataSource={people}
			renderItem={(person, i) => (
				<List.Item
					data-aos="fade-up"
					style={{
						display: "flex",
						justifyContent: i % 2 == 0 ? "flex-end" : "flex-start",
					}}>
					<Card
						style={{ backgroundColor: "white", width: 360, height: 340 }}
						bordered={false}
						title={
							<Avatar
								src={person.avatar}
								size={120}
								style={{ margin: "20px" }}
							/>
						}>
						<Space
							direction="vertical"
							align="center"
							size="small"
							style={{ justifyContent: "center", width: "100%" }}>
							<Typography.Title
								level={4}
								className="center-text"
								style={{ marginBottom: 0, color: "black" }}>
								{person.name}
							</Typography.Title>
							{person.role &&
								person.role.split("\n").map((_role, i) => (
									<div key={i} style={{ textAlign: "center" }}>
										<Typography.Text style={{ color: "black" }}>
											{_role}
										</Typography.Text>
									</div>
								))}
						</Space>
					</Card>
				</List.Item>
			)}></List>
	);
};

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<Space
			direction="vertical"
			style={{ width: "100%", paddingLeft: "2rem", paddingRight: "2rem" }}>
			<Typography.Title level={3} className="center-text">
				Mentor
			</Typography.Title>
			<MyList people={MENTORS} />
			<Typography.Title level={3} className="center-text">
				Cố vấn
			</Typography.Title>
			<MyList people={COUNSELORS} />
			<Typography.Title level={3} className="center-text">
				Camper 2019
			</Typography.Title>
			<MyList people={CAMPERS2019} />
		</Space>
	);
};

export default About;
