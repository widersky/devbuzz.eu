import { useTranslation } from "next-i18next";

const SiteFooter = () => {
    const { t } = useTranslation();

    return (
        <footer className="mt-12">
            <div className="container mx-auto py-10 flex justify-center">
                <span className="text-brandTextLight text-sm">{t('made')}</span>
            </div>
        </footer>
    );
};

export default SiteFooter;