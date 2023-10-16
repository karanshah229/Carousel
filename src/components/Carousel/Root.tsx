import { ReactNode } from "react";
import { CarouselContextProvider } from "./CarouselContextProvider";

type Props =
	| { autoSlide: true; autoSlideInterval?: number; pauseOnHover?: boolean }
	| { autoSlide?: false; autoSlideInterval?: never; pauseOnHover?: never };

type RootProps = Props & {
	children: ReactNode;
	widthInPixels: number;
	className?: string;
	rollOverEnabled?: boolean;
	startingIndex?: number;
	autoSlide?: boolean;
	style?: object;
};

export function Root({
	children,
	widthInPixels: carouselWidthInPixels,
	className,
	rollOverEnabled = false,
	startingIndex = 0,
	style = {},
	autoSlide,
	autoSlideInterval: _autoSlideInterval,
	pauseOnHover: _pauseOnHover,
}: RootProps) {
	let autoSlideInterval: number | undefined,
		pauseOnHover: boolean | undefined;

	if (autoSlide === true) {
		autoSlideInterval = _autoSlideInterval || 3000;
		pauseOnHover = _pauseOnHover || true;
	}

	return (
		<CarouselContextProvider
			rollOverEnabled={rollOverEnabled}
			startingIndex={startingIndex}
			carouselWidthInPixels={carouselWidthInPixels}
			autoSlide={autoSlide}
			autoSlideInterval={autoSlideInterval}
			pauseOnHover={pauseOnHover}
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
