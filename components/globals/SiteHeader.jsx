import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { v4 as uuidv4 } from "uuid";

// Animations
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuItem, mobileMenu } from "../../helpers/animations";

const SiteHeader = () => {
	const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
	const { t, i18n } = useTranslation("common");
	const router = useRouter();

	const siteNav = [
		{
			text: t("navOne"),
			route: "/",
		},
		{
			text: t("navTwo"),
			route: "/who-i-am",
		},
		{
			text: t("navThree"),
			route: "/what-i-do",
		},
		{
			text: t("navFour"),
			route: "/who-i-work-with",
		},
		{
			text: t("navFive"),
			route: "/after-hours",
		},
		{
			text: t("navSix"),
			route: "/blog",
		},
	];
	
	const socialMedia = [
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/dikoo/',
			size: { x: 16, y: 18 }
		},
		{
			name: 'github',
			url: 'https://github.com/widersky',
			size: { x: 19, y: 16 }
		},
		{
			name: 'twitter',
			url: 'https://twitter.com/grymas1000lecia',
			size: { x: 19, y: 16 }
		}
	]

	const Nav = ({ text, route }) => (
		<Link href={route} passHref>
			<a
				className={`${
					router.pathname === route
						? "text-brandRed opacity-100"
						: "transition-all text-brandText opacity-60 hover:opacity-90"
				}`}
			>
				{text}
			</a>
		</Link>
	);

	return (
		<>
		
			{/* Mobile menu */}
			<AnimatePresence
				exitBeforeEnter
			>
				{mobileMenuOpened && 
					<motion.nav
						initial={mobileMenu.initial}
						animate={mobileMenu.animate}
						exit={mobileMenu.exit}
						transition={{ duration: 0.2 }}
						className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center text-center bg-brandLight/60 backdrop-blur-xl"
					>
						<ul className="flex flex-col gap-5 gap-10 text-md uppercase">
							{siteNav.map((item, i) => (
								<motion.div
									initial={mobileMenuItem.initial}
									animate={mobileMenuItem.animate}
									exit={mobileMenuItem.exit}
									transition={{ delay: i * 0.2, duration: 0.2 }}
									key={uuidv4()}
									onClick={() => setMobileMenuOpened(false)}
								>
									<Nav text={item.text} route={item.route} />
								</motion.div>
							))}
						</ul>
					</motion.nav>
				}
			</AnimatePresence>
			
			{/* Header */}
			<header className="relative md:fixed top-0 left-0 w-full z-50 bg-brandLight backdrop-blur bg-opacity-90">
				<div className="container mx-auto px-4 lg:px-0 flex flex-col md:flex-row justify-between items-center py-8">
					
					{/* Logo */}
					<Link href="/" passHref>
						<a>
							<Image
								src="/devbuzz-logo.svg"
								loading="lazy"
								className="cursor-pointer"
								alt="DevBuzz logo"
								width={219}
								height={48}
							/>
						</a>
					</Link>
			
					{/* Menu */}
					<button className={`mobile-menu-trigger ${mobileMenuOpened ? 'opened' : ''}`} onClick={() => setMobileMenuOpened(!mobileMenuOpened)}>
						<span />
					</button>
					
					<nav className="mt-1 hidden lg:block">
						<ul className="flex gap-5 xl:gap-10 text-sm uppercase">
							{siteNav.map((item) => (
								<Nav text={item.text} route={item.route} key={uuidv4()} />
							))}
						</ul>
					</nav>
			
					{/* Tools */}
					<div className="flex items-center pt-4 md:pt-0">
						{/* Language switcher */}
						<div className="grid grid-cols-2 gap-3 mr-8">
							<Link
								href={router.route}
								locale="en"
								passHref
							>
								<div
									className={`${
										i18n.language === "en"
											? "opacity-100"
											: "opacity-50 hover:opacity-70"
									} transition-all cursor-pointer shadow-lg relative`}
									style={{ minWidth: 26, minHeight: 20 }}
									width={26}
									height={20}
								>
									<Image
										src="/icon-flag-gb.webp"
										alt="GB Flag"
										loading="lazy"
										layout="fill"
										className="rounded-md"
									/>
									{ i18n.language === 'en' ? <i className="block w-2 h-1 bg-brandRed rounded absolute top-6 left-1/2 -translate-x-1/2"></i> : '' }
								</div>
							</Link>
							<Link
								href={router.route}
								locale="pl"
								passHref
							>
								<div
									className={`${
										i18n.language === "pl"
											? "opacity-100"
											: "opacity-50 hover:opacity-70"
									} transition-all cursor-pointer shadow-lg relative`}
									style={{ minWidth: 26, minHeight: 20 }}
									width={26}
									height={20}
								>
									<Image
										src="/icon-flag-pl.webp"
										alt="PL flag"
										loading="lazy"
										layout="fill"
										className="rounded-md"
									/>
									{ i18n.language === 'pl' ? <i className="block w-2 h-1 bg-brandRed rounded absolute top-6 left-1/2 -translate-x-1/2"></i> : '' }
								</div>
							</Link>
						</div>
			
						{/* Social Media */}
						<div className="social-icons grid grid-cols-3 gap-5 md:gap-3">
							{socialMedia.map((item) => (
								<a
									href={item.url}
									target="_blank"
									rel="noreferrer"
									className="place-self-center relative"
									width={item.size.x}
									height={item.size.y}
									key={uuidv4()}
								>
									<Image
										src={`/icon-${item.name}.svg`}
										alt={item.name}
										loading="lazy"
										layout="fill"
									/>
								</a>
							))}
						</div>
						
					</div>
				</div>
			</header>
			
		</>
	);
};

export default SiteHeader;
