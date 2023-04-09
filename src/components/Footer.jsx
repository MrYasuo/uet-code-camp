import {
	Button,
	Space,
	Typography,
	ConfigProvider,
	Row,
	Col,
	Divider,
} from "antd";
import { Link } from "react-router-dom";
import {
	FacebookCustomIcon,
	FacebookSquareCustomIcon,
} from "@/constants/Icons";
import { MailFilled } from "@ant-design/icons";
import { useContext } from "react";
import { AppContext } from "@/contexts";

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
	const { isDesktop } = useContext(AppContext);
	return (
		<ConfigProvider
			theme={{
				token: {
					fontSize: isDesktop ? "1.25rem" : "1rem",
					lineHeight: "2rem",
				},
			}}>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} xl={8} style={colStyle}>
					<Space direction="vertical" size="small">
						<Typography.Title
							level={4}
							className="center-text no-margin-bottom">
							UET Code Camp
						</Typography.Title>
						<div className="center-text">
							<Typography.Text>
								Trau dồi khả năng lập trình
								<br />
								Làm ứng dụng thực tế.
								<br />
								Kết nối đam mê - Cùng phê với code!
							</Typography.Text>
						</div>
					</Space>
				</Col>
				<Col xs={24} sm={24} md={24} xl={16}>
					<Row>
						<Col xs={24} sm={12} md={6} xl={6} style={colStyle}>
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
						<Col xs={24} sm={12} md={6} xl={6} style={colStyle}>
							<Space direction="vertical" size="small">
								<Typography.Title
									level={4}
									className="center-text no-margin-bottom">
									Chuyên mục
								</Typography.Title>
								<CustomBtn>Phát triển web</CustomBtn>
							</Space>
						</Col>
						<Col xs={24} sm={24} md={12} xl={12} style={colStyle}>
							<Row>
								<Col xs={24} style={colStyle}>
									<Row
										gutter={[5, 5]}
										style={{ display: "flex", alignContent: "flex-start" }}>
										<Col xs={24}>
											<Typography.Title
												level={4}
												className="center-text no-margin-bottom">
												Liên lạc
											</Typography.Title>
										</Col>
										<Col xs={24}>
											<Row gutter={16}>
												<Col>
													<Link to="mailto:uetcodecamp@gmail.com">
														<MailFilled />
													</Link>
												</Col>
												<Col>
													<Link to="https://www.facebook.com/UETCodeCamp">
														<FacebookSquareCustomIcon />
													</Link>
												</Col>
												<Col>
													<Link to="https://www.facebook.com/TVHSV.UET">
														<FacebookCustomIcon />
													</Link>
												</Col>
											</Row>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</ConfigProvider>
	);
};

export default Footer;
