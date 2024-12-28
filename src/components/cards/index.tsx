import { useState, useEffect } from "react";
import { Card } from "../card";

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
                <p className="text-center">{hours}</p>
            </Card>
            <span className="text-8xl">:</span>
            <Card>
                <p className="text-center">{minutes}</p>
            </Card>
            <span className="text-8xl">:</span>
            <Card>
                <p className="text-center">{seconds}</p>
            </Card>
        </>
    );
}