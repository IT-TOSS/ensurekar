import exp from "constants";

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message?: string;
    origin: string;
    phone?: string;
   

  }

  export type { ContactForm };