
interface IEmail {
    nombre: string,
    correo: string,
    numero: string,
    empresa: string,
    mensaje: string
}

export interface IBlog {
    _id: string;
    title: string;
    keytitle: string;
    pretitle: string;
    subtitle: string;
    content: string;
    img: string;
    date: string;
    section: string;
    tags: string[]
  }