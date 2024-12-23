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
        javascript: {
          edplace:string;
          month: string;
          obou:string;
          for:string
        };
        errors:{
          er:string
          koremail:string
          emailer:string
          messege:string
          but:string
        }
        portfo:string
        kurs: string;
        react: {
          edplace:string;
          month: string;
          obou:string;
          for:string
        }
        menu: string,
        languege:{
          russion: string,
          english: string,
          tajik: string,
        }
        resume:string
        skills: {
          react:{
            rt:string,
            rt2:string
          };
          javascript:{js:string};
          typescript:{
            ts:string
          };
          redux:{
            rd:string
          };
          git:{
            gt:string
          };
          html:{
            htmls:string
          };
        };
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