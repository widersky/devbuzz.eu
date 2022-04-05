export const defaultTransition = {
    type: "spring",
    bounce: .75,
    mass: .5,
    duration: .15
}

export const leftSideAnim = {
    initial: {
        x: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: -100,
        opacity: 0
    }
};

export const rightSideAnim = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 100,
        opacity: 0
    }
};

export const scrollPromptAnim = {
    initial: {
        scale: .5,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1
    },
    exit: {
        scale: .5,
        opacity: 0
    }
};

export const floating1 = {
    y: [ -10, 10, -10 ],
    rotate: [ "0deg", "180deg", "360deg" ],
    borderRadius: [ "30%", "45%", "20%" ]
};