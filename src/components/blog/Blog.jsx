import { Divider, Space, Typography, Button } from "antd";
import ReactMarkdown from "react-markdown";
import {
	useEffect,
	useLayoutEffect,
	useContext,
	useState,
	Suspense,
} from "react";
import rehypeRaw from "rehype-raw";
import { AppContext } from "@/contexts";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
	const { id } = useParams();
	const { blogs, isDesktop } = useContext(AppContext);
	const [blog, setBlog] = useState("");
	const END_POINT = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
	useEffect(() => {
		if (blogs.length == 0) return;
		(async () => {
			const _blog = blogs.find((blog) => blog.id == id);
			const res = await fetch(END_POINT + _blog.href);
			const text = await res.text();
			setBlog({ ..._blog, content: text });
		})();
	}, [blogs]);
	return (
		<Space
			direction="vertical"
			style={{ width: "100%", padding: isDesktop ? "2rem 5rem" : "2rem" }}>
			<Typography.Title style={{ marginBottom: 0 }}>
				{blog.title}
			</Typography.Title>
			<Divider />
			<Suspense fallback={<div>Loading...</div>}>
				<div className="blog__container">
					<ReactMarkdown children={blog.content} rehypePlugins={[rehypeRaw]} />
				</div>
			</Suspense>
			{blog.id === 5 && (
				<div className="button__container">
					<Link
						to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform"
						style={{ display: "flex", justifyContent: "center" }}>
						<Button type="primary" size="large" style={{ height: "120%" }}>
							ĐĂNG KÝ NGAY
						</Button>
					</Link>
				</div>
			)}
		</Space>
	);
};

export default Blog;
