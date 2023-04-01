import { Button, Menu, Row, Col, Space, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { uetCodeCampLogo } from "@/assets";
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

const CustomButtonLink = ({ button, buttonName }) => (
	<Link to={button["children"] ? "#" : button["href"]}>
		<Button
			type="text"
			size="large"
			icon={button["icon"]}
			style={{ padding: 0 }}
			className="disable-hover-bg">
			<Typography.Text style={{ fontSize: 18 }}>{buttonName}</Typography.Text>
		</Button>
	</Link>
);

const CustomMenuHorizontalChildren = ({ buttonsList }) => (
	<Menu
		mode="horizontal"
		className="no-border-bottom"
		items={[
			{
				label: "Menu",
				key: "menu",
				icon: <FontAwesomeIcon icon={faSquareCaretDown} />,
				children: Object.keys(buttonsList).map((buttonName, i) => ({
					key: i,
					label: (
						<CustomButtonLink
							button={buttonsList[buttonName]}
							buttonName={buttonName}
						/>
					),
					children:
						buttonsList[buttonName]["children"] &&
						Object.keys(buttonsList[buttonName]["children"]).map(
							(additionalButtonName) => ({
								label: (
									<CustomButtonLink
										button={
											buttonsList[buttonName]["children"][additionalButtonName]
										}
										buttonName={additionalButtonName}
									/>
								),
							})
						),
				})),
			},
		]}
	/>
);

const CustomMenuVerticalChildren = ({ buttonsList }) => (
	<Menu
		mode="horizontal"
		className="no-border-bottom"
		items={Object.keys(buttonsList).map((buttonName, i) => ({
			key: i,
			label: (
				<CustomButtonLink
					button={buttonsList[buttonName]}
					buttonName={buttonName}
				/>
			),
			children:
				buttonsList[buttonName]["children"] &&
				Object.keys(buttonsList[buttonName]["children"]).map(
					(additionalButtonName) => ({
						label: (
							<CustomButtonLink
								button={
									buttonsList[buttonName]["children"][additionalButtonName]
								}
								buttonName={additionalButtonName}
							/>
						),
					})
				),
		}))}
	/>
);

const Header = () => {
	const { isMobile, isTablet, isDesktop, setHeaderHeight, viewPort } =
		useContext(AppContext);
	const ref = useRef(null);
	useEffect(() => {
		setHeaderHeight(ref.current.clientHeight);
	}, [ref?.current?.clientHeight, viewPort.height]);
	return (
		<Row ref={ref} style={{ height: "100%" }}>
			{isMobile && (
				<Col style={colJustifyStartAlignCenter}>
					{isMobile ? (
						<CustomMenuHorizontalChildren
							buttonsList={{
								...MENU_BUTTONS_LIST,
								...REGISTER_BUTTON,
							}}
						/>
					) : (
						<CustomMenuHorizontalChildren buttonsList={MENU_BUTTONS_LIST} />
					)}
				</Col>
			)}
			<Col
				style={
					isMobile
						? logoColMobileStyle
						: isTablet
						? logoColTabletStyle
						: logoColDesktopStyle
				}>
				<Link to="/" style={colAllCenter}>
					<img
						src={uetCodeCampLogo}
						height={40}
						style={{ marginLeft: "50px" }}
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
				<Col style={{ ...colJustifyEndAlignCenter, flex: 1 }}>
					<CustomMenuVerticalChildren buttonsList={MENU_BUTTONS_LIST} />
				</Col>
			)}
			{!isMobile && (
				<Col style={colJustifyEndAlignCenter}>
					<Button
						type="primary"
						size="large"
						style={{ marginRight: "50px" }}
						href="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform">
						Đăng ký ngay
					</Button>
				</Col>
			)}
		</Row>
	);
};

export default Header;
