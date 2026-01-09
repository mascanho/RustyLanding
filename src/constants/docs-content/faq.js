import { faqContent as faqIndexContent } from "./faq/index";
import { faqGeneralContent } from "./faq/general";
import { faqTechnicalContent } from "./faq/technical";
import { faqApiContent } from "./faq/api";
import { faqTroubleshootingContent } from "./faq/troubleshooting";
import { faqSupportContent } from "./faq/support";

export const faqContent = {
    ...faqIndexContent,
    ...faqGeneralContent,
    ...faqTechnicalContent,
    ...faqApiContent,
    ...faqTroubleshootingContent,
    ...faqSupportContent,
};