import { CAR_PNG, DOC_PNG, LOCK_PNG, PIGGY_PNG } from "../assets/assets";

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged my fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: CAR_PNG,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged my fees.',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: PIGGY_PNG,
    alt: 'Piggybank',
    dark: true,
    primary: false,
    darkText: true,
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: LOCK_PNG,
    alt: 'Papers',
    dark: false,
    primary: false,
    darkText: true,
}