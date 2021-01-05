
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
                "general.name": "Name",
                "general.search": "Search...",
                "general.save": "Save",
                "coming.soon": "Coming Soon",
                "password.about": "Password must be at least 8 alhpanumeric characters",
                "forgot.password": "I forgot my password",
                "recover.password": "Recover password",
                "general.password": "Password",
                "general.password.confirmation": "Confirm Password",
                "password.changed": "Your password has been updated.",

                //MENU
                "menu.home": "HOME",
                "menu.budget": "BUDGET",
                "menu.profile": "MI PROFILE",

                //ERRORS
                "server.error": "Oops! Something went wrong",
                "server.error.detailed": "We're working hard to provide you with the best experience possible, please catch us up on Twitter for information and status updates.",

                //FOOTER
                "copyright.text": "© 2020 Fintracking, Inc. All rights reserved",

                //USER ACCESS
                "log.in": "Log In",
                "log.out": "Log Out",
                "sign.up": "Sign Up",
                "create.account": "Create Account",
                "have.account": "I already have an account",
                "dont.have.account": "I don't have an account",

                //HOMEPAGE
                "app.welcome": "Welcome to Fintracking",
                "get.started": "Get Started",

                //DASHBOARD
                "current.funds": "Current Funds",
                "add.transaction": "Add Transaction",
                "new.transaction": "New Transaction",
                "this.month": "This Month",
                "add.current.funds": "Add Current Funds",
                "edit.current.funds": "Edit Current Funds",

                //TRANSACTIONS MODAL
                "description.placeholder": "Description: e.g. &quot;Grocery Shopping&quot;",

                //OPERATION TYPES
                "EXPENSE": "Expense",
                "INCOME": "Income",

                //EXPENSE TYPES
                "CLOTHING": "Clothing",
                "EDUCATION": "Education",
                "TRANSPORT": "Transport",
                "TELCO": "Telcom Services",
                "TRAVELS": "Travels",
                "STREAMING_PLATFORMS": "Streaming Platforms",
                "PERSONAL_CARE": "Personal Care",
                "GROCERIES": "Groceries",
                "RESTAURANTS": "Restaurants",
                "HEALTHCARE": "Healthcare",
                "SALARY": "Salary",
                "TAXES": "Taxes",
                "CHARITY": "Charity",
                "HOUSING": "Housing",
                "HOUSEHOLD_SUPPLIES": "Household Supplies",
                "OTHER": "Other"
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
                "general.name": "Nombre",
                "general.search": "Buscar...",
                "general.save": "Guardar",
                "coming.soon": "Próximamente",
                "password.about": "La contraseña debe tener al menos 8 caracteres alfanuméricos.",
                "forgot.password": "Olvidé mi contraseña",
                "recover.password": "Recuperar contraseña",
                "general.password": "Contraseña",
                "general.password.confirmation": "Confirmar contraseña",
                "password.changed": "La contraseña ha sido modificada.",

                //MENU
                "menu.home": "INICIO",
                "menu.budget": "PRESUPUESTO",
                "menu.profile": "MI USUARIO",

                //ERRORS
                "server.error": "Uy! Algo ha fallado",
                "server.error.detailed": "Estamos trabajando para proveer la mejor experiencia posible, síguenos en Twitter para actualizaciones sobre el servicio.",

                //FOOTER
                "copyright.text": "© 2020 Fintracking, Inc. Todos los derechos reservados",

                //USER ACCESS
                "log.in": "Acceso",
                "log.out": "Cerrar Sesión",
                "sign.up": "Registro",
                "create.account": "Crear cuenta",
                "have.account": "Ya tengo una cuenta",
                "dont.have.account": "No tengo una cuenta",

                //HOMEPAGE
                "app.welcome": "Bienvenido a Fintracking",
                "get.started": "Empezar",

                //DASHBOARD
                "current.funds": "Fondos actuales",
                "add.transaction": "Añadir transacción",
                "new.transaction": "Nueva transacción",
                "this.month": "Mes actual",
                "add.current.funds": "Añadir Fondos",
                "edit.current.funds": "Editar Fondos",

                //TRANSACTIONS MODAL
                "description.placeholder": "Descripción: ej. &quot;Compra en supermercado&quot;",

                //OPERATION TYPES
                "EXPENSE": "Gasto",
                "INCOME": "Ingreso",

                //EXPENSE TYPES
                "CLOTHING": "Ropa",
                "EDUCATION": "Educación",
                "TRANSPORT": "Transporte",
                "TELCO": "Servicios de telefonía",
                "TRAVELS": "Viajes",
                "STREAMING_PLATFORMS": "Platformas de streaming",
                "PERSONAL_CARE": "Cuidado Personal",
                "GROCERIES": "Supermercado",
                "RESTAURANTS": "Restaurantes",
                "HEALTHCARE": "Salud",
                "SALARY": "Sueldo",
                "TAXES": "Impuestos",
                "CHARITY": "Caridad",
                "HOUSING": "Alojamiento",
                "HOUSEHOLD_SUPPLIES": "Gastos (Electricidad, agua,...)",
                "OTHER": "Otros"
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
