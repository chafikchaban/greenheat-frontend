import React from 'react';

const PinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 100 100"
            {...props}
        >
            <path d="M52,96c-1.736,0-3.368-0.676-4.596-1.904c-3.139-3.14-30.659-31.284-30.627-52.478	C16.807,21.509,35.014,8,52,8c16.984,0,35.191,13.509,35.224,33.618c0.033,21.241-27.492,49.347-30.63,52.481	C55.362,95.326,53.732,96,52,96z" opacity=".35"></path><path fill="#f2f2f2" d="M50,94c-1.736,0-3.368-0.676-4.596-1.904c-3.139-3.14-30.659-31.284-30.627-52.478	C14.807,19.509,33.014,6,50,6c16.984,0,35.191,13.509,35.224,33.618c0.033,21.241-27.492,49.347-30.63,52.481	C53.362,93.326,51.732,94,50,94z"></path><path fill="#f4665c" stroke="#40396e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M50,12.5c-14.043,0-28.699,11.151-28.723,27.128C21.248,58.746,50,87.5,50,87.5s28.754-28.714,28.723-47.872	C78.698,23.675,64.043,12.5,50,12.5z"></path><circle cx="50" cy="40.147" r="13.147" fill="#f2f2f2"></circle>
        </svg>
    );
};

export default PinIcon;
