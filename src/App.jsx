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
import { BlogHome, Blog } from "@/components/blog";
import { useContext } from "react";
import { AppContext } from "@/contexts";

const MyContent = () => {
	const { isDesktop } = useContext(AppContext);
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "'Inconsolata', monospace",
					colorPrimary: "#cebf91",
					colorBgContainer: "#261C3D",
					colorBgLayout: "#261C3D",
					colorText: "white",
				},
			}}>
			<Layout>
				<Header
					// className="white-bg"
					style={{
						borderBottom: "1px solid #6a4f73",
						padding: 0,
						backgroundColor: "#261C3D",
					}}>
					<MyHeader />
				</Header>
				<Content style={{ marginTop: "1rem" }}>
					<Layout>
						{/* {isTablet && (
						<Sider id="sider">
							<Sidebar />
						</Sider>
					)} */}
						<Content>
							<Outlet />
						</Content>
					</Layout>
				</Content>
				<Footer
					style={{
						padding: isDesktop ? "5rem" : "2rem",
						borderTop: "1px solid #6a4f73",
					}}>
					<MyFooter />
				</Footer>
			</Layout>
		</ConfigProvider>
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
				<Route path="blog">
					<Route index element={<BlogHome />} />
					<Route path=":id" element={<Blog />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
