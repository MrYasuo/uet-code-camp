import { Button, Space, Typography, Divider, List, Row, Col } from "antd";

const btnStyle = {
	padding: 0,
};

const colStyle = {
	display: "flex",
	justifyContent: "center",
};

const CustomBtn = ({ children }) => (
	<Button type="link" style={btnStyle}>
		{children}
	</Button>
);

const Footer = () => {
	return (
		<Row gutter={[16, 16]}>
			<Col xs={24} xl={12} md={24} style={colStyle}>
				<Space direction="vertical" size="small">
					<Typography.Title level={4} className="center-text">
						UET Code Camp
					</Typography.Title>
					<Typography.Text>
						Trau dồi khả năng lập trình & làm ứng dụng thực tế.
					</Typography.Text>
					<Typography.Text>Kết nối đam mê - Cùng phê với code!</Typography.Text>
				</Space>
			</Col>
			<Col xs={24} xl={4} md={5} style={colStyle}>
				<Space direction="vertical" size="small">
					<Typography.Title level={4} className="center-text">
						Đường dẫn
					</Typography.Title>
					<CustomBtn>Trang chủ</CustomBtn>
					<CustomBtn>Lộ trình</CustomBtn>
					<CustomBtn>Về chúng tôi</CustomBtn>
					<CustomBtn>Liên hệ</CustomBtn>
				</Space>
			</Col>
			<Col xs={24} xl={4} md={5} style={colStyle}>
				<Space direction="vertical" size="small">
					<Typography.Title level={4} className="center-text">
						Chuyên mục
					</Typography.Title>
					<CustomBtn>Phát triển web</CustomBtn>
				</Space>
			</Col>
			<Col xs={24} xl={4} md={5} style={colStyle}>
				<Space direction="vertical" size="small">
					<Typography.Title level={4} className="center-text">
						Liên lạc
					</Typography.Title>
					<CustomBtn>uetcodecamp@gmail.com</CustomBtn>
				</Space>
			</Col>
		</Row>
	);
};

export default Footer;
