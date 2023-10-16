import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContextProvider";
import { composeEventHandlers, prevSlide } from "./utils";

interface Props<T extends keyof JSX.IntrinsicElements> {
	as: T;
	children: React.ReactNode;
}

export function TriggerPrev<T extends keyof JSX.IntrinsicElements>({
	as,
	children,
	...rest
}: Props<T> & React.HTMLProps<JSX.IntrinsicElements[T]>) {
	const {
		currentSlideIndex,
		setCurrentSlideIndex,
		totalSlides,
		rollOverEnabled,
	} = useContext(CarouselContext);

	rest.onClick = composeEventHandlers(rest.onClick, () =>
		prevSlide({
			currentSlideIndex,
			setCurrentSlideIndex,
			totalSlides,
			rollOverEnabled,
		})
	);

	rest.disabled = currentSlideIndex === 0 && !rollOverEnabled;

	return React.createElement(as, rest, children);
}
