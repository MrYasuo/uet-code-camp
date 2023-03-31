import { Button } from "antd";

import { uetCodeCampLogo } from "@/assets";

const Header = () => {
	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<img src={uetCodeCampLogo} height={40} />
			<Button>Đăng ký ngay</Button>
		</div>
	);
};

export default Header;
