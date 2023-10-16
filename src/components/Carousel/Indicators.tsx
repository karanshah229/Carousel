import { useContext } from "react";
import { CarouselContext } from "./CarouselContextProvider";

export function Indicators({
	children,
	showIndicatorIfOneSlide = true,
}: {
	children: (
		index: number,
		isActiveSlideIndicator: boolean,
		onClick: () => void
	) => React.ReactNode;
	showIndicatorIfOneSlide?: boolean;
}) {
	const { totalSlides, setCurrentSlideIndex, currentSlideIndex } =
		useContext(CarouselContext);

	if (totalSlides === 1 && !showIndicatorIfOneSlide) return;
	return (
		<>
			{[...Array(totalSlides).keys()].map((_, index) => {
				return children(index, currentSlideIndex === index, () =>
					setCurrentSlideIndex(index)
				);
			})}
		</>
	);
}
