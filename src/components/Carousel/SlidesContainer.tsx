import {
	Children,
	ReactNode,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { CarouselContext } from "./CarouselContextProvider";
import { useInterval } from "../../hooks/useInterval";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { nextSlide } from "./utils";

export function SlidesContainer({
	children,
	currentSlideIndex: customCurrentSlideIndex,
}: {
	children: ReactNode;
	currentSlideIndex?: number | null;
}) {
	const direction = useRef("-"); // ref since we don't want to re-render the component
	const {
		setTotalSlides,
		rollOverEnabled,
		currentSlideIndex,
		setCurrentSlideIndex,
		startingIndex,
		carouselWidthInPixels,
		autoSlide,
		autoSlideInterval,
		pauseOnHover,
	} = useContext(CarouselContext);

	const [transformProperty, setTransformProperty] = useState(
		`translateX(${startingIndex * carouselWidthInPixels}px)`
	);
	const [hoveredOnSlideContainer, setHoveredOnSlideContainer] =
		useState(false);

	const totalSlides = Children.count(children);

	useIsomorphicLayoutEffect(() => {
		setTotalSlides(totalSlides);
	}, [setTotalSlides, totalSlides]);

	useIsomorphicLayoutEffect(() => {
		if (
			customCurrentSlideIndex !== undefined &&
			customCurrentSlideIndex !== null
		) {
			setCurrentSlideIndex(customCurrentSlideIndex);
		}
	}, [customCurrentSlideIndex]);

	useEffect(() => {
		const newTransformProperty = `translateX(${
			rollOverEnabled ? direction.current : "-"
		}${currentSlideIndex * carouselWidthInPixels}px)`;
		setTransformProperty(newTransformProperty);
	}, [currentSlideIndex, rollOverEnabled, carouselWidthInPixels]);

	useInterval(
		() => {
			nextSlide({
				currentSlideIndex,
				totalSlides,
				rollOverEnabled,
				setCurrentSlideIndex,
			});
		},
		!autoSlide || (pauseOnHover && hoveredOnSlideContainer)
			? null
			: autoSlideInterval
	);

	return (
		<div
			style={{
				display: "flex",
				transform: transformProperty,
				transition: "transform 300ms ease-out",
			}}
			onMouseOver={() => setHoveredOnSlideContainer(true)}
			onMouseOut={() => setHoveredOnSlideContainer(false)}
		>
			{children}
		</div>
	);
}
