import { Space, Typography, Steps, Divider } from "antd";
import { TIMELINE_START, TIMELINE_END } from "@/constants";

const RoadMap = () => {
	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			<Typography.Title>Lộ trình UET Code Camp 2019</Typography.Title>
			<Typography.Text className="center-text">
				Trong quá trình tổ chức, một số thời gian hoặc đề tài có thể được thay
				đổi để phù hợp với chương trình.
				<br />
				Mọi thông tin thay đổi sẽ được cập nhật, thông báo tại đây và trên
				fanpage của UET Code Camp 2019.
			</Typography.Text>
			<Divider />
			<Typography.Title level={4}>Vòng khởi động</Typography.Title>
			<Steps direction="vertical" current={0} items={TIMELINE_START} />
			<Divider />
			<Typography.Title level={4}>Vòng chinh chiến</Typography.Title>
			<Steps direction="vertical" items={TIMELINE_END} />
		</Space>
	);
};

export default RoadMap;
