import { ReactNode } from "react";

export interface IndexProps {
    isOpen: ReactNode;
    setModalOpen: any;
    className?: string;
    children: ReactNode
}