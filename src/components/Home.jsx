import {
	Typography,
	Row,
	Col,
	Button,
	Space,
	Divider,
	Image,
	List,
	Steps,
	ConfigProvider,
} from "antd";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import { INTRODUCES, TIMELINE_END, TIMELINE_START } from "@/constants";
import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts";
import { SUPPORTERS, INVESTORS } from "@/constants";
import Aos from "aos";
import "aos/dist/aos.css";

const SupporterAndInvestor = () => (
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
);

const Home = () => {
	const { isDesktop, headerHeight, viewPort } = useContext(AppContext);
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<Row gutter={[16, 64]} style={{ height: "100%" }}>
			<Col
				style={{
					height: viewPort.height - headerHeight,
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					paddingRight: "2rem",
					paddingLeft: "2rem",
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
			<Col xs={24} style={{ backgroundColor: "#C7B795" }}>
				<Row style={{ padding: "5rem" }}>
					<Col xs={24}>
						<Row data-aos="fade-left">
							<Col xs={24}>
								<Typography.Title className="center-text">
									UCC-Kết nối đam mê, cùng phê với code
								</Typography.Title>
							</Col>
							<Col xs={24}>
								<Row gutter={[64, 24]} style={{ padding: "3rem" }}>
									<Col xs={24} lg={12}>
										<Image src="/LOGOU.jpg" preview={false} />
									</Col>
									<Col
										xs={24}
										lg={12}
										style={{ display: "flex", alignItems: "center" }}>
										<Row>
											<Typography.Paragraph className="text-justify">
												Uet Code Camp là một sân chơi gắn kết cộng đồng các sinh
												viên Công nghệ có niềm đam mê, yêu thích lập trình. Với
												slogan “Kết nối đam mê, cùng phê với Code” Uet Code Camp
												luôn mong muốn nuôi dưỡng niềm đam mê lập trình trong
												các bạn sinh viên, luôn giúp đỡ nhau. cùng nhau tiến bộ.
											</Typography.Paragraph>
											<Link to="/blog/1">
												<Button type="primary" size="large">
													Xem thêm
												</Button>
											</Link>
										</Row>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row data-aos="fade-right">
							<Col xs={24}>
								<Typography.Title className="center-text">
									Đơn vị tổ chức
								</Typography.Title>
							</Col>
							<Col xs={24}>
								<Row gutter={[64, 24]} style={{ padding: "3rem" }}>
									<Col
										xs={24}
										lg={12}
										style={{ display: "flex", alignItems: "center" }}>
										<Row>
											<Typography.Paragraph className="text-justify">
												CLB TVHSV - Vinh dự khi được là đơn vị tổ chức sự kiện
												Uet Code Camp, tập thể Thư viện luôn cố gắng, nỗ lực hết
												mình để đưa sân chơi bổ ích cho các bạn sinh viên Công
												nghệ ngày một chất lượng, chuyên nghiệp hơn nữa.Trải qua
												16 năm hoạt động, Thư viện Hội Sinh viên luôn hoàn thành
												tốt sứ mệnh và nhiệm vụ của mình, ngày càng phát triển
												để tự hào là một trong những câu lạc bộ hàng đầu UET.
											</Typography.Paragraph>
											<Link to="/blog/2">
												<Button type="primary" size="large">
													Xem thêm
												</Button>
											</Link>
										</Row>
									</Col>
									<Col xs={24} lg={12}>
										<Image src="/clb.png" preview={false} />
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col xs={24} className="no-padding">
				<Row>
					<Col xs={24} data-aos="fade-up">
						<Typography.Title className="center-text">
							6 lý do không nên bỏ lỡ UCC
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: isDesktop ? "auto auto auto" : "auto",
								gap: "2rem 5rem",
								paddingRight: "7rem",
								paddingLeft: "7rem",
								paddingBottom: "5rem",
								fontSize: 24,
							}}>
							{INTRODUCES.map((item, index) => (
								<div
									key={index}
									data-aos="fade-up"
									style={{ display: "flex", alignItems: "center" }}>
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
				</Row>
			</Col>
			<Col
				xs={24}
				style={{
					backgroundColor: "#C7B795",
					paddingTop: "5rem",
					paddingLeft: "2rem",
					paddingRight: "2rem",
					paddingBottom: "2rem",
				}}>
				<Row data-aos="fade-up">
					<Col xs={24}>
						<Typography.Title className="center-text">
							Timeline
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<ConfigProvider
							theme={{
								token: { fontSizeLG: 24 },
							}}>
							<Steps
								style={{
									paddingTop: "2rem",
									paddingBottom: "5rem",
									paddingLeft: "5rem",
									paddingRight: "5rem",
									backgroundColor: "#C7B795",
								}}
								items={[...TIMELINE_START, ...TIMELINE_END].map((timeline) => ({
									title: timeline["time"],
									description: timeline["title"],
								}))}
							/>
						</ConfigProvider>
					</Col>
				</Row>
			</Col>
			<Col xs={24} className="no-padding">
				<Row
					gutter={[0, 24]}
					style={{
						padding: "5rem",
						paddingTop: 0,
					}}>
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
