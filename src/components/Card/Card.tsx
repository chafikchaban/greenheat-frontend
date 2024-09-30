export interface CardProps extends React.ComponentProps<'div'> {
    title: string;
}

export function Card({ title, children, className}: CardProps) {
    return (
        <div className={`w-full border border-gray-200 rounded p-8 ${className}`}>
            <h3 className="font-bold m-8">{title}</h3>
            {children}
        </div>
    )
}