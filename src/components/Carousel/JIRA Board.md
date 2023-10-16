# TODO

1. Performance Udpate on Indicators - Render too many times

# Features

1. ClassName prop on Root
2. Custom Starting Index
3. Auto Slide
4. Pause on Hover
5. Vertical Carousel
6. RollOver

# Validations

1. `Indicators` should only take 1 element as IndicatorComp Prop

<!-- Indications old approach -->
<!-- return (
<>
{[...Array(totalSlides).keys()].map((val, index) => {
return (
<span
key={`carousel-indicator-${val}`}
onClick={() => setCurrentSlideIndex(index)}
>
{children}
</span>
);
})}
</>
); -->

<!-- TriggerPrev old approach -->
<!-- export function TriggerPrev({
	children,
	as = "div",
}: {
	children: ReactNode;
	as?: keyof JSX.IntrinsicElements;
} & ComponentPropsWithoutRef<typeof as>) {
	const ContainerTag = as;
	const {
		currentSlideIndex,
		setCurrentSlideIndex,
		totalSlides,
		rollOverEnabled,
	} = useContext(CarouselContext);

	return (
		<ContainerTag
			onClick={() =>
				prevSlide({
					currentSlideIndex,
					setCurrentSlideIndex,
					totalSlides,
					rollOverEnabled,
				})
			}
			disabled={currentSlideIndex === 0 && !rollOverEnabled}
		>
			{children}
		</ContainerTag>
	);
} -->
