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
	const { isDesktop, isMobile, isTablet, headerHeight, viewPort } =
		useContext(AppContext);
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<Row
			gutter={[16, isDesktop ? 64 : 24]}
			style={{ height: "100%", width: "100%", marginRight: 0, marginLeft: 0 }}>
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
				<Typography.Title style={{ color: "white" }}>
					<TypeAnimation
						sequence={["Hello,", 500, "Hello, World!", 1000, "", 500]}
						repeat={Infinity}
						cursor={false}
						className="type"></TypeAnimation>
				</Typography.Title>
				<Typography.Text
					style={{ fontSize: 24, opacity: 0.7, color: "white" }}
					className="center-text no-margin">
					Chào mừng bạn tới UET Codecamp, mình làm quen nhé? :D
				</Typography.Text>
				<Divider />
				<Row gutter={16}>
					<Col>
						<div className="button__container">
							<Link to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform">
								<Button type="primary" size="large">
									Đăng ký ngay
								</Button>
							</Link>
						</div>
					</Col>
					<Col>
						<div className="button__container--2">
							<Link to="/roadmap">
								<Button size="large" type="primary">
									Xem lộ trinh
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Col>
			<Col xs={24} style={{ backgroundColor: "#382a5e" }}>
				<Row style={{ padding: isDesktop ? "5rem" : "2rem" }}>
					<Col xs={24}>
						<Row data-aos="fade-left" style={{ marginBottom: "1rem" }}>
							<Col xs={24}>
								<Typography.Title
									className="center-text"
									level={isDesktop ? 1 : 2}>
									UCC - Kết nối đam mê, cùng phê với code
								</Typography.Title>
							</Col>
							<Col xs={24}>
								<Row
									gutter={[64, 24]}
									style={{
										padding: isDesktop ? "3rem" : 0,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Col
										xs={24}
										sm={12}
										style={{ display: "flex", justifyContent: "center" }}>
										<img src="/LOGOU.jpg" style={{ width: "80%" }} />
									</Col>
									<Col
										xs={24}
										lg={12}
										style={{ display: "flex", alignItems: "center" }}>
										<Row>
											<Typography.Paragraph
												className="text-justify"
												style={{ opacity: 0.7, fontSize: "1.25rem" }}>
												Uet Code Camp là một sân chơi gắn kết cộng đồng các sinh
												viên Công nghệ có niềm đam mê, yêu thích lập trình. Với
												slogan “Kết nối đam mê, cùng phê với Code” Uet Code Camp
												luôn mong muốn nuôi dưỡng niềm đam mê lập trình trong
												các bạn sinh viên, luôn giúp đỡ nhau. cùng nhau tiến bộ.
											</Typography.Paragraph>
											<div className="button__container">
												<Link to="/blog/1">
													<Button type="primary" size="large">
														Xem thêm
													</Button>
												</Link>
											</div>
										</Row>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row data-aos="fade-right">
							<Col xs={24}>
								<Typography.Title
									level={isDesktop ? 1 : 2}
									className="center-text">
									Đơn vị tổ chức
								</Typography.Title>
							</Col>
							<Col xs={24}>
								<Row
									gutter={[64, 24]}
									style={{
										padding: isDesktop ? "3rem" : 0,
										flexDirection: !isDesktop ? "column-reverse" : "",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Col
										xs={24}
										lg={12}
										style={{ display: "flex", alignItems: "center" }}>
										<Row>
											<Typography.Paragraph
												className="text-justify"
												style={{ opacity: 0.7, fontSize: "1.25rem" }}>
												CLB TVHSV - Vinh dự khi được là đơn vị tổ chức sự kiện
												UET Code Camp, tập thể Thư viện luôn cố gắng, nỗ lực hết
												mình để đưa sân chơi bổ ích cho các bạn sinh viên Công
												nghệ ngày một chất lượng, chuyên nghiệp hơn nữa. Trải
												qua 16 năm hoạt động, Thư viện Hội Sinh viên luôn hoàn
												thành tốt sứ mệnh và nhiệm vụ của mình, ngày càng phát
												triển để tự hào là một trong những câu lạc bộ hàng đầu
												UET.
											</Typography.Paragraph>
											<div className="button__container">
												<Link to="/blog/2">
													<Button type="primary" size="large">
														Xem thêm
													</Button>
												</Link>
											</div>
										</Row>
									</Col>
									<Col
										xs={24}
										sm={12}
										style={{ display: "flex", justifyContent: "center" }}>
										<img src="/anh2_blog2.png" style={{ width: "80%" }} />
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col xs={24} className="no-padding">
				<Row style={{ padding: isDesktop ? 0 : "1rem" }}>
					<Col
						xs={24}
						data-aos="fade-up"
						style={{ padding: isDesktop ? 0 : "1rem" }}>
						<Typography.Title level={isDesktop ? 1 : 2} className="center-text">
							6 lý do không nên bỏ lỡ UCC
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: isDesktop ? "auto auto auto" : "auto",
								gap: "2rem 5rem",
								paddingRight: isDesktop ? "7rem" : "2rem",
								paddingLeft: isDesktop ? "7rem" : "2rem",
								paddingBottom: isDesktop ? "5rem" : 0,
								fontSize: isDesktop ? 24 : "1rem",
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
											style={{
												textAlign: "justify",
												fontSize: "1rem",
												opacity: 0.7,
											}}>
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
					backgroundColor: "#382a5e",
					paddingTop: isDesktop ? "5rem" : 0,
					paddingLeft: isDesktop ? "2rem" : 0,
					paddingRight: isDesktop ? "2rem" : 0,
					paddingBottom: isDesktop ? "2rem" : 0,
				}}>
				<Row data-aos="fade-up">
					<Col xs={24} style={{ paddingTop: isMobile ? "2rem" : 0 }}>
						<Typography.Title className="center-text">
							Timeline
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<ConfigProvider
							theme={{
								token: {
									fontSizeLG: 24,
									colorPrimary: "#845ae2",
									colorTextDescription: "white",
									colorFillContent: "#251b3d",
									colorTextLabel: "grey",
								},
							}}>
							<Steps
								style={{
									paddingTop: isDesktop ? "2rem" : 0,
									paddingBottom: isDesktop ? "5rem" : "2rem",
									paddingLeft: "5rem",
									paddingRight: "5rem",
								}}
								items={[...TIMELINE_START, ...TIMELINE_END].map((timeline) => ({
									title: (
										<Typography.Title
											level={4}
											style={{ whiteSpace: "normal" }}>
											{timeline["time"]}
										</Typography.Title>
									),
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
						<Typography.Title className="center-text" level={isDesktop ? 1 : 2}>
							Tham gia UET Code Camp
						</Typography.Title>
					</Col>
					<Col xs={24}>
						<div className="center-text">
							<Typography.Text style={{ fontSize: isDesktop ? 18 : "1rem" }}>
								Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phẩn mềm,
								tại sao không?
							</Typography.Text>
						</div>
					</Col>
					<Col xs={24}>
						<div className="button__container">
							<Link
								to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform"
								style={{ display: "flex", justifyContent: "center" }}>
								<Button type="primary" size="large">
									ĐĂNG KÝ NGAY
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Home;
