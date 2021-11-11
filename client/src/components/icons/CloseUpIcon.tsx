import React from 'react';
import type { iconPropsType } from '@components/icons';

const CloseUpIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: iconPropsType): React.ReactElement => {
  return (
    <svg
      className={className ?? ''}
      width={width ?? 38}
      height={height ?? 41}
      viewBox="0 0 38 41"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.55292 14.6836C7.6178 15.8751 6.28132 18.0673 6.55465 20.3431C6.68558 21.4334 6.90184 22.5388 7.37729 23.5454C7.94001 24.7368 8.58703 25.8399 9.2824 26.9692C10.5962 29.1029 12.9887 29.7768 15.36 29.0252C17.0981 28.4742 18.6535 27.7807 20.2087 26.8231C20.7383 26.497 21.469 26.1943 21.756 25.6033C21.9702 25.1623 22.0903 24.5401 22.1959 24.0555C22.647 21.9859 23.349 19.443 22.1423 17.4834C21.4826 16.412 20.8908 15.3645 20.0172 14.4563C19.7039 14.1306 19.3335 13.8149 18.9792 13.5341C18.8686 13.4465 18.6489 13.3606 18.5122 13.3225C18.1845 13.2311 18.0196 12.9519 17.6819 12.9167C17.4186 12.8893 16.8139 12.6792 16.5758 12.5531C16.3803 12.4495 16.1805 12.5509 15.9826 12.4946C15.8377 12.4534 15.5689 12.3452 15.4257 12.3442C14.7896 12.34 14.0603 12.4763 13.4384 12.6045C12.6993 12.7567 11.9254 12.7626 11.2115 13.0412C10.6695 13.2527 10.1491 13.6896 9.65181 13.9958"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.3047 28.7268C18.5911 29.0575 18.8319 29.4654 19.1309 29.7388C19.3778 29.9644 19.7551 29.6816 19.9876 29.4144C20.3032 29.0517 20.8661 28.9615 21.1785 28.6056C21.4497 28.2967 21.1238 28.0455 20.9329 27.7354C20.7622 27.4582 20.4791 26.6912 20.5015 27.3741"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.3928 31.0757C19.1561 30.6056 19.9307 30.0466 20.5659 29.4299C20.8149 29.1882 21.2151 29.0244 21.5102 28.8427C21.9699 28.5596 22.1935 28.3522 22.4075 29.0273C22.8491 30.4206 23.8062 31.7231 24.5711 32.9652C25.0064 33.6722 25.4418 34.3792 25.8772 35.0862C26.0727 35.4038 26.3316 35.59 25.9577 35.8202C25.6321 36.0207 25.3614 36.2818 25.0448 36.4868C24.7555 36.6742 24.5109 37.007 24.172 37.1055C23.7345 37.2326 23.2282 37.3965 22.8388 37.6362C22.6689 37.7408 22.239 38.1495 22.0826 37.9162C21.9435 37.7087 21.8197 37.4892 21.6887 37.2765C21.0119 36.1774 20.4143 35.0373 19.7328 33.9304C19.4428 33.4595 19.2466 32.9713 18.9559 32.4992C18.799 32.2444 18.7219 31.9701 18.5782 31.7161C18.3799 31.3655 18.5754 31.6463 18.7369 31.8041"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.0338 31.0989C19.364 31.6585 19.6385 32.2505 19.9791 32.8036C20.07 32.9512 20.1388 33.0693 20.1656 32.8049C20.1988 32.4768 20.1451 32.1579 20.0216 31.8546C19.9974 31.7953 19.7354 31.2124 19.7698 31.1913C19.8603 31.1355 20.586 32.4907 20.7007 32.6088C20.7326 32.6417 20.7741 32.0288 20.7592 31.9402C20.7192 31.704 20.4832 31.3786 20.5413 31.1341C20.6181 30.8113 20.836 31.6157 20.8407 31.6579C20.8581 31.8146 20.8112 32.267 20.8868 32.1286C21.0345 31.858 20.9574 31.4391 20.8985 31.1579C20.8612 30.9799 20.8476 30.7916 20.8456 30.6101C20.8441 30.4802 21.0483 30.8821 21.0516 30.9824C21.0692 31.5182 21.4337 31.5199 21.5152 30.9813C21.6411 30.1506 21.8805 31.0628 22.0415 31.4872C22.2861 32.1317 23.2747 33.9516 22.9302 33.3545C22.6788 32.9188 22.5247 32.4116 22.3266 31.9501C22.1288 31.4894 21.8274 31.0135 21.7599 30.5114C21.7276 30.2711 22.1083 31.0018 22.1564 31.0799C22.7954 32.1177 23.3412 33.1645 23.8629 34.2661C24.039 34.6378 24.2204 35.0064 24.3878 35.3823C24.4287 35.4743 24.7159 35.9359 24.6903 36.0434C24.6606 36.1684 24.5556 35.8245 24.4882 35.7151C24.2809 35.3784 24.0736 35.0418 23.8663 34.7051C23.4057 33.9571 22.1574 31.6384 22.6391 32.3729C22.8728 32.7292 23.0869 33.1001 23.3103 33.4629C23.4827 33.7428 23.6937 34.1844 23.3295 33.6543C22.8235 32.9176 21.5282 30.591 21.8281 31.4329C22.161 32.3671 22.8304 33.487 22.8754 34.491C22.8891 34.7962 22.4921 34.0119 22.3413 33.7462C21.9284 33.0186 21.62 32.2448 21.18 31.5302C20.7797 30.8802 21.25 31.9317 21.3187 32.0948C21.6077 32.7809 21.8543 33.486 22.131 34.1775C22.2357 34.4393 22.6031 35.1988 22.4553 34.9587C22.2083 34.5575 21.9612 34.1563 21.7142 33.7551C21.6475 33.6467 21.2668 33.0169 21.3238 33.1306C21.5868 33.6544 21.7921 34.212 22.0156 34.7535C22.1282 35.0266 22.2411 35.2895 22.3959 35.5409C22.6029 35.877 22.0409 34.8354 21.8481 34.491C21.6354 34.111 20.7666 32.8587 21.2661 34.0077C21.5308 34.6166 22.485 36.3643 22.1369 35.799C21.8563 35.3432 20.9392 34.0395 21.1526 34.5304C21.4412 35.1942 21.931 35.8571 22.3353 36.4604C22.5237 36.7416 22.7413 35.8506 22.7353 35.715C22.7184 35.3401 23.0095 35.5051 23.2092 35.5798C23.5276 35.6988 23.6701 35.5742 23.8724 35.9028C24.1196 36.3042 23.5685 36.1953 23.3357 36.181C22.9656 36.1583 22.7697 36.1195 23.2551 36.1726C23.5059 36.2001 23.6268 35.8668 23.6334 35.6843"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21.7318 29.542C21.4189 29.7346 20.5718 30.4107 20.7907 30.1156C20.9336 29.923 21.1043 29.8238 21.3063 29.6994"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.40211 17.4929C8.86206 18.8831 8.9601 20.1796 9.50069 21.5648C9.62649 21.8872 9.60563 22.4925 9.55511 22.8314C9.50992 23.1346 9.91117 23.5793 10.065 23.8292C10.2741 24.1687 10.4831 24.5081 10.6921 24.8476C10.8872 25.1644 11.2287 25.3796 11.4034 25.6633C11.754 26.2327 12.5904 26.5528 13.2162 26.741C13.9318 26.9563 14.3743 26.3085 15.0723 26.2772C15.374 26.2637 15.7328 25.9406 16.0406 25.8609C16.4413 25.7571 16.942 25.8036 17.3134 25.675C18.1682 25.3791 18.9883 24.7958 19.4968 24.0461C19.6338 23.8442 19.7582 23.6469 19.9105 23.4547C20.0539 23.2738 19.996 23.0778 20.1069 22.9159C20.369 22.5333 20.2517 22.0051 20.5051 21.6492C20.7138 21.356 20.6531 20.6522 20.6906 20.3103C20.726 19.9864 20.6306 19.5618 20.5268 19.2619C20.3804 18.8391 20.4217 18.4693 20.1958 18.0553C20.0267 17.7452 19.9472 17.3121 19.7617 17.0109C19.5527 16.6714 19.3436 16.3319 19.1346 15.9924C18.9219 15.6471 18.5731 15.5086 18.3476 15.2234C18.2295 15.074 17.5784 14.7924 17.3887 14.769C17.0388 14.7258 16.6303 14.527 16.3373 14.3717C15.6281 13.996 14.696 14.2318 14.0012 14.452C12.6944 14.8662 11.6139 15.1945 10.5719 16.0936C10.242 16.3782 9.76031 16.6471 9.5289 17.0202C9.34002 17.3247 8.85326 17.6096 8.88938 18.0176"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.9502 21.4611C11.7445 20.8718 11.5663 20.0846 11.7136 19.465C11.8227 19.0062 12.0716 18.3565 12.4913 18.0981"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.4105 9.04729C11.3231 8.0592 11.2827 7.0911 10.9373 6.158C10.8456 5.9101 10.6076 5.51136 10.7567 5.27088"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15.7814 8.3411C16.1136 7.67989 16.44 7.1757 16.9307 6.6351C17.3092 6.21819 17.6565 5.82503 17.8955 5.32708C17.9896 5.1311 18.4272 4.41101 18.5137 4.46468"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20.7007 10.2221C20.8825 9.09216 21.8437 8.43278 22.6932 7.76474C22.8586 7.63462 23.6282 7.19764 23.608 6.96928"
        stroke={stroke ?? 'black'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseUpIcon;