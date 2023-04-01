import { Typography, Space, Button, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
	return (
		<Row gutter={[0, 16]}>
			<Col md={24} style={colAllCenter}>
				<Row>
					<Col xs={24} style={colAllCenter}>
						<Typography.Title level={2} className="center-text">
							Thông tin liên hệ
						</Typography.Title>
					</Col>
					<Col xs={24} style={colAllCenter}>
						<Row gutter={[24, 16]}>
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
								<Space direction="vertical" style={{ gap: 0 }}>
									<Button
										style={btnStyle}
										icon={
											<FontAwesomeIcon
												icon={faEnvelope}
												style={{ marginRight: "10px" }}
											/>
										}
										type="text">
										uetcodecamp@gmail.com
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
										098 1981 063 - Tiến Đông
									</Button>
								</Space>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col md={24} style={colAllCenter}>
				<Row gutter={[0, 12]}>
					<Col xs={24} style={colAllCenter}>
						<Typography.Title
							level={2}
							className="center-text no-margin-bottom">
							Tham gia UET Code Camp
						</Typography.Title>
					</Col>
					<Col xs={24} style={colAllCenter}>
						<div className="center-text">
							<Typography.Text>
								Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phần mềm,
								tại sao không?
							</Typography.Text>
						</div>
					</Col>
					<Col xs={24} style={colAllCenter}>
						<Button style={{ justifyContent: "center" }}>ĐĂNG KÝ NGAY</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Contact;
