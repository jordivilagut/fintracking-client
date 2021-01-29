
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
                "app.subtitle": "Finance Made Easy",
                "app.subtitle.old": "Pocket Finance Advisor",

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
                "copyright.text": "© 2021 Fintracking, Inc. All rights reserved",

                //USER ACCESS
                "log.in": "Log In",
                "log.in.with.credentials": "Log In with Credentials",
                "log.out": "Log Out",
                "sign.up": "Sign Up",
                "create.account": "Create Account",
                "have.account": "I already have an account",
                "dont.have.account": "I don't have an account",

                //HOMEPAGE
                "app.welcome": "Welcome to Fintracking",
                "get.started": "Get Started",
                "how.it.works": "How it Works",
                "how.it.works.description": "Do you know how much you spend on food each month? " +
                    "How much do you spend on Netflix each year? Have you ever wondered how long it " +
                    "would take you to afford your dream home? Fintracking answers all these questions, " +
                    "it takes your monthly expenses and income and it helps you design a budget that will" +
                    "maximize your savings by the end of the year.",
                "our.products": "Tailored Services",
                "our.products.description": "Our services are tailored to satisfy a wide range of users. " +
                    "Our Investor™ plan is what you need in order to take control of your household finances. " +
                    "The Start-Up™ plan, for freelancers and small organisations and the " +
                    "Enterprise™ plan, for larger corporations are under development and will be offered soon.",
                "homepage.closure": "If you've got any inquiries, or need an " +
                    "special product, please get in touch. We'll be happy to help!",

                //APP FEATURES
                "app.feature.expenses": "Control Your Expenses",
                "app.feature.budget": "Generate a Budget",
                "app.feature.investments": "Track Your Investments",
                "app.feature.expenses.description": "Register your daily expenses and income",
                "app.feature.budget.description": "With your data, a budget will be generated",
                "app.feature.investments.description": "Keep track of your investments and study their profitability",

                //DASHBOARD
                "current.funds": "Current Funds",
                "add.transaction": "Add Transaction",
                "add.item": "Add Item",
                "new.transaction": "New Transaction",
                "this.month": "This Month",
                "add.current.funds": "Add Current Funds",
                "edit.current.funds": "Edit Current Funds",

                //TRANSACTIONS MODAL
                "description.placeholder": "Description: e.g. 'Grocery Shopping'",

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
                "app.subtitle": "Finance Made Easy",
                "app.subtitle.old": "Pocket Finance Advisor",

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
                "copyright.text": "© 2021 Fintracking, Inc. Todos los derechos reservados",

                //USER ACCESS
                "log.in": "Acceso",
                "log.in.with.credentials": "Acceso con credenciales",
                "log.out": "Cerrar Sesión",
                "sign.up": "Registro",
                "create.account": "Crear cuenta",
                "have.account": "Ya tengo una cuenta",
                "dont.have.account": "No tengo una cuenta",

                //HOMEPAGE
                "app.welcome": "Bienvenido a Fintracking",
                "get.started": "Empezar",
                "how.it.works": "Como funciona",
                "how.it.works.description": "¿Controlas cuanto gastas en comida al mes? " +
                    "¿Sabes cuanto te dejas cada año en Netflix? ¿Has pensado alguna vez en cuanto " +
                    "tardarías en ahorrar lo suficiente para pagar la entrada de la casa de tus sueños? " +
                    "Fintracking responde a todas estas preguntas. " +
                    "La aplicación estudia tus ganancias y gastos y diseña un presupuesto para que " +
                    "puedas maximizar tus ahorros a final del año.",
                "our.products": "Servicio a tu medida",
                "our.products.description": "Ofrecemos servicios para satisfacer a distintios tipos " +
                    "de usuario. Nuestro plan Investor™ es lo que necesitas para tomar el control " +
                    "de tus finanzas personales. Los planes Start-Up™, para autónomos y Pymes, y " +
                    "Enterprise™, para organizaciones con una estructura más compleja, están en " +
                    "desarrollo y se ofreceran próximamente",
                "homepage.closure": "Si tienes cualquier duda sobre nuestros planes, o necesitas un " +
                    "producto a medida, ponte en contacto con nosotros y estaremos encantados de ayudarte.",

                //APP FEATURES
                "app.feature.expenses": "Controla tus gastos",
                "app.feature.budget": "Genera un presupuesto",
                "app.feature.investments": "Analiza tus inversiones",
                "app.feature.expenses.description": "Registra tus gastos y ganancias diários",
                "app.feature.budget.description": "Con los datos introducidos, se genera tu presupuesto",
                "app.feature.investments.description": "Introduce tus inversiones y estudia su rentabilidad",

                //DASHBOARD
                "current.funds": "Fondos actuales",
                "add.transaction": "Añadir transacción",
                "add.item": "Añadir ítem",
                "new.transaction": "Nueva transacción",
                "this.month": "Mes actual",
                "add.current.funds": "Añadir Fondos",
                "edit.current.funds": "Editar Fondos",

                //TRANSACTIONS MODAL
                "description.placeholder": "Descripción: ej. 'Compra en supermercado'",

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
