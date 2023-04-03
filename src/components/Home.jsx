import { Typography, Row, Col, Button, Space, Divider, Image } from "antd";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import { INTRODUCES } from "@/constants";
import { useContext } from "react";
import { AppContext } from "@/contexts";
import { SUPPORTERS, INVESTORS } from "@/constants";

const Home = () => {
	const { isDesktop, headerHeight, viewPort } = useContext(AppContext);
	return (
		<Row gutter={[16, 64]} style={{ height: "100%" }}>
			<Col
				style={{
					height: viewPort.height - headerHeight,
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}>
				<Typography.Title style={{ color: "#593767" }}>
					<TypeAnimation
						sequence={["Hello,", 500, "Hello, World!", 1000, "", 500]}
						repeat={Infinity}
						cursor={false}
						className="type"></TypeAnimation>
				</Typography.Title>
				<Typography.Text
					style={{ fontSize: 24 }}
					className="center-text no-margin">
					Chào mừng bạn tới UET Codecamp, mình làm quen nhé? :D
				</Typography.Text>
				<Divider />
				<Space>
					<Link to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform">
						<Button type="primary" size="large">
							Đăng ký ngay
						</Button>
					</Link>
					<Link to="/roadmap">
						<Button style={{ backgroundColor: "#c7b795" }} size="large">
							Xem lộ trình
						</Button>
					</Link>
				</Space>
			</Col>
			<Col xs={24} className="no-padding">
				<div
					style={{
						display: "grid",
						gridTemplateColumns: isDesktop ? "auto auto auto" : "auto",
						gap: "2rem 5rem",
						padding: "5rem 10rem",
						backgroundColor: "#C7B795",
						fontSize: 24,
					}}>
					{INTRODUCES.map((item, index) => (
						<div key={index} style={{ display: "flex", alignItems: "center" }}>
							<div
								style={{
									width: 32,
									display: "flex",
									justifyContent: "center",
									marginRight: "2rem",
								}}>
								{item["icon"]}
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}>
								<Typography.Title level={4} style={{ fontSize: "1rem" }}>
									{item["title"]}
								</Typography.Title>
								<Typography.Paragraph
									style={{ textAlign: "justify", fontSize: "1rem" }}>
									{item["description"]}
								</Typography.Paragraph>
							</div>
						</div>
					))}
				</div>
			</Col>
			<Col xs={24}>
				<Row style={{ padding: "5rem" }}>
					<Col xs={24}>
						<Typography.Title className="center-text">
							UET Code Camp là gì?
						</Typography.Title>
						<Typography.Paragraph className="text-justify">
							UET Code Camp là một sự kiện dành cho các sinh viên công nghệ đam
							mê, yêu thích lập trình, được hướng tới tổ chức thường niên. Mỗi
							mùa tổ chức, chương trình được chia ra với nhiều đơn vị nhỏ hơn
							tương ứng với một đề tài và mọi người có thể tham gia đề tài mình
							yêu thích, mỗi đơn vị nhỏ như vậy được gọi là camp.
						</Typography.Paragraph>
						<Typography.Paragraph className="text-justify">
							Mỗi camp có thời gian kéo dài 2 tháng. Khi tham gia một camp, các
							bạn sinh viên sẽ có cơ hội tìm hiểu về một đề tài công nghệ và
							chính mình được trải nghiệm công nghệ đó thông qua các sự kiện nhỏ
							hơn được tổ chức:
						</Typography.Paragraph>
						<Typography.Paragraph className="text-justify">
							<ul>
								<li>Tự học và đào sâu những vấn đề chính của công nghệ đó.</li>
								<li>
									Làm những dự án có tính ứng dụng trong đời sống áp dụng công
									nghệ đã học.
								</li>
								<li>
									Tham gia những sự kiện nhỏ được tổ chức bởi camp: mini
									hackathon, những cuộc thi đấu mang tính đồng đội và đối kháng,
									… mục đích chính để đặt các bạn vào những thử thách, trong đó
									các bạn sẽ phải nỗ lực hết mình để mang lại kết quả cho mình
									và đồng đội.
								</li>
							</ul>
						</Typography.Paragraph>
						<Typography.Paragraph className="text-justify">
							Đồng hành với các bạn trong suốt camp là đội ngũ những người hướng
							dẫn (mentor) và trợ giảng (coach), sẽ hướng dẫn và giám sát các
							bạn tìm hiểu công nghệ. Đội ngũ những người hướng dẫn và trợ giảng
							là những người có kinh nghiệm trong lĩnh vực công nghệ của họ và
							có khát khao truyền lửa, truyền đạt kiến thức của mình cho thế hệ
							trẻ hơn.
						</Typography.Paragraph>
						<Typography.Paragraph className="text-justify">
							Sau khi tham gia một camp, các bạn sinh viên sẽ có cái nhìn tổng
							quát về một đề tài công nghệ và nâng cao cho mình những kĩ năng
							mềm, là những hành trang thiết yếu cho các bạn trên con đường sự
							nghiệp sau này.
						</Typography.Paragraph>
					</Col>
				</Row>
			</Col>
			<Col xs={24}>
				<Row
					gutter={[0, 64]}
					style={{ padding: "5rem", backgroundColor: "#C7B795" }}>
					<Col xs={24}>
						<Typography.Title className="center-text">
							Nhà tài trợ vàng
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<Row gutter={16}>
							{INVESTORS.map((investor, i) => (
								<Col key={i}>
									<Image
										src={investor["src"]}
										alt={investor["alt"]}
										height={80}
										preview={false}
										style={{ mixBlendMode: "color-burn" }}
									/>
								</Col>
							))}
						</Row>
					</Col>
					<Col xs={24}>
						<Typography.Title className="center-text">
							Đơn vị đồng hành
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<Row gutter={16}>
							{SUPPORTERS.map((supporter, i) => (
								<Col key={i}>
									<Image
										src={supporter["src"]}
										alt={supporter["alt"]}
										height={40}
										preview={false}
										style={{ mixBlendMode: "color-burn" }}
									/>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Col>
			<Col xs={24} className="no-padding">
				<Row gutter={[0, 24]} style={{ padding: "5rem", marginBottom: 64 }}>
					<Col xs={24}>
						<Typography.Title className="center-text">
							Tham gia UET Code Camp
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<div className="center-text">
							<Typography.Text style={{ fontSize: 18 }}>
								Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phẩn mềm,
								tại sao không?
							</Typography.Text>
						</div>
					</Col>
					<Col xs={24}>
						<Link
							to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform"
							style={{ display: "flex", justifyContent: "center" }}>
							<Button type="primary" size="large">
								ĐĂNG KÝ NGAY
							</Button>
						</Link>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Home;
