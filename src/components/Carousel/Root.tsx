import { ReactNode } from "react";
import { CarouselContextProvider } from "./CarouselContextProvider";

export function Root({
	children,
	widthInPixels: carouselWidthInPixels,
	className,
	rollOverEnabled = false,
	startingIndex = 0,
	style = {},
}: {
	children: ReactNode;
	widthInPixels: number;
	className?: string;
	rollOverEnabled?: boolean;
	startingIndex?: number;
	style?: object;
}) {
	return (
		<CarouselContextProvider
			rollOverEnabled={rollOverEnabled}
			startingIndex={startingIndex}
			carouselWidthInPixels={carouselWidthInPixels}
		>
			<div
				style={{
					...style,
					width: carouselWidthInPixels,
					border: "solid",
					overflow: "hidden",
				}}
				className={className}
			>
				{children}
			</div>
		</CarouselContextProvider>
	);
}
