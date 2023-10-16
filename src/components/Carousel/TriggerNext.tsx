import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContextProvider";
import { composeEventHandlers, nextSlide } from "./utils";

interface Props<T extends keyof JSX.IntrinsicElements> {
	as: T;
	children: React.ReactNode;
}

export function TriggerNext<T extends keyof JSX.IntrinsicElements>({
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
		nextSlide({
			currentSlideIndex,
			setCurrentSlideIndex,
			totalSlides,
			rollOverEnabled,
		})
	);

	rest.disabled = currentSlideIndex === totalSlides - 1 && !rollOverEnabled;

	return React.createElement(as, rest, children);
}
