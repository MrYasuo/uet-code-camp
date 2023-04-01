import { useEffect, useState } from "react";

const useViewport = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};
		window.addEventListener("resize", handleWindowResize);
		window.addEventListener("fullscreenchange", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
			window.removeEventListener("fullscreenchange", handleWindowResize);
		};
	}, []);

	return { width, height };
};

export default useViewport;
