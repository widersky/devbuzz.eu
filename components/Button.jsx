import { motion } from "framer-motion";

const Button = ({ text, href, alt }) => {
    return (
        <a
            className="group relative" 
            href={href}
        >
            <motion.div
                className={`
                    absolute flex top-0 left-0 bottom-0 right-0 rounded-xl text-brandTextLight 
                    ${ alt ? "" : "border-brandTextLight border-2 group-hover:border-brandRed" } 
                    ${ alt ? "bg-opacity-0 bg-black group-hover:bg-opacity-10" : "group-hover:bg-brandRed" }
                `}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: .9 }}
            />
            <span className={`relative block z-10 py-3 px-8 pointer-events-none text-brandTextLight ${ alt ? "" : "group-hover:text-white" }`}>
                {text}
            </span>
        </a>
    )
}

export default Button;
