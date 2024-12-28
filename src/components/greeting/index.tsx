type GreetingProps = {
    hours: number;
}

export function Greeting ( {hours}: GreetingProps) {

    return (
        <p className="text-5xl mt-10 text-teal-50">
            {hours >= 6 && hours < 12 && "Bom Dia ☁️"}
            {hours >= 12 && hours < 18 && "Boa Tarde ☀️"}
            {hours >= 18 && hours < 6 && "Boa Noite 🌙"}
        </p>
    ) 
}