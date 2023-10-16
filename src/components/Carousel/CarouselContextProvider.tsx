import {
	Dispatch,
	SetStateAction,
	createContext,
	useMemo,
	useState,
} from "react";

type CarouselContextType = {
	currentSlideIndex: number;
	setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
	totalSlides: number;
	setTotalSlides: Dispatch<SetStateAction<number>>;
	rollOverEnabled: boolean;
	startingIndex: number;
	carouselWidthInPixels: number;
};

export const CarouselContext = createContext<CarouselContextType>({
	currentSlideIndex: 0,
	totalSlides: 0,
	setCurrentSlideIndex: () => {},
	setTotalSlides: () => {},
	rollOverEnabled: false,
	startingIndex: 0,
	carouselWidthInPixels: 0,
});

export function CarouselContextProvider({
	children,
	currentSlideIndex: currIndex = 0,
	totalSlides: numberOfSlides = 0,
	rollOverEnabled = false,
	startingIndex = 0,
	carouselWidthInPixels = 0,
}: {
	children: React.ReactNode;
	currentSlideIndex?: number;
	totalSlides?: number;
	rollOverEnabled?: boolean;
	startingIndex?: number;
	carouselWidthInPixels?: number;
}) {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(currIndex);
	const [totalSlides, setTotalSlides] = useState(numberOfSlides);

	const contextVal = useMemo(
		() => ({
			totalSlides,
			setTotalSlides,
			currentSlideIndex,
			setCurrentSlideIndex,
			rollOverEnabled,
			startingIndex,
			carouselWidthInPixels,
		}),
		[
			totalSlides,
			setTotalSlides,
			currentSlideIndex,
			setCurrentSlideIndex,
			rollOverEnabled,
			startingIndex,
			carouselWidthInPixels,
		]
	);

	return (
		<CarouselContext.Provider value={contextVal}>
			{children}
		</CarouselContext.Provider>
	);
}
