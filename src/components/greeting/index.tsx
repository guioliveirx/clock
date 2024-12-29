type GreetingProps = {
    hours: number;
}

export function Greeting ( {hours}: GreetingProps) {

    return (
        <p className="md:text-5xl text-3xl mt-10 text-teal-50">
            {hours >= 4 && hours < 12 && "Bom Dia ☁️"}
            {hours >= 12 && hours < 18 && "Boa Tarde ☀️"}
            {hours >= 18 || hours < 4 && "Boa Noite 🌙"}
        </p>
    ) 
}