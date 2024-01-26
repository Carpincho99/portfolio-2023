import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Nav: {
            me: "Me",
            skills: "Skills",
            educ: "Education",
            work: "Work",
            contact: "Contact"
          },
          Hero: {
            hi: "Hi, I'm",
            student: "Electrical Ing. student and",
            devJr: "FrontEnd developer Jr.",
            contactMe: "Contact me"
          },
          AboutMe: {
            p1: "Mi name is Ezequiel Giorgis, I'm 21 years old and I'm from Córdoba Argentina. I am passionate about sports and learning new things",
            p2: "Since I was little, the operation of computers and electronic devices has caught my attention. This curiosity led me to be studying electronic engineering at the National Technological University",
            p3: "On the other hand, as a self-taught person, I love learning about programming in general. I am fascinated by the idea of creating virtual experiences for the user, whether in the form of web pages or mobile applications.",
            p4: "Finally, I consider myself flexible in the face of innovations in such a changing world, which is why I am always looking to integrate both interests: programming and electronics, in avant-garde products on and off screens.",
          },
          Skils: {
            electronics: "",
            programming: "I mainly use ReactJs and Tailwind to build beautiful website, like this portfolio. Also, I use Flutter as a tool for creating mobiles app. Some other tools that I am constantly working with are Git/GitHub (for version control) and Linux as my daily OS."
          },
          Education: {
            electronicStudent: {
              title: "Electronics ingenier student",
              place: "UTN-FRC",
              summary: "Today I am studying the degree course in Electronic Engineering, taught by the National Technological University Regional Faculty of Córdoba. Currently, I am going through the fourth curricular year of said degree.",
            },
            primarySecondary: {
              title: "Primario - Secundario",
              place: "Colegio San José",
              summary: "In 2020 I finished my secondary studies at Colegio San José, located in the city of Bell Ville, Córdoba. Where I graduated with a bachelor's degree in Natural Sciences, being the first escort of the National Flag",
            },
            argProgram: {
              title: "Argentina Programa",
              place: "Online",
              summary: "As part of my extracurricular training, I completed the \"Argentina Programa\" course, consisting of two stages: \"Se Programar\" and \"Yo programo\". Where in both I acquired knowledge in creating web pages."
            }
          },
          Work: {
            portfolio: {
              title: "this.portfolio",
              summary: "This website was created with React and tailwind. ThreeJs was used for the 3D render and animations."
            },
          },
          Contact: {
            name: "Name",
            email: "Email",
            message: "Message",
            btn: "Send",
          },
        }
      },
      es: {
        translation: {
          Nav: {
            me: "Yo",
            skills: "Habilidades",
            educ: "Educación",
            work: "Trabajos",
            contact: "Contacto"
          },
          Hero: {
            hi: "Hola, soy",
            student: "Estudiante Ing. Electronica, y",
            devJr: "Desarrollador FrontEnd Jr.",
            contactMe: "Contacto"
          },
          AboutMe: {
            p1: "Mi nombre es Ezequiel Giorgis, tengo 21 años y soy de Córdoba, Argentina. Me apasiona el deporte y aprender cosas nuevas.",
            p2: "Desde pequeño me ha llamado la atención el funcionamiento de las computadoras y aparatos electrónicos. Esta curiosidad me llevo a estar estudiando, a día de hoy, ingeniería electrónica en la Universidad  Tecnológica Nacional (UTN-FRC).",
            p3: "Por otra parte, de manera autodidacta, me encanta aprender sobre programación en general. Me fascina la idea de crear experiencias virtuales para el usuario, ya sea en forma de páginas web o aplicaciones mobiles.",
            p4: "Por último me consideró flexible ante las innovaciones de un mundo tan cambiante, por lo que siempre estoy en busca de integrar ambos intereses: programación y electrónica, en productos vanguardistas fuera y dentro de las pantallas.",
          },
          Skils: {
            electronics: "",
            programming: "Principalmente utilizo React y Tailwind para crear fascinantes paginas web, como este portfolio. Además, hago uso de Flutter como herramienta para la creación de aplicaciones mobiles. Otras herramientas que empleo constantemente son GIT y Linux."
          },
          Education: {
            electronicStudent: {
              title: "Estudiante ingeniería electrónica",
              place: "UTN-FRC",
              summary: "A día de hoy estoy transcurriendo el estudio de la carrera de grado de Ingeniería en Electrónica, dictada por la Universidad Tecnológica Nacional Facultad Regional de Córdoba. Actualmente, me encuentro transitando el cuarto año curricular de dicha carrera.",
            },
            primarySecondary: {
              title: "Primario - Secundario",
              place: "Colegio San José",
              summary: "En el año 2020 di cierre a mis estudios secundarios en el Colegio San José, ubicado en la ciudad de Bell Ville, Córdoba. Donde egresé con un bachiller en Ciencias Naturales, siendo primer escolta de la Bandera Nacional",
            },
            argProgram: {
              title: "Argentina Programa",
              place: "Online",
              summary: "Como parte de mi formación extracurricular, completé el plan de estudios Argentina Programa, constando este de dos etapas: Se Programar y Yo Programa. Donde en ambas adquirí conocimientos en creación de paginas web."
            }
          },
          Work: {
            portfolio: {
              title: "this.portfolio",
              summary: "Este sitio web fue creado con React y tailwind. ThreeJs fue usado para el renderizado 3D."
            },
          },
          Contact: {
            name: "Nombre",
            email: "Email",
            message: "Mensage",
            btn: "Enviar",
          },
        }
      },
    }
  });

export default i18n;
