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

const colStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const Contact = () => {
	return (
		<Row gutter={[16, 16]}>
			<Col md={24} style={colStyle}>
				<Space direction="vertical">
					<Typography.Title level={2} className="center-text">
						Thông tin liên hệ
					</Typography.Title>
					<Space>
						<Space direction="vertical">
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
						</Space>
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
					</Space>
				</Space>
			</Col>
			<Col md={24} style={colStyle}>
				<Space direction="vertical">
					<Typography.Title level={2} className="center-text">
						Tham gia UET Code Camp
					</Typography.Title>
					<Typography.Text className="center-text">
						Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phần mềm, tại
						sao không?
					</Typography.Text>
				</Space>
			</Col>
			<Col md={24} style={colStyle}>
				<Button style={{ justifyContent: "center" }}>ĐĂNG KÝ NGAY</Button>
			</Col>
		</Row>
	);
};

export default Contact;
