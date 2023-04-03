import { Typography, Space, Button, Row, Col, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "@/contexts";
import { useContext } from "react";

const btnStyle = {
	display: "flex",
	alignItems: "center",
};

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

const Contact = () => {
	const { headerHeight, viewPort } = useContext(AppContext);
	return (
		<ConfigProvider theme={{ token: { fontSize: "1.25rem" } }}>
			<Row gutter={[0, 16]}>
				<Col
					md={24}
					style={{ ...colAllCenter, height: viewPort.height - headerHeight }}>
					<Row style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
						<Col
							xs={24}
							style={{
								...colAllCenter,
							}}>
							<Typography.Title
								className="center-text"
								level={2}
								style={{ fontSize: "3rem" }}>
								Thông tin liên hệ
							</Typography.Title>
						</Col>
						<Col xs={24} style={colAllCenter}>
							<Row gutter={[64, 64]}>
								<Col xs={24} md={12} style={colAllCenter}>
									<Button
										style={btnStyle}
										icon={
											<FontAwesomeIcon
												icon={faLocationDot}
												style={{ marginRight: "10px" }}
											/>
										}
										type="text">
										<Typography.Text style={{ margin: 0, textAlign: "left" }}>
											Câu lạc bộ thư viện hội sinh viên,
											<br />
											Đại học Công nghệ - ĐHQGHN
										</Typography.Text>
									</Button>
								</Col>
								<Col xs={24} md={12} style={colAllCenter}>
									<Space direction="vertical">
										<Button
											style={btnStyle}
											icon={
												<FontAwesomeIcon
													icon={faEnvelope}
													style={{ marginRight: "10px" }}
												/>
											}
											type="text">
											<Typography.Text>uetcodecamp@gmail.com</Typography.Text>
										</Button>
										<Button
											style={btnStyle}
											icon={
												<FontAwesomeIcon
													icon={faPhone}
													style={{ marginRight: "10px" }}
												/>
											}
											type="text">
											<Typography.Text>
												098 1981 063 - Tiến Đông
											</Typography.Text>
										</Button>
									</Space>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col
					md={24}
					style={{ ...colAllCenter, height: viewPort.height - headerHeight }}
					className="custom-bg_1">
					<Row gutter={[0, 32]}>
						<Col xs={24} style={colAllCenter}>
							<Typography.Title
								className="center-text no-margin-bottom"
								style={{ color: "#d9cfbb", fontSize: "3rem" }}>
								Tham gia UET Code Camp
							</Typography.Title>
						</Col>
						<Col xs={24} style={colAllCenter}>
							<div className="center-text">
								<Typography.Text style={{ color: "#d9cfbb" }}>
									Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phần
									mềm, tại sao không?
								</Typography.Text>
							</div>
						</Col>
						<Col xs={24} style={colAllCenter}>
							<Button
								style={{
									justifyContent: "center",
									fontWeight: "bold",
									color: "#593767",
									padding: "2rem 3rem 4rem",
									fontSize: "2rem",
								}}
								href="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform"
								type="dashed"
								size="large">
								ĐĂNG KÝ NGAY
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</ConfigProvider>
	);
};

export default Contact;
