/* eslint-disable no-param-reassign */
import React, { AllHTMLAttributes, useContext } from "react";

import { CarouselContext } from "./CarouselContextProvider";
import { composeEventHandlers, prevSlide } from "./utils";

interface Props {
	as: any;
	children: React.ReactNode;
}

export function TriggerPrev({
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
		prevSlide({
			currentSlideIndex,
			setCurrentSlideIndex,
			totalSlides,
			rollOverEnabled,
		})
	);

	rest.disabled = currentSlideIndex === 0 && !rollOverEnabled;
	(rest as any).isDisabled = currentSlideIndex === 0 && !rollOverEnabled;

	return React.createElement(as, rest, children);
}
