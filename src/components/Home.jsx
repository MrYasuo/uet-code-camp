import { Typography, Row, Col, Space } from "antd";
import { TypeAnimation } from "react-type-animation";

const colStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const Home = () => {
	return (
		<Row gutter={[16, 16]} style={{ height: "100%" }}>
			<Col xs={24} style={colStyle}>
				<Row>
					<Col xs={24} style={colStyle}>
						<Typography.Title level={1}>
							<TypeAnimation
								sequence={["Hello,", 500, "Hello, World!", 1000, "", 500]}
								repeat={Infinity}
								cursor={false}
								className="type"></TypeAnimation>
						</Typography.Title>
					</Col>
					<Col xs={24} style={colStyle}>
						<Typography.Title level={2} className="center-text">
							Chào mừng bạn tới UET Codecamp, mình làm quen nhé? :D
						</Typography.Title>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Home;
