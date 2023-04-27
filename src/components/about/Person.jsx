import { Row, Col, Typography, Image } from "antd";
import { useParams } from "react-router-dom";
import { COUNSELORS, CAMPERS2019, MENTORS } from "@/constants";

const colAllCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const people = [...COUNSELORS, ...CAMPERS2019, ...MENTORS];

const Person = () => {
	const { id } = useParams();
	const person = people.find((person) => person["key"] === id);
	return (
		<Row
			gutter={[24, 24]}
			style={{ padding: "2rem", marginLeft: 0, marginRight: 0 }}>
			<Col xs={24} style={colAllCenter}>
				<Image src={person["avatar"]} preview={false} width={400} />
			</Col>
			<Col xs={24}>
				<Typography.Text>
					<b>Họ tên: </b>
					{person["name"]}
				</Typography.Text>
			</Col>
			{person["experience"] && (
				<Col xs={24}>
					<Typography.Text>
						<b>Kinh nghiệm: </b>
						{person["experience"]}
					</Typography.Text>
				</Col>
			)}
			{person["business"] && (
				<Col xs={24}>
					<Typography.Text>
						<b>Công tác: </b>
						{person["business"]}
					</Typography.Text>
				</Col>
			)}
			{person["prizes"] && (
				<Col xs={24}>
					<Typography.Text>
						<b>Thành tích nổi bật: </b>
					</Typography.Text>
					<ul>
						{person["prizes"].map((prize, i) => (
							<li
								key={i}
								style={{
									color: "white",
									marginTop: "1rem",
									lineHeight: "1.25rem",
								}}>
								{prize}
							</li>
						))}
					</ul>
				</Col>
			)}
			{person["description"] && (
				<Col xs={24} style={colAllCenter}>
					<Typography.Paragraph
						style={{ textAlign: "justify", lineHeight: "2rem" }}>
						<b>Giới thiệu: </b>
						{person["description"]}
					</Typography.Paragraph>
				</Col>
			)}
		</Row>
	);
};

export default Person;
