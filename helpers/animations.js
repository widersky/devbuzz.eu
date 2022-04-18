export const defaultTransition = {
    duration: .5
}

export const leftSideAnim = {
    initial: {
        y: 150,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: -150,
        opacity: 0
    }
};

export const rightSideAnim = {
    initial: {
        x: 150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 150,
        opacity: 0
    }
};

export const blogCardAnim = {
	initial: {
		y: 50,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: 50,
		opacity: 0
	}
};

export const blogSinglePostImageAnim = {
	initial: {
		y: -50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: -50,
		opacity: 0
	}
};

export const blogSinglePostContentAnim = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: 50,
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

export const mobileMenuItem = {
	initial: {
			scale: 1.5,
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
}

export const mobileMenu = {
	initial: {
			opacity: 0
	},
	animate: {
			opacity: 1
	},
	exit: {
			opacity: 0
	}
}

export const floating1 = { y: [ -10, 10, -10 ], };
export const floating2 = { y: [ 20, -10, 20 ], };
export const floating3 = { y: [ 15, -20, 15 ], };