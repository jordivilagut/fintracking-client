
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .init({
    // we init with resources
    resources: {
        english: {
            translations: {

                //APPLICATION
                "app.name": "Fintracking",
                "app.subtitle": "Pocket Finance Advisor",

                //GENERAL
                "general.about": "About",
                "general.team": "The Team",
                "general.support": "Support",
                "general.tos": "Terms of Service",
                "general.income": "Income",
                "general.expenses": "Expenses",
                "general.close": "Close",

                //FOOTER
                "copyright.text": "© 2020 Fintracking, Inc. All rights reserved",

                //USER ACCESS
                "log.in": "Log In",
                "sign.up": "Sign Up",
                "have.account": "I already have an account",
                "dont.have.account": "I don't have an account",

                //HOMEPAGE
                "app.welcome": "Welcome to Fintracking",
                "get.started": "Get Started",

                //DASHBOARD
                "current.funds": "Current Funds",
                "add.transaction": "Add Transaction",
                "new.transaction": "New Transaction",
                "this.month": "This Month"
            }
        },
        spanish: {
            translations: {

                //APPLICATION
                "app.name": "Fintracking",
                "app.subtitle": "Pocket Finance Advisor",

                //GENERAL
                "general.about": "Sobre Fintracking",
                "general.team": "Equipo",
                "general.support": "Soporte",
                "general.tos": "Términos del servicio",
                "general.income": "Ingresos",
                "general.expenses": "Gastos",
                "general.close": "Cerrar",

                //FOOTER
                "copyright.text": "© 2020 Fintracking, Inc. Todos los derechos reservados",

                //HOMEPAGE
                "app.welcome": "Bienvenido a Fintracking",
                "get.started": "Empezar",

                //DASHBOARD
                "current.funds": "Fondos actuales",
                "add.transaction": "Añadir transacción",
                "new.transaction": "Nueva transacción",
                "this.month": "Mes actual"
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
