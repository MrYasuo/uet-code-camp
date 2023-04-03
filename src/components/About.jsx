import { Avatar, Typography, Space, List, Card, Image, Row, Col } from "antd";
import { CAMPERS2019, MENTORS, COUNSELORS } from "@/constants";

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
				gutter: 16,
				xs: 1,
			}}
			dataSource={people}
			renderItem={(person) => (
				<List.Item>
					<Card
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
							style={{ justifyContent: "center" }}>
							<Typography.Title level={4}>{person.name}</Typography.Title>
							{person.role &&
								person.role
									.split("\n")
									.map((_role, i) => (
										<Typography.Text key={i}>{_role}</Typography.Text>
									))}
						</Space>
					</Card>
				</List.Item>
			)}></List>
	);
};

const About = () => {
	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			{/* <Typography.Title level={3} className="center-text">
				Khách mời danh dự
			</Typography.Title>
			<MyList people={GUESTS_OF_HONOR} />
			<Typography.Title level={3} className="center-text">
				Đội ngũ truyền lửa
			</Typography.Title>
			<MyList people={FIRE_TEAMS} />
			<Typography.Title level={3} className="center-text">
				Đội ngũ nhiệt huyết
			</Typography.Title>
			<MyList people={ENTHUSIASTIC_TEAMS} />
			<Typography.Title level={3} className="center-text">
				Awesome Camper
			</Typography.Title>
			<MyList people={AWESOME_CAMPERS} /> */}
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
