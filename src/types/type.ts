import { ReactNode } from "react";

export interface forClick {
    handleClick: (e: React.MouseEvent) => void
    handleClose: (e: React.MouseEvent) => void
}
export interface forheder {
    isSidebarOpen: boolean,
    setSidebarOpen: () => void
    setOpens: () => void
}
export interface ICard {
    text: string;
    description: string;
    value: number;
    side: "left" | "rigth"
}
export interface Item {
    text: string;
    month: string;
    fors: string,
    edplace: string
    obou: string,
}
export interface button {
    children: ReactNode
    className: string
}
export interface FormData {
    name: string;
    email: string;
    message: string;
};

export interface ForFoto {
    foto: string;
    foto1: string;
    foto2: string;
    foto3:string;
    foto4:string;
    foto5:string;
    foto6:string;
    foto7:string;
    foto8:string;
    foto9:string;
    foto10:string;
}