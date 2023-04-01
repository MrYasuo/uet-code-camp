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
import { useContext } from "react";
import { AppContext } from "@/contexts";

const MyContent = () => {
	const { isTablet } = useContext(AppContext);
	return (
		<Layout className="custom-bg">
			<Header
				className="white-bg"
				style={{ borderBottom: "1px solid #6a4f73", padding: 0 }}>
				<MyHeader />
			</Header>
			<Content style={{ marginTop: "1rem" }}>
				<Layout className="custom-bg">
					{isTablet && (
						<Sider id="sider">
							<Sidebar />
						</Sider>
					)}
					<Content>
						<Outlet />
					</Content>
				</Layout>
			</Content>
			<Footer style={{ padding: "5rem" }}>
				<MyFooter />
			</Footer>
		</Layout>
	);
};

const App = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "'Inconsolata', monospace",
					colorPrimary: "#593767",
				},
			}}>
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
