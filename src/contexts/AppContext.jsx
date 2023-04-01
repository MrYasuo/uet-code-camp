import { createContext, useEffect, useState } from "react";
import { useViewport } from "@/hooks";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const viewPort = useViewport();
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
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
export { AppContextProvider };
