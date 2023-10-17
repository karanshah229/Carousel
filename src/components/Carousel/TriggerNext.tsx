/* eslint-disable no-param-reassign */
import React, { AllHTMLAttributes, useContext } from "react";

import { CarouselContext } from "./CarouselContextProvider";
import { composeEventHandlers, nextSlide } from "./utils";

interface Props {
	as: any;
	children: React.ReactNode;
}

export function TriggerNext({
	as,
	children,
	...rest
}: Props & AllHTMLAttributes<HTMLElement>) {
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
	(rest as any).isDisabled =
		currentSlideIndex === totalSlides - 1 && !rollOverEnabled;

	return React.createElement(as, rest, children);
}
