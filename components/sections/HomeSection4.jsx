import { useTranslation } from "next-i18next";

import Button from "../Button";

const HomeSection4 = () => {
	const { t } = useTranslation('common');

	return (
		<div className="py-32">
			<div className="container mx-auto">
				<div className="flex flex-col justify-center items-center">
					<h3 className="text-4xl font-bold text-brandText text-center w-full">
						{t("homeHeading4")}
					</h3>
					<p className="text-lg w-1/2 text-brandTextLight mt-10 leading-relaxed text-center">
						{t("homeText7")}
					</p>

					<div className="flex justify-center items-center gap-8 mt-10">
						<Button text={t("cta")} href="mailto:adrian@devbuzz.eu" />
						<span className="opacity-80">{t("or")}</span>
						<Button
							alt
							text={t("addMe")}
							href="https://www.linkedin.com/in/dikoo/"
							target="_blank"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSection4;
