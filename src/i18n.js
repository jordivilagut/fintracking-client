
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .init({
    // we init with resources
    resources: {
        english: {
            translations: {
                "app.name": "Fintracking",
                "app.subtitle": "Pocket Finance Advisor",
                "app.welcome": "Welcome to Fintracking",
                "get.started": "Get Started",
                "general.about": "About",
                "general.team": "The Team",
                "general.support": "Support",
                "general.tos": "Terms of Service",
                "copyright.text": "© 2020 Fintracking, Inc. All rights reserved"
            }
        },
        spanish: {
            translations: {
                "app.name": "Fintracking",
                "app.subtitle": "Pocket Finance Advisor",
                "app.welcome": "Bienvenido a Fintracking",
                "get.started": "Empezar",
                "general.about": "Sobre Fintracking",
                "general.team": "Equipo",
                "general.support": "Soporte",
                "general.tos": "Términos del servicio",
                "copyright.text": "© 2020 Fintracking, Inc. Todos los derechos reservados"
            }
        },


    },


    /** CONFIGURATION */

    fallbackLng: "english",
    debug: false,

    //Have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, //We use content as keys

    interpolation: {
        escapeValue: false, //Not needed for react
        formatSeparator: ","
    },

    react: {
        wait: true
    }
})

export default i18n;
