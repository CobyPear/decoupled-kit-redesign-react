import { ReactNode } from "react";

export const Footer = ({ children }: { children: ReactNode }) => {
	return(
		<footer className="">
			{children}
		</footer>
	)
};
