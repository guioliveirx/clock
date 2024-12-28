import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
}

export function Card ( {children}: CardProps) {
    return(
        <div className="flex justify-center items-center h-56 w-48 bg-teal-100 rounded text-teal-900 text-9xl shadow-xl">
            {children}
        </div>
    );
}