//Screen Constatnts
const SCREEN_HEIGHT = 2781;
const SCREEN_WIDTH = 1920;

const { innerHeight, innerWidth } = window;
console.log('@@@ height ===============', innerHeight);

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
	return innerWidth / SCREEN_WIDTH * units;
}


const verticalScale = (size: any) => innerHeight / SCREEN_HEIGHT * size;

export { verticalScale };