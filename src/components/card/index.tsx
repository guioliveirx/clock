type CardProps = {
    hour?: string;
    minute?: string;
    second?: string;
}

export function Card({ hour, minute, second }: CardProps) {
    return (
        <div className="flex justify-center items-center h-56 w-48 bg-teal-100 rounded shadow-xl">
            <p className="text-center text-teal-900 text-9xl ">
                {hour}
                {minute}
                {second}
            </p>
        </div>
    );
}