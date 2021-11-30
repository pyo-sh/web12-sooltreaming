import React from 'react';
import type { iconPropType } from '@ts-types/components/icons';

const UpdownGameIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: iconPropType): React.ReactElement => {
  return (
    <svg
      width={width ?? 30}
      height={width ?? 30}
      viewBox="0 0 248 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M168.313 142.649C203.786 142.649 232.543 113.892 232.543 78.4182C232.543 42.9447 203.786 14.1877 168.313 14.1877C132.839 14.1877 104.082 42.9447 104.082 78.4182C104.082 113.892 132.839 142.649 168.313 142.649Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M192.116 34.6714C191.399 34.6714 190.682 34.3969 190.135 33.8506C189.04 32.7552 189.04 30.9848 190.135 29.8894L201.069 18.9555C202.165 17.8602 203.935 17.8602 205.031 18.9555C206.126 20.0509 206.126 21.8242 205.031 22.9167L194.097 33.8506C193.55 34.3997 192.833 34.6714 192.116 34.6714Z"
        fill="black"
      />
      <path
        d="M206.599 49.1548C205.882 49.1548 205.165 48.8802 204.619 48.334C203.523 47.2386 203.523 45.4681 204.619 44.3728L216.337 32.6545C217.432 31.5592 219.203 31.5592 220.298 32.6545C221.393 33.7499 221.393 35.5204 220.298 36.6157L208.58 48.334C208.034 48.883 207.316 49.1548 206.599 49.1548Z"
        fill="black"
      />
      <path
        d="M221.082 63.6379C220.365 63.6379 219.648 63.3633 219.102 62.8171C218.007 61.7217 218.007 59.9484 219.102 58.8559L225.668 52.2922C226.764 51.1969 228.534 51.1969 229.63 52.2922C230.725 53.3876 230.725 55.1608 229.63 56.2534L223.063 62.8171C222.517 63.3661 221.8 63.6379 221.082 63.6379Z"
        fill="black"
      />
      <path
        d="M149.002 163.174C147.047 163.174 145.137 162.463 143.697 161.023L92.022 109.351C88.9993 106.328 89.1898 101.219 92.4422 97.9635L120.016 70.3921C121.546 68.8626 123.543 67.9521 125.639 67.8344C127.799 67.6916 129.919 68.4872 131.404 69.9719L131.639 70.2044C136.525 58.8448 126.199 32.2735 113.122 17.8855L111.699 16.3167L112.82 14.5182C116.7 8.28789 121.185 5.09989 126.535 4.76653C135.573 4.19784 146.596 12.1986 161.287 29.8615L186.589 4.47798C188.869 2.19204 191.912 0.937012 195.153 0.937012C198.394 0.937012 201.436 2.19204 203.719 4.47518L205.033 5.78904C207.314 8.06938 208.571 11.1117 208.571 14.3557C208.571 14.4958 208.569 14.6387 208.563 14.7787C212.331 14.2044 216.267 15.4567 218.987 18.1768L220.301 19.4907C222.881 22.068 224.052 25.5305 223.814 28.909C227.355 28.5 231.047 29.6626 233.759 32.3743L235.073 33.6882C239.222 37.8371 239.726 44.2775 236.583 48.981C238.863 49.4264 241.04 50.533 242.805 52.2951L244.118 53.6089C246.399 55.8893 247.657 58.9316 247.657 62.1756C247.657 65.4196 246.402 68.462 244.118 70.7423L206.991 107.858C200.036 115.175 191.253 120.644 183.849 122.554C186.037 125.616 185.603 130.082 182.656 133.029L155.082 160.603C153.375 162.309 151.16 163.174 149.002 163.174ZM126.093 73.4232C126.042 73.4232 125.997 73.4232 125.955 73.426C125.249 73.4653 124.527 73.8042 123.98 74.3533L96.4062 101.925C95.3557 102.978 95.1624 104.564 95.986 105.39L147.661 157.065C148.145 157.552 148.804 157.577 149.145 157.572C149.854 157.53 150.574 157.191 151.123 156.644L178.697 129.07C179.751 128.017 179.941 126.431 179.118 125.608L170.845 117.338L178.087 117.683C184.614 117.954 195.116 112.22 202.983 103.95L240.154 66.7783C241.379 65.5541 242.051 63.9209 242.051 62.1728C242.051 60.4275 241.379 58.7915 240.154 57.5673L238.841 56.2535C236.303 53.7182 232.176 53.7154 229.644 56.2451L229.632 56.2535L225.671 52.2923L231.109 46.8548C232.333 45.6305 233.005 43.9973 233.005 42.2493C233.005 40.5012 232.333 38.868 231.109 37.6438L229.795 36.3299C227.257 33.7918 223.125 33.7918 220.587 36.3299L220.295 36.6212L216.34 32.6545C217.564 31.4302 218.236 29.797 218.236 28.049C218.236 26.3009 217.564 24.6677 216.34 23.4435L215.026 22.1296C212.58 19.684 208.263 19.6812 205.818 22.1296L205.05 22.9C205.047 22.9028 205.042 22.9056 205.039 22.9084H205.036L201.072 18.9472L201.083 18.936C202.302 17.7146 202.971 16.0814 202.971 14.3417C202.971 12.5936 202.299 10.9604 201.075 9.73621L199.761 8.42235C197.315 5.97673 192.998 5.97673 190.553 8.42235L160.866 38.2152L158.908 35.7948C144.862 18.471 134.029 9.85387 126.877 10.3581C123.874 10.543 121.249 12.2771 118.717 15.7704C132.883 32.5116 145.251 64.1114 134.211 76.5104L132.236 78.7291L127.44 73.9331C127.014 73.5045 126.454 73.4232 126.093 73.4232Z"
        fill="black"
      />
      <path
        d="M157.74 103.071C157.023 103.071 156.306 102.796 155.759 102.25L130.138 76.6281C129.043 75.5328 129.043 73.7623 130.138 72.667C131.233 71.5716 133.004 71.5716 134.099 72.667L159.721 98.2886C160.816 99.3839 160.816 101.154 159.721 102.25C159.174 102.796 158.457 103.071 157.74 103.071Z"
        fill="black"
      />
      <path
        d="M151.521 139.867C148.641 139.867 145.758 138.769 143.565 136.575C139.181 132.191 139.181 125.053 143.565 120.666C147.949 116.285 155.082 116.279 159.474 120.666C163.858 125.053 163.858 132.191 159.474 136.575C157.281 138.769 154.401 139.867 151.521 139.867ZM151.518 122.974C150.073 122.974 148.627 123.524 147.526 124.624C145.324 126.826 145.324 130.409 147.526 132.611C149.728 134.813 153.314 134.81 155.513 132.611C157.715 130.409 157.715 126.826 155.513 124.624C154.412 123.526 152.966 122.974 151.518 122.974Z"
        fill="black"
      />
      <path
        d="M32.0917 224.122C31.3745 224.122 30.6573 223.847 30.1111 223.301C29.0157 222.206 29.0157 220.435 30.1111 219.34L102.09 147.363C103.186 146.268 104.956 146.268 106.051 147.363C107.147 148.459 107.147 150.229 106.051 151.325L34.0722 223.301C33.526 223.847 32.8088 224.122 32.0917 224.122Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M87.184 215.432C86.4668 215.432 85.7497 215.157 85.2034 214.611C84.1081 213.516 84.1081 211.745 85.2034 210.65L125.544 170.312C126.639 169.217 128.409 169.217 129.505 170.312C130.6 171.408 130.6 173.178 129.505 174.274L89.1646 214.611C88.6183 215.16 87.9012 215.432 87.184 215.432Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M11.8263 253.063C10.2799 253.063 9.0249 251.811 9.0249 250.262V232.912C9.0249 231.363 10.2799 230.111 11.8263 230.111C13.3727 230.111 14.6277 231.363 14.6277 232.912V250.262C14.6277 251.811 13.3727 253.063 11.8263 253.063Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M20.5023 244.387H3.1504C1.60403 244.387 0.348999 243.135 0.348999 241.586C0.348999 240.037 1.60403 238.784 3.1504 238.784H20.4995C22.0458 238.784 23.3009 240.037 23.3009 241.586C23.3009 243.135 22.0486 244.387 20.5023 244.387Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M66.8122 244.751C63.6747 244.751 60.7248 243.527 58.5061 241.308C53.9258 236.728 53.9258 229.276 58.5061 224.696C63.0864 220.116 70.5353 220.116 75.1156 224.696C79.6959 229.276 79.6959 236.728 75.1156 241.308C72.8997 243.53 69.9498 244.751 66.8122 244.751ZM66.8122 226.864C65.2378 226.864 63.6663 227.464 62.4673 228.66C60.0721 231.055 60.0721 234.952 62.4673 237.35C64.7868 239.667 68.832 239.672 71.1544 237.35C73.5496 234.955 73.5496 231.058 71.1544 228.66C69.9582 227.464 68.3838 226.864 66.8122 226.864Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M57.8673 153.683C57.1502 153.683 56.433 153.409 55.8868 152.863C54.7914 151.767 54.7914 149.997 55.8868 148.901L79.9088 124.879C81.0041 123.784 82.7746 123.784 83.8699 124.879C84.9653 125.975 84.9653 127.745 83.8699 128.841L59.8479 152.863C59.2989 153.412 58.5817 153.683 57.8673 153.683Z"
        fill={fill ?? '#F8CC1D'}
      />
      <path
        d="M36.4562 184.039C33.3186 184.039 30.3688 182.815 28.1529 180.596C23.5726 176.016 23.5726 168.564 28.1529 163.984C30.3716 161.765 33.3186 160.541 36.4562 160.541C39.5938 160.541 42.5437 161.765 44.7624 163.984C49.3427 168.564 49.3427 176.016 44.7624 180.596C42.5409 182.818 39.5938 184.039 36.4562 184.039ZM36.4562 166.15C34.8174 166.15 33.2738 166.791 32.114 167.951C29.7188 170.346 29.7188 174.243 32.114 176.641C34.4336 178.96 38.4788 178.96 40.8012 176.641C43.1964 174.246 43.1964 170.349 40.8012 167.951C39.6386 166.788 38.095 166.15 36.4562 166.15Z"
        fill={fill ?? '#F8CC1D'}
      />
    </svg>
  );
};

export default UpdownGameIcon;
