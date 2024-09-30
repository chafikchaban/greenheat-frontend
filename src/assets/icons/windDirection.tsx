import React from 'react';


export type WindDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

interface WindDirectionIconProps {
    direction?: WindDirection;
}

const WindDirectionIcon: React.FC<WindDirectionIconProps> = ({
    direction = 'NE'
}) => {
    // Define rotations based on direction
    const rotations: { [key: string]: string } = {
        N: 'rotate-0',
        NE: 'rotate-45',
        E: 'rotate-90',
        SE: 'rotate-135',
        S: 'rotate-180',
        SW: 'rotate-225',
        W: 'rotate-270',
        NW: 'rotate-315',
    };

    // Tailwind rotation class based on the provided direction
    const rotationClass = rotations[direction] || rotations['NE'];

    return (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={rotationClass}
        >
            <path
                d="M18.9762 5.5914L14.6089 18.6932C14.4726 19.1023 13.8939 19.1023 13.7575 18.6932L11.7868 12.7808C11.6974 12.5129 11.4871 12.3026 11.2192 12.2132L5.30683 10.2425C4.89772 10.1061 4.89772 9.52743 5.30683 9.39106L18.4086 5.0238C18.7594 4.90687 19.0931 5.24061 18.9762 5.5914Z"
                stroke="#464455"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default WindDirectionIcon;
