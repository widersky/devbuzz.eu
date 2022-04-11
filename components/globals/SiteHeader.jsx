import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { v4 as uuidv4 } from "uuid";

const SiteHeader = () => {
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
		<header className="fixed top-0 left-0 w-full z-50 bg-brandLight backdrop-blur bg-opacity-90">
			<div className="container mx-auto flex justify-between items-center py-8">
				<Link href="/" passHref>
					<a>
						<Image
							src="/devbuzz-logo.svg"
							loading="lazy"
							className="cursor-pointer"
							alt="DevBuzz logo"
							width="219px"
							height="48px"
						/>
					</a>
				</Link>

				<nav className="mt-1">
					<ul className="flex gap-10 text-sm uppercase">
						{siteNav.map((item) => (
							<Nav text={item.text} route={item.route} key={uuidv4()} />
						))}
					</ul>
				</nav>

				<div className="flex items-center">
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
					<div className="social-icons grid grid-cols-3 gap-3">
						<a
							href="https://www.linkedin.com/in/dikoo/"
							target="_blank"
							rel="noreferrer"
							className="place-self-center relative"
							width={16}
							height={17}
						>
							<Image
								src="/icon-linkedin.svg"
								alt="LinkedIn icon"
								loading="lazy"
								layout="fill"
							/>
						</a>
						<a
							href="https://github.com/widersky"
							target="_blank"
							rel="noreferrer"
							className="place-self-center relative"
							width={16}
							height={18}
						>
							<Image
								src="/icon-github.svg"
								alt="Github icon"
								loading="lazy"
								layout="fill"
							/>
						</a>
						<a
							href="https://twitter.com/grymas1000lecia"
							target="_blank"
							rel="noreferrer"
							className="place-self-center relative"
							width={19}
							height={16}
						>
							<Image
								src="/icon-twitter.svg"
								alt="Twitter icon"
								loading="lazy"
								layout="fill"
							/>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default SiteHeader;
