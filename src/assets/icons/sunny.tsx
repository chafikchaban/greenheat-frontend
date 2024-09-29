import React from 'react';

const SunnyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      {...props}
    >
      <defs>
        <filter id="blur" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style type="text/css">{`
          /* CLOUDS */
          @keyframes am-weather-cloud-1 {
            0% {
              transform: translate(-5px, 0px);
            }
            50% {
              transform: translate(10px, 0px);
            }
            100% {
              transform: translate(-5px, 0px);
            }
          }
          .am-weather-cloud-1 {
            animation-name: am-weather-cloud-1;
            animation-duration: 7s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes am-weather-cloud-2 {
            0% {
              transform: translate(0px, 0px);
            }
            50% {
              transform: translate(2px, 0px);
            }
            100% {
              transform: translate(0px, 0px);
            }
          }
          .am-weather-cloud-2 {
            animation-name: am-weather-cloud-2;
            animation-duration: 3s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          /* SUN */
          @keyframes am-weather-sun {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .am-weather-sun {
            animation-name: am-weather-sun;
            animation-duration: 9s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes am-weather-sun-shiny {
            0% {
              stroke-dasharray: 3px 10px;
              stroke-dashoffset: 0px;
            }
            50% {
              stroke-dasharray: 0.1px 10px;
              stroke-dashoffset: -1px;
            }
            100% {
              stroke-dasharray: 3px 10px;
              stroke-dashoffset: 0px;
            }
          }
          .am-weather-sun-shiny line {
            animation-name: am-weather-sun-shiny;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          /* MOON */
          @keyframes am-weather-moon {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(15deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .am-weather-moon {
            animation-name: am-weather-moon;
            animation-duration: 6s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            transform-origin: 12.5px 15.15px 0;
          }
          @keyframes am-weather-moon-star-1 {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .am-weather-moon-star-1 {
            animation-name: am-weather-moon-star-1;
            animation-delay: 3s;
            animation-duration: 5s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
          }
          @keyframes am-weather-moon-star-2 {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .am-weather-moon-star-2 {
            animation-name: am-weather-moon-star-2;
            animation-delay: 5s;
            animation-duration: 4s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
          }
          /* RAIN */
          @keyframes am-weather-rain {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -100;
            }
          }
          .am-weather-rain-1 {
            animation-name: am-weather-rain;
            animation-duration: 8s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .am-weather-rain-2 {
            animation-name: am-weather-rain;
            animation-delay: 0.25s;
            animation-duration: 8s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          /* SNOW */
          @keyframes am-weather-snow {
            0% {
              transform: translateX(0) translateY(0);
            }
            33.33% {
              transform: translateX(-1.2px) translateY(2px);
            }
            66.66% {
              transform: translateX(1.4px) translateY(4px);
              opacity: 1;
            }
            100% {
              transform: translateX(-1.6px) translateY(6px);
              opacity: 0;
            }
          }
          @keyframes am-weather-snow-reverse {
            0% {
              transform: translateX(0) translateY(0);
            }
            33.33% {
              transform: translateX(1.2px) translateY(2px);
            }
            66.66% {
              transform: translateX(-1.4px) translateY(4px);
              opacity: 1;
            }
            100% {
              transform: translateX(1.6px) translateY(6px);
              opacity: 0;
            }
          }
          .am-weather-snow-1 {
            animation-name: am-weather-snow;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .am-weather-snow-2 {
            animation-name: am-weather-snow;
            animation-delay: 1.2s;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .am-weather-snow-3 {
            animation-name: am-weather-snow-reverse;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          /* EASING */
          .am-weather-easing-ease-in-out {
            animation-timing-function: ease-in-out;
          }
        `}</style>
      </defs>
      <g filter="url(#blur)" id="day">
        <g transform="translate(32,32)">
          <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
            <g>
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(45)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(90)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(135)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(180)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(225)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(270)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <g transform="rotate(315)">
              <line
                fill="none"
                stroke="orange"
                strokeLinecap="round"
                strokeWidth="2"
                transform="translate(0,9)"
                x1="0"
                x2="0"
                y1="0"
                y2="3"
              />
            </g>
            <circle
              cx="0"
              cy="0"
              fill="yellow"
              r="5"
              stroke="orange"
              strokeWidth="3"
            />
          </g>
          <g className="am-weather-cloud-1" id="cloud-1" transform="translate(-10,-10)">
            <path
              fill="#E6E6E6"
              d="M6,26c0,0-2-6,0-8s6-4,8-4s6,2,8,0s4-6,8-6c0,0,4,0,4,4c0,0,0,2-1,3c1,0,2,1,2,2c0,1-1,2-2,2H4 c-2,0-4-2-4-4S4,26,6,26z"
            />
          </g>
          <g className="am-weather-cloud-2" id="cloud-2" transform="translate(10,0)">
            <path
              fill="#E6E6E6"
              d="M18,16c0,0-2-5-4-6s-5-2-6-2s-5,2-5,5c0,0-5,0-5,5s5,5,5,5h11c1,0,3-1,3-3S18,16,18,16z"
            />
          </g>
        </g>
      </g>
      <g id="night" filter="url(#blur)" style={{ display: 'none' }}>
        <g transform="translate(32,32)">
          <g className="am-weather-moon">
            <circle cx="12.5" cy="15.15" fill="lightgray" r="8" />
            <circle cx="9.5" cy="12.15" fill="white" r="8" />
          </g>
          <g>
            <circle
              className="am-weather-moon-star-1"
              fill="white"
              cx="20"
              cy="10"
              r="0.5"
            />
            <circle
              className="am-weather-moon-star-2"
              fill="white"
              cx="5"
              cy="0"
              r="0.5"
            />
            <circle fill="white" cx="32" cy="5" r="0.5" />
            <circle fill="white" cx="2" cy="30" r="0.5" />
            <circle fill="white" cx="30" cy="30" r="0.5" />
            <circle fill="white" cx="15" cy="15" r="0.5" />
          </g>
        </g>
      </g>
      <g id="rain" style={{ display: 'none' }}>
        <g className="am-weather-rain-1">
          <line
            x1="20"
            y1="25"
            x2="20"
            y2="33"
            fill="none"
            stroke="#A6A6A6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="25"
            x2="25"
            y2="33"
            fill="none"
            stroke="#A6A6A6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <g className="am-weather-rain-2">
          <line
            x1="15"
            y1="28"
            x2="15"
            y2="36"
            fill="none"
            stroke="#A6A6A6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="30"
            y1="28"
            x2="30"
            y2="36"
            fill="none"
            stroke="#A6A6A6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </g>
      <g id="snow" style={{ display: 'none' }}>
        <g>
          <circle className="am-weather-snow-1" cx="12" cy="38" r="1" fill="#A6A6A6" />
          <circle className="am-weather-snow-2" cx="20" cy="34" r="1" fill="#A6A6A6" />
          <circle className="am-weather-snow-3" cx="25" cy="40" r="1" fill="#A6A6A6" />
        </g>
      </g>
    </svg>
  );
};

export default SunnyIcon;
