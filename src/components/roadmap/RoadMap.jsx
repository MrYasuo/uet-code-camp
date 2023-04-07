import { Row, Col, Timeline, Space, Divider, Collapse, Typography } from "antd";
import { TIMELINE_START, TIMELINE_END } from "@/constants";
import { Link } from "react-router-dom";
import "./RoadMap.css";

const { Panel } = Collapse;

const items = [...TIMELINE_START, ...TIMELINE_END].map((item, i) => ({
	children: (
		<Collapse key={i} ghost>
			<Panel
				header={
					<Row>
						<Col xs={24}>
							<Typography.Title
								level={5}
								underline={true}
								className="no-margin-bottom">
								{item["title"]}
							</Typography.Title>
						</Col>
						<Col xs={24}>
							<Typography.Paragraph>{item["time"]}</Typography.Paragraph>
						</Col>
					</Row>
				}
				style={{ width: "100%" }}
				showArrow={false}>
				<Typography.Text>{item["description"]}</Typography.Text>
			</Panel>
		</Collapse>
	),
}));

const RoadMap = () => {
	return (
		<Row gutter={[0, 16]} style={{ padding: "5rem" }}>
			<Col xs={24}>
				<Typography.Title className="center-text">
					Lộ trình UET Code Camp 2023
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<div className="center-text">
					<Typography.Text>
						Trong quá trình tổ chức, một số thời gian hoặc đề tài có thể được
						thay đổi để phù hợp với chương trình.
						<br />
						Mọi thông tin thay đổi sẽ được cập nhật, thông báo tại đây và trên
						fanpage của{" "}
						<Link to="https://www.facebook.com/UETCodeCamp">
							UET Code Camp 2023
						</Link>
						.
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
				<div className="timeline__container" style={{ width: "100%" }}>
					<Timeline mode="alternate" items={items} />
				</div>
				{/* <Steps
					direction="vertical"
					current={0}
					items={[...TIMELINE_START, ...TIMELINE_END]}
					style={{ justifyContent: "center" }}
				/> */}
			</Col>
			{/* <Divider /> */}
			{/* <Typography.Title level={3}>Vòng chinh chiến</Typography.Title> */}
			{/* <Steps direction="vertical" items={TIMELINE_END} /> */}
		</Row>
	);
};

export default RoadMap;
