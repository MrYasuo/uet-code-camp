import { Divider, Layout, ConfigProvider } from "antd";
import { Routes, Route, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

import "./App.css";
import {
	Header as MyHeader,
	Footer as MyFooter,
	Sidebar,
	Home,
	RoadMap,
	About,
	CoursesMenu,
	Contact,
} from "@/components";

const MyContent = () => {
	return (
		<Layout style={{ padding: "0 10px" }} className="white-bg">
			<Header className="white-bg">
				<MyHeader />
			</Header>
			<Content>
				<Divider style={{ margin: "10px 0px" }} />
				<Layout className="white-bg">
					<Sider id="sider">
						<Sidebar />
					</Sider>
					<Content style={{ margin: "0 10px" }}>
						<Outlet />
					</Content>
				</Layout>
			</Content>
			<Footer className="white-bg">
				<MyFooter />
			</Footer>
		</Layout>
	);
};

const App = () => {
	return (
		<ConfigProvider
			theme={{ token: { fontFamily: "'Inconsolata', monospace" } }}>
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
		</ConfigProvider>
	);
};

export default App;
