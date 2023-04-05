import { createContext, useEffect, useState } from "react";
import { useViewport } from "@/hooks";
import { BLOGS_LIST } from "@/constants";

const getPreview = (text) => {
	if (text.length > 100) return text.slice(0, 100) + "...";
	return text + "...";
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [blogs, setBlogs] = useState([]);
	const viewPort = useViewport();
	const END_POINT = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
	useEffect(() => {
		(async () => {
			let data = await Promise.all(
				BLOGS_LIST.map(async (blog) => fetch(blog.href))
			);
			data = await Promise.all(data.map(async (res) => res.text()));
			setBlogs(
				data.map((text, i) => ({
					...BLOGS_LIST[i],
					text,
					description: getPreview(text.split("\n")[0]),
				}))
			);
		})();
	}, []);
	useEffect(() => {
		setIsMobile(viewPort.width < 768);
		setIsTablet(viewPort.width >= 768 && viewPort.width < 1020);
		setIsDesktop(viewPort.width >= 1020);
	}, [viewPort.width]);
	return (
		<AppContext.Provider
			value={{
				viewPort,
				isMobile,
				isTablet,
				isDesktop,
				headerHeight,
				setHeaderHeight,
				blogs,
				setBlogs,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
export { AppContextProvider };
