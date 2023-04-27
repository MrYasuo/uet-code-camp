import {
	Button,
	Menu,
	Row,
	Col,
	Space,
	Typography,
	ConfigProvider,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { uetCodeCampLogoNoBG } from "@/assets";
import { MENU_BUTTONS_LIST, REGISTER_BUTTON } from "@/constants";
import { AppContext } from "@/contexts";
import { faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import { useContext, useRef, useEffect } from "react";

const colAllCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const colJustifyEndAlignCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
};

const colJustifyStartAlignCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
};

const logoColMobileStyle = { ...colJustifyEndAlignCenter, flex: 1 };
const logoColTabletStyle = colJustifyStartAlignCenter;
const logoColDesktopStyle = colJustifyStartAlignCenter;

const CustomButtonLink = ({ button, buttonName, color = "white" }) => {
	return (
		<Link to={button["children"] ? "#" : button["href"]}>
			<Button
				type="text"
				size="large"
				icon={button["icon"](color)}
				style={{ padding: 0 }}
				className="disable-hover-bg">
				<Typography.Text style={{ fontSize: 18, color, opacity: 0.7 }}>
					{buttonName}
				</Typography.Text>
			</Button>
		</Link>
	);
};

const CustomMenuHorizontalChildren = ({ buttonsList }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					margin: 50,
					fontSizeLG: "1.5rem",
					fontSize: "1.5rem",
					fontSizeXL: "1.5rem",
					fontSizeSM: "1.5rem",
				},
			}}>
			<div className="menu__container">
				<Menu
					disabledOverflow={true}
					mode="horizontal"
					style={{
						padding: 0,
						fontSize: "1.5rem",
						borderBottom: "1px solid #6a4f73",
					}}
					items={[
						{
							label: <FontAwesomeIcon icon={faSquareCaretDown} />,
							key: "menu",
							children: Object.entries(buttonsList).map(
								([buttonName, attr]) => ({
									key: buttonName,
									label: (
										<CustomButtonLink
											color="black"
											button={attr}
											buttonName={buttonName}
										/>
									),
									children:
										attr["children"] &&
										Object.entries(attr["children"]).map(
											([additionalButtonName, childAttr]) => ({
												key: additionalButtonName,
												label: (
													<CustomButtonLink
														color="black"
														button={childAttr}
														buttonName={additionalButtonName}
													/>
												),
											})
										),
								})
							),
						},
					]}
				/>
			</div>
		</ConfigProvider>
	);
};

const CustomMenuVerticalChildren = ({ buttonsList }) => {
	return (
		<div className="menu__container">
			<Menu
				disabledOverflow={true}
				style={{ backgroundColor: "transparent" }}
				mode="horizontal"
				className="no-border-bottom"
				items={Object.entries(buttonsList).map(([buttonName, attr], i) => {
					return {
						key: i,
						label: <CustomButtonLink button={attr} buttonName={buttonName} />,
						children:
							attr["children"] &&
							Object.entries(attr["children"]).map(
								([additionalButtonName, childAttr]) => ({
									label: (
										<CustomButtonLink
											color="black"
											button={childAttr}
											buttonName={additionalButtonName}
										/>
									),
								})
							),
					};
				})}
			/>
		</div>
	);
};

const Header = () => {
	const { isMobile, isTablet, isDesktop, setHeaderHeight, viewPort } =
		useContext(AppContext);
	const ref = useRef(null);
	useEffect(() => {
		setHeaderHeight(ref.current.clientHeight);
	}, [ref?.current?.clientHeight, viewPort.height]);
	return (
		<Row ref={ref} style={{ height: "100%" }}>
			{!isDesktop && (
				<Col style={{ ...colJustifyStartAlignCenter, height: "100%" }}>
					<CustomMenuHorizontalChildren
						buttonsList={{
							...MENU_BUTTONS_LIST,
							...REGISTER_BUTTON,
						}}
					/>
				</Col>
			)}
			<Col
				style={{
					...(isMobile
						? logoColMobileStyle
						: isTablet
						? logoColTabletStyle
						: logoColDesktopStyle),
					height: "100%",
					padding: "0 2rem",
				}}>
				<Link to="/" style={{ ...colAllCenter, width: "fit-content" }}>
					<img
						src={uetCodeCampLogoNoBG}
						height={40}
						style={{
							marginTop: "auto",
							marginBottom: "auto",
							width: "fit-content",
						}}
					/>
				</Link>
			</Col>
			{isTablet && (
				<Col style={{ flex: 1, ...colJustifyStartAlignCenter }}>
					<Typography.Text style={{ fontWeight: "bold", paddingLeft: 20 }}>
						Khám phá công nghệ mới.
						<br />
						Thu lượm kỹ năng về phát triển phẩn mềm
					</Typography.Text>
				</Col>
			)}
			{isDesktop && (
				<Col
					style={{
						...colJustifyEndAlignCenter,
						flex: 1,
						paddingRight: "1rem",
					}}>
					<CustomMenuVerticalChildren buttonsList={MENU_BUTTONS_LIST} />
				</Col>
			)}
			{!isMobile && (
				<Col style={{ ...colJustifyEndAlignCenter, height: "100%" }}>
					<div className="button__container">
						<Link to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform">
							<Button
								type="primary"
								size="large"
								style={{
									marginRight: "50px",
								}}>
								Đăng ký ngay
							</Button>
						</Link>
					</div>
				</Col>
			)}
		</Row>
	);
};

export default Header;
