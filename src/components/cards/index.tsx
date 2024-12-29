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
            <Card hour={hours}/>
            <Points/>
            <Card minute={minutes}/>
            <Points/>
            <Card second={seconds}/>
        </>
    );
}