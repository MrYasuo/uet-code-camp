import { Divider, Layout, Space } from "antd";
import { Routes, Route, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

import "./App.css";
import {
	Header as MyHeader,
	Sidebar,
	Home,
	RoadMap,
	About,
	CoursesMenu,
	Contact,
} from "@/components";

const MyContent = () => {
	return (
		<Layout style={{ backgroundColor: "white", padding: "0 10px" }}>
			<Header style={{ backgroundColor: "white" }}>
				<MyHeader />
			</Header>
			<Content>
				<Divider style={{ margin: "10px 0px" }} />
				<Layout style={{ backgroundColor: "white" }}>
					<Sider id="sider">
						<Sidebar />
					</Sider>
					<Content style={{ margin: "0 10px" }}>
						<Outlet />
					</Content>
				</Layout>
			</Content>
		</Layout>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MyContent />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="roadmap" element={<RoadMap />} />
				<Route path="courses" element={<CoursesMenu />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
};

export default App;
