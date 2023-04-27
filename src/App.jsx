import { ConfigProvider, Divider, Layout } from "antd";
import { Outlet, Route, Routes } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

import { About, Contact, CoursesMenu, RoadMap, Person } from "@/components";
import { Blog, BlogHome } from "@/components/blog";
import {
	Home,
	Footer as MyFooter,
	Header as MyHeader,
	Sidebar,
} from "@/components/common";
import { AppContext } from "@/contexts";
import { useContext } from "react";
import "./App.css";

const MyContent = () => {
	const { isDesktop } = useContext(AppContext);
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "'Roboto', sans-serif",
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
				<Route path="about">
					<Route index element={<About />} />
					<Route path=":id" element={<Person />} />
				</Route>
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
