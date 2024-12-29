import { useState, useEffect } from "react";
import { Card } from "../card";
import { Points } from "../points";

export function Cards() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return (
        <>
            <Card>
                <div className="flex justify-center items-center md:h-56 md:w-48 h-40 w-32 bg-teal-100 rounded shadow-xl">
                    <p className="text-center text-teal-900 md:text-9xl text-7xl ">
                        {hours}
                    </p>
                </div>
            </Card>
            <Points />
            <Card>
                <div className="flex justify-center items-center md:h-56 md:w-48 h-40 w-32 bg-teal-100 rounded shadow-xl">
                    <p className="text-center text-teal-900 md:text-9xl text-7xl ">
                        {minutes}
                    </p>
                </div>
            </Card>
            <Points />
            <Card>
                <div className="justify-center items-center md:h-56 md:w-48 h-40 w-32 bg-teal-100 rounded shadow-xl sm:flex hidden">
                    <p className="text-center text-teal-900 md:text-9xl text-7xl">
                        {seconds}
                    </p>
                </div>
            </Card>
        </>
    );
}