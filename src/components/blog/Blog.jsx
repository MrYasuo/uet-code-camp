import { Divider, Space, Typography } from "antd";
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
import { useParams, useLocation } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
	const { id } = useParams();
	const { blogs } = useContext(AppContext);
	const [blog, setBlog] = useState("");
	const END_POINT = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
	useEffect(() => {
		if (blogs.length == 0) return;
		(async () => {
			const res = await fetch(
				END_POINT + blogs.find((blog) => blog.id == id)["href"]
			);
			const text = await res.text();
			setBlog(text);
		})();
	}, [blogs]);
	return (
		<Space direction="vertical" style={{ width: "100%", padding: "2rem 5rem" }}>
			<Typography.Title>Uet Code camp là gì?</Typography.Title>
			<Divider />
			<Suspense fallback={<div>Loading...</div>}>
				<div className="blog__container">
					<ReactMarkdown children={blog} rehypePlugins={[rehypeRaw]} />
				</div>
			</Suspense>
		</Space>
	);
};

export default Blog;
