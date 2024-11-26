import { createI18n } from 'vue-i18n'

const savedLocale = localStorage.getItem('locale') || 'es'

export const i18n = createI18n({
    locale: savedLocale, // Usar el idioma almacenado
    fallbackLocale: 'en',
    messages: {
        en: {
            message: {
                appBar:{
                    home: 'Home',
                    portfolio: 'Portfolio',
                    contact: 'Contact',
                },
                home: {
                    title: 'Hello, I\'m ',
                    title2: 'A Front-end Developer.',
                    p:'I build user-friendly web applications and web pages on the client-side. The technologies I use the most are HTML, CSS, JS, Typescript, Angular and Vue.',
                    portfolioTitle: 'Completely responsive web apps and pages',
                    portfolioP: 'I create custom solutions with designs adaptable to a wide variety of devices. My goal is to deliver products with good usability and pleasant to use.',
                    portfolioP2: 'Here is some of my work.',
                    resumeBtn: 'Download my Resume',
                    detailsBtn:'view details',
                    portfolioBtn: 'view all'
                },
                contact: {
                    title: 'Let\'s work together!!',
                    subtitle: 'And make your ideas come true.',
                    p: 'Leave a message...',
                    p2: '...And follow me:',
                    btn: 'Send',
                    placeholderName: 'Name',
                    placeholderMessage: 'Message',
                },
                portfolio: {
                    1: {
                        Title: 'TurnosApp Landing Page',
                        Subtitle: 'Landing Page to advertise and sell software products',
                        Description: 'Built in Angular, 100% responsive.',
                    },
                    2: {
                        Title: 'TURNOSApp',
                        Subtitle: 'Appointments management, customer registration, payment registration and more.',
                        Description: 'Mobile app built in Angular. It has two versions, a generic one designed for professionals in any field and one specially designed for gyms. They allow the clients manage their appointments or management performed by the administrator. It also has sections for information, announcements and payment registration.',
                    },
                    3: {
                        Title: 'Appointments App',
                        Subtitle: 'Web application for Nutritionist office management',
                        Description: 'Built in Angular, 100% responsive. It is connected to an external database through an API for information storage, which makes it possible to use it from any device by logging in with a username and password.',
                    },
                    4: {
                        Title: 'Poker App and Retro App',
                        Subtitle: 'Tools for scrum poker planning and retrospective ceremonies.',
                        Description: 'Desktop app built in Angular. It is connected to an external database through an API for information storage, which makes it possible to use it from any device by logging in with a username and password.',
                    },
                    5: {
                        Title: 'Cancian Landing',
                        Subtitle: 'Landing page dedicated to advertise lots of land for sale.',
                        Description: 'Built in Angular, 100% responsive. It is connected to an external database through an API for information request.',
                    },
                },
                description: {
                    user: 'User',
                    password: 'Password',
                },
                gallery: {
                    alt: 'Picture of the proyect'
                },
                buttons: {
                    accept: 'Accept',
                    cancel: 'Cancel',
                    gallery:'{type} Gallery',
                },
            }
        },
        es: {
            message: {
                appBar:{
                    home: 'Inicio',
                    portfolio: 'Portafolio',
                    contact: 'Contacto',
                },
                home: {
                    title: 'Hola, soy ',
                    title2: 'Desarrolladora Front-end.',
                    p: 'Mi especialidad es el desarrollo de aplicaciones web y páginas web del lado del cliente. Las tecnologías que más utilizo son HTML, CSS, JS, Typescript, Angular y Vue.',
                    portfolioTitle: 'Aplicaciones y páginas web completamente responsivas',
                    porfolioP: 'Creo soluciones a medida con diseños adaptables a una gran variedad de dispositivos. Mi objetivo es entregar productos con buena usabilidad y agradables al uso.',
                    portfolioP2: 'Estos son algunos de mis trabajos.',
                    resumeBtn: 'Descargar CV',
                    detailsBtn: 'Ver detalles',
                    portfolioBtn: 'VER PORTFOLIO COMPLETO',
                },
                contact: {
                    title: 'Trabajemos juntos!!',
                    subtitle: 'Hagamos que tus ideas se hagan realidad.',
                    p: 'Dejame un mensaje...',
                    P2: '...Y seguime en:',
                    btn: 'Enviar',
                    placeholderName: 'Nombre',
                    placeholderMessage: 'Mensaje',
                },
                portfolio: {
                    1: {
                        Title: 'TurnosApp Landing Page',
                        Subtitle: 'Landing Page para promoción y venta de productos de software.',
                        Description: 'Página web realizada en Angular, 100% resposiva.',
                    },
                    2: {
                        Title: 'TURNOSApp',
                        Subtitle: 'Aplicación de gestión de turnos, registro de clientes, registro de pagos y más.',
                        Description: 'Realizada en Angular para mobile. Cuenta con dos versiones, una genérica pensada para profesionales de cualquier rubro y una especialmente diseñada para gimnasios. Permiten la autogestión de turnos por parte de los clientes o manual por el administrador. Cuenta además con secciones de información, anuncios y registro de pagos.',
                    },
                    3: {
                        Title: 'Appointments App',
                        Subtitle: 'Aplicación Web para gestión de consultorio de Nutrición',
                        Description: 'Realizada en Angular, 100% resposiva. Está conectada a una base de datos externa para el almacenamiento de información, lo que posibilita su uso desde cualquier dispositivo ingresando con nombre de usuario y contraseña.',
                    },
                    4: {
                        Title: 'Poker App y Retro App',
                        Subtitle: 'Herramientas para ceremonias de scrum poker planning y retrospective.',
                        Description: 'Realizada en Angular para desktop. Está conectada a una base de datos externa para el almacenamiento de información, lo que posibilita su uso desde cualquier dispositivo ingresando con nombre de usuario y contraseña.',
                    },
                    5: {
                        Title: 'CanCian Landing Page',
                        Description: 'Built in Angular, 100% responsive.',
                        Subtitle: 'Landing page publicitaria para ventas de un Loteo de terrenos. Conectada a una base de datos externa a través de una API para obtener la información.',
                    },
                },
                description: {
                    user: 'Usuario',
                    password: 'Contraseña',
                },
                gallery: {
                    alt: 'Imagen del proyecto'
                },
                buttons: {
                    accept: 'Aceptar',
                    cancel: 'Cancelar',
                    gallery:'Gallería {type}',
                },
            }
        }
    }
})