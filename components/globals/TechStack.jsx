import Image from 'next/image';

const TechStack = () => {
    return (
        <div className='grid grid-cols-8 gap-6 mt-16'>
            <div className="place-self-center"><Image loading="lazy" src="/badge-html.webp" alt="HTML5" title="HTML5" width={34} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-css.webp" alt="CSS3" title="CSS3" width={34} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-scss.webp" alt="SCSS" title="SCSS" width={46} height={24} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-js.webp" alt="JavaScript" title="JavaScript" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-ts.webp" alt="TypeScript" title="TypeScript" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-react.webp" alt="ReactJS" title="ReactJS" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-wp.webp" alt="WordPress" title="WordPress" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-php.webp" alt="PHP" title="PHP" width={46} height={26} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-tailwind.webp" alt="TailwindCSS" title="TailwindCSS" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-bootstrap.webp" alt="Bootstrap" title="Bootstrap" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-gsap.webp" alt="GSAP" title="GSAP" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-framer-motion.webp" alt="Framer Motion" title="Framer Motion" width={46} height={46} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-figma.webp" alt="Figma" title="Figma" width={30} height={44} /></div>
            <div className="place-self-center"><Image loading="lazy" src="/badge-sketch.webp" alt="Sketch" title="Sketch" width={46} height={43} /></div>
        </div>
    );
};

export default TechStack;