import { Button, Space, Typography, ConfigProvider, Row, Col } from "antd";
import { Link } from "react-router-dom";

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
		<ConfigProvider
			theme={{
				token: {
					fontSize: "1.25rem",
					lineHeight: "2rem",
				},
			}}>
			<Row gutter={[16, 16]}>
				<Col xs={24} xl={12} md={24} style={colStyle}>
					<Space direction="vertical" size="small">
						<Typography.Title
							level={4}
							className="center-text no-margin-bottom">
							UET Code Camp
						</Typography.Title>
						<div className="center-text">
							<Typography.Text>
								Trau dồi khả năng lập trình & làm ứng dụng thực tế.
								<br />
								Kết nối đam mê - Cùng phê với code!
							</Typography.Text>
						</div>
					</Space>
				</Col>
				<Col xs={24} xl={4} md={5} style={colStyle}>
					<Space direction="vertical" size="small">
						<Typography.Title
							level={4}
							className="center-text no-margin-bottom">
							Đường dẫn
						</Typography.Title>
						<Row>
							<Col xs={24} style={colStyle}>
								<Link to="/">
									<CustomBtn>Trang chủ</CustomBtn>
								</Link>
							</Col>
							<Col xs={24} style={colStyle}>
								<Link to="/roadmap">
									<CustomBtn>Lộ trình</CustomBtn>
								</Link>
							</Col>
							<Col xs={24} style={colStyle}>
								<Link to="/about">
									<CustomBtn>Về chúng tôi</CustomBtn>
								</Link>
							</Col>
							<Col xs={24} style={colStyle}>
								<Link to="/contact">
									<CustomBtn>Liên hệ</CustomBtn>
								</Link>
							</Col>
						</Row>
					</Space>
				</Col>
				<Col xs={24} xl={4} md={5} style={colStyle}>
					<Space direction="vertical" size="small">
						<Typography.Title
							level={4}
							className="center-text no-margin-bottom">
							Chuyên mục
						</Typography.Title>
						<CustomBtn>Phát triển web</CustomBtn>
					</Space>
				</Col>
				<Col xs={24} xl={4} md={5} style={colStyle}>
					<Space direction="vertical" size="small">
						<Typography.Title
							level={4}
							className="center-text no-margin-bottom">
							Liên lạc
						</Typography.Title>
						<CustomBtn>uetcodecamp@gmail.com</CustomBtn>
					</Space>
				</Col>
			</Row>
		</ConfigProvider>
	);
};

export default Footer;
