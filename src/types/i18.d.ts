import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        title: string;
        welcome: {
          iam: string;
          titles: string;
        };
        menu: string,
        languege:{
          russion: string,
          english: string,
          tajik: string,
        }
        about: string;
        header: {
          hello: string;
          skills: string;
          contact: string;
          portfolio: string;
          education: string;
          experience: string;
        };
        data: {
          phone: string;
          email: string;
          addres: {
            for: string;
            in: string;
          };
          social: string;
        };
      };
    };
  }
}