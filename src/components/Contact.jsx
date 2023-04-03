import { Typography, Space, Button, Row, Col, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
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

const CustomBtnWithIcon = ({ title, icon, href = null }) => (
	<Button
		style={{ ...btnStyle, padding: "1rem", height: "fit-content" }}
		href={href}
		icon={<FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />}
		type="text">
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: "0.5rem",
			}}>
			{title.split("\n").map((text, i) => (
				<Typography.Text key={i}>{text}</Typography.Text>
			))}
		</div>
	</Button>
);

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
									<CustomBtnWithIcon
										icon={faLocationDot}
										title={
											"Câu lạc bộ thư viện hội sinh viên,\nĐại học Công nghệ - ĐHQGHN"
										}
									/>
								</Col>
								<Col xs={24} md={12} style={colAllCenter}>
									<Space direction="vertical">
										<CustomBtnWithIcon
											icon={faEnvelope}
											title="uetcodecamp@gmail.com"
										/>
										<CustomBtnWithIcon
											icon={faPhone}
											title="036 775 0975 - Mr. Bá"
										/>
										<CustomBtnWithIcon
											icon={faFacebook}
											title="Facebook UET Code Camp"
											href="https://www.facebook.com/UETCodeCamp"
										/>
										<CustomBtnWithIcon
											icon={faFacebookSquare}
											title="Facebook Câu lạc bộ thư viện hội sinh viên"
											href="https://www.facebook.com/TVHSV.UET"
										/>
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
