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
    text:string;
    description:string;
    value:number;
    side: "left" | "rigth"
}