import { Space, Typography, Steps } from "antd";

const RoadMap = () => {
	return (
		<Space direction="vertical">
			<Typography.Title>Lộ trình UET Code Camp 2019</Typography.Title>
			<Typography.Text>
				Trong quá trình tổ chức, một số thời gian hoặc đề tài có thể được thay
				đổi để phù hợp với chương trình.
				<br />
				Mọi thông tin thay đổi sẽ được cập nhật, thông báo tại đây và trên
				fanpage của UET Code Camp 2019.
			</Typography.Text>
			<Typography.Title level={4}>Vòng khởi động</Typography.Title>
			<Steps
				direction="vertical"
				current={0}
				items={[
					{
						title: "Mở đơn đăng kí",
						description: "28/2 - 10/3",
					},
					{
						title: "Tổ chức kiểm tra đầu vào",
						description: "11/3",
					},
					{
						title: "Gặp gỡ các thành viên Camp 2019",
						description: "14/3",
					},
					{
						title: "Tham gia khóa học ngắn với Git",
						description: "15-21/3",
					},
				]}
			/>
			<Typography.Title level={4}>Vòng chinh chiến</Typography.Title>
			<Steps
				direction="vertical"
				items={[
					{
						title: "Học, tìm tòi công nghệ mới",
						description: "22/3 - 22/4",
						status: "wait",
					},
					{
						title: "Làm dự án",
						description: "22/4 - 22/5",
					},
				]}
			/>
		</Space>
	);
};

export default RoadMap;
