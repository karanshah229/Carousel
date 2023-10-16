import {
	Children,
	ReactNode,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { CarouselContext } from "./CarouselContextProvider";

export function SlidesContainer({ children }: { children: ReactNode }) {
	const direction = useRef("-"); // ref since we don't want to re-render the component
	const {
		setTotalSlides,
		rollOverEnabled,
		currentSlideIndex,
		startingIndex,
		carouselWidthInPixels,
	} = useContext(CarouselContext);

	const [transformProperty, setTransformProperty] = useState(
		`translateX(${startingIndex * carouselWidthInPixels}px)`
	);

	const totalSlides = Children.count(children);

	useLayoutEffect(() => {
		setTotalSlides(totalSlides);
	}, [setTotalSlides, totalSlides]);

	useEffect(() => {
		const newTransformProperty = `translateX(${
			rollOverEnabled ? direction.current : "-"
		}${currentSlideIndex * carouselWidthInPixels}px)`;
		setTransformProperty(newTransformProperty);
	}, [currentSlideIndex, rollOverEnabled, carouselWidthInPixels]);

	return (
		<div
			style={{
				display: "flex",
				transform: transformProperty,
				transition: "transform 300ms ease-out",
			}}
		>
			{children}
		</div>
	);
}
