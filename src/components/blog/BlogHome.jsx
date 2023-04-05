import { useState, useEffect, useContext } from "react";
import { Col, List, Row, Card, Typography, Divider } from "antd";
import { BLOGS_LIST } from "@/constants";
import { Link } from "react-router-dom";
import { AppContext } from "@/contexts";

const { Meta } = Card;

const BlogHome = () => {
	const { blogs } = useContext(AppContext);
	return (
		<Row gutter={[24, 24]} style={{ padding: "2rem 5rem" }}>
			<Col xs={24}>
				<Typography.Title className="center-text" style={{ margin: 0 }}>
					Blogs
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<Divider style={{ margin: 0 }} />
			</Col>
			{blogs.map((blog, i) => (
				<Col
					key={i}
					xs={24}
					md={12}
					lg={8}
					xl={6}
					style={{ display: "flex", justifyContent: "center" }}>
					<Link to={`/blog/${blog.id}`}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={
								<img src={blog.thumbnail} style={{ cursor: "pointer" }} />
							}>
							<Meta title={blog.title} description={blog.description} />
						</Card>
					</Link>
				</Col>
			))}
		</Row>
	);
};

export default BlogHome;
