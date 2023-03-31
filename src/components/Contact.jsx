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

const Contact = () => {
	return (
		<Row>
			<Col xl={24}>
				<Typography.Title level={2} className="center-text">
					Thông tin liên hệ
				</Typography.Title>
			</Col>
			<Col
				xl={24}
				style={{
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
				}}>
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
							<FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
						}
						type="text">
						098 1981 063 - Tiến Đông
					</Button>
				</Space>
			</Col>
			<Col xl={24}>
				<Typography.Title level={2} className="center-text">
					Tham gia UET Code Camp
				</Typography.Title>
			</Col>
			<Col xl={24} style={{ justifyContent: "center", display: "flex" }}>
				<Typography.Text className="center-text">
					Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phần mềm, tại
					sao không?
				</Typography.Text>
			</Col>
			<Col xl={24} style={{ justifyContent: "center", display: "flex" }}>
				<Button>ĐĂNG KÝ NGAY</Button>
			</Col>
		</Row>
	);
};

export default Contact;
