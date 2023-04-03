import { Row, Col, Space, Typography, Steps, Divider } from "antd";
import { TIMELINE_START, TIMELINE_END } from "@/constants";

const RoadMap = () => {
	return (
		<Row gutter={[0, 16]} style={{ padding: "5rem" }}>
			<Col xs={24}>
				<Typography.Title className="center-text">
					Lộ trình UET Code Camp 2019
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<div className="center-text">
					<Typography.Text>
						Trong quá trình tổ chức, một số thời gian hoặc đề tài có thể được
						thay đổi để phù hợp với chương trình.
						<br />
						Mọi thông tin thay đổi sẽ được cập nhật, thông báo tại đây và trên
						fanpage của UET Code Camp 2019.
					</Typography.Text>
				</div>
			</Col>
			<Col xs={24}>
				<Divider />
			</Col>
			{/* <Typography.Title level={3}>Vòng khởi động</Typography.Title> */}
			<Col
				xs={24}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Steps
					direction="vertical"
					current={0}
					items={[...TIMELINE_START, ...TIMELINE_END]}
					style={{ justifyContent: "center" }}
				/>
			</Col>
			{/* <Divider /> */}
			{/* <Typography.Title level={3}>Vòng chinh chiến</Typography.Title> */}
			{/* <Steps direction="vertical" items={TIMELINE_END} /> */}
		</Row>
	);
};

export default RoadMap;
