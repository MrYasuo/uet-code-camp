import { Typography } from "antd";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
	return (
		<>
			<Typography.Title level={1}>
				<TypeAnimation
					sequence={["Hello,", 500, "Hello, World!", 1000, "", 500]}
					repeat={Infinity}
					cursor={false}
					className="type"></TypeAnimation>
			</Typography.Title>
			<Typography.Title level={2}>
				Chào mừng bạn tới UET Codecamp, mình làm quen nhé? :D
			</Typography.Title>
		</>
	);
};

export default Home;
