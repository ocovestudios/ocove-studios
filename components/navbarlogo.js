import Link from "next/link";

const NavbarLogo = () => {
    return (
        <Link href='/' passHref>
            <div className="nav__logo">
                <svg className="nav-logo" viewBox="-16 -12 550 300" fill="none" xmlns="http://www.w3.org/2000/svg">  
                        <path className="nav-logo-path" d="M237.65 37.45C234.34 36.05 232.27 32.79 229.88 30.11C219.88 18.88 207.83 10.9 193.4 6.67997C186.337 4.4778 179.034 3.13479 171.65 2.67997C163.4 2.32997 155.15 1.87999 146.9 1.97999C135.17 2.11999 123.71 4.34997 112.4 7.39997C99.5178 10.9443 87.0987 15.9959 75.4001 22.45C62.897 29.2983 51.2832 37.6576 40.82 47.34C31.3963 55.9568 23.1125 65.7427 16.1701 76.46C9.33005 87.04 4.03005 98.37 2.54005 110.97C1.73816 117.953 1.83225 125.011 2.82005 131.97C5.46005 151.33 14.1101 168.02 25.4901 183.39C31.5987 191.365 38.5007 198.699 46.0901 205.28C53.2626 211.747 60.7946 217.803 68.6501 223.42C85.5701 235.42 103.83 245.03 122.65 253.73C135.077 259.501 147.868 264.454 160.94 268.56C168.82 271.03 189.69 274.2 192.59 274.47C197.49 274.91 211.99 274.72 214.91 274.47C220.446 274.039 225.948 273.244 231.38 272.09C239.558 270.51 247.649 268.508 255.62 266.09C270.35 261.451 284.455 255.023 297.62 246.95C299.74 245.63 301.89 244.34 304.13 243.23C304.829 242.81 305.644 242.624 306.456 242.702C307.268 242.779 308.033 243.115 308.64 243.66C313.261 247.612 318.739 250.433 324.64 251.9C331.418 253.576 338.429 254.096 345.38 253.44C349.63 253.01 353.96 252.99 358.11 252.1C364.87 250.735 371.547 248.989 378.11 246.87C393.55 241.72 407.42 233.56 420.65 224.21C441.03 209.83 461.5 195.57 481.87 181.21C487.41 177.3 493.11 173.49 498.05 168.89C505.69 161.79 512.05 153.58 514.89 143.24C515.2 142.15 515.43 141.16 515.74 139.94C516.167 137.466 516.385 134.961 516.39 132.45C516.33 129.771 516.099 127.099 515.7 124.45C514.12 114.98 509.59 107.11 503.42 99.94C491.51 86.1 476.66 75.94 461.63 65.94C445.51 55.28 429.4 44.6 413.11 34.22C402.034 27.2904 389.738 22.5387 376.88 20.22C370.94 19.09 364.88 18.28 358.88 17.73C352.406 17.0472 345.9 16.7134 339.39 16.73C331.47 16.86 323.55 17.53 315.64 18.18C309.71 18.66 303.75 19.18 297.9 20.18C284.542 22.4585 271.408 25.9017 258.65 30.47C252.53 32.7 246.48 35.14 240.38 37.42C239.502 37.7498 238.535 37.7605 237.65 37.45Z" stroke="#292929" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                        <path className="nav-logo-path" d="M203.4 56.4501C201.23 58.5301 199.22 60.81 196.87 62.67C186.42 70.94 176.87 79.94 170.12 91.67C163.76 102.83 160.57 114.51 162.86 127.44C164.229 135.042 167.329 142.228 171.92 148.44C180.61 160.44 192.13 169.24 204.92 176.44C218.92 184.28 233.59 190.6 248.13 197.27C257.74 201.68 267.23 206.4 276.63 211.27C285.41 215.82 291.99 222.93 297.93 230.7C298.93 232.03 298.83 233.01 297.64 233.96C296.45 234.91 295.14 235.79 293.9 236.72C286.489 242.44 278.434 247.273 269.9 251.12C260.775 255.022 251.343 258.162 241.7 260.51C235.962 261.953 230.098 262.84 224.19 263.16C216.19 263.58 208.84 260.99 201.69 257.72C193.08 253.77 185.24 248.53 177.43 243.23C162.864 233.369 149.006 222.499 135.96 210.7C126.363 201.941 117.494 192.416 109.44 182.22C97.4399 167.07 86.5899 151.22 79.6999 132.96C74.8699 120.17 71.5999 107.12 72.8699 93.21C73.3754 86.4133 74.9901 79.7451 77.6499 73.4701C82.6741 62.3319 90.0817 52.4324 99.3499 44.4701C113.1 32.3401 129.35 26.14 147.35 24.34C153.811 23.6848 160.336 24.1243 166.65 25.64C178.88 28.57 189.28 34.2601 196.86 44.4701C199.52 48.0501 203.4 56.4501 203.4 56.4501Z" stroke="#292929" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                        <path className="nav-logo-path" d="M329.06 224.26C328.53 228.41 333.06 230.94 336.18 233.16C343.18 238.11 350.92 238.48 359.18 236.77C375.58 233.37 388.18 224.33 398.72 211.77C405.733 203.35 411.063 193.661 414.42 183.23C416.625 176.586 418.041 169.705 418.64 162.73C419.05 157.91 419.27 153.07 419.4 148.23C419.7 136.77 417.31 125.76 413.66 114.98C410.23 104.83 404.91 95.61 399.42 86.48C392.93 75.72 386.24 65.08 379.97 54.2C373.7 43.32 364.14 37.46 352.18 34.68C342.25 32.5249 332.049 31.901 321.93 32.8299C308.56 33.8299 295.49 36.8299 282.69 40.8299C272.02 44.0999 261.9 48.83 251.92 53.77C251.59 53.94 251.23 54.07 250.92 54.27C247.33 56.59 247.06 57.44 248.42 62.02C250.76 69.94 252.94 77.9 255.42 85.76C259.42 98.36 267.42 107.87 278.63 114.76C290.417 122.033 302.167 129.367 313.88 136.76C323.88 143.11 333.01 150.43 339.66 160.48C345.194 168.618 347.719 178.431 346.8 188.23C345.8 198.72 341.02 207.75 334.64 215.99C333.15 217.91 331.59 219.79 330.17 221.76C329.626 222.505 329.248 223.357 329.06 224.26V224.26Z" stroke="#292929" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                        <path className="nav-logo-path" d="M210.65 85.0999C208.578 86.8956 206.74 88.9451 205.18 91.2C200.76 97.39 197.02 103.82 195.32 111.43C193.914 117.868 194.468 124.579 196.91 130.7C200.5 140.34 207.58 147.03 215.39 153.24C222.29 158.72 230.23 162.24 238.18 165.68C250.18 170.93 262.36 175.97 274.41 181.22C281.8 184.44 289.17 187.69 296.41 191.22C303.745 194.784 310.288 199.786 315.65 205.93C318.65 209.42 319.38 208.6 320.87 205.19C324.99 195.75 324.46 186.42 319.06 177.74C313.38 168.6 305.06 162.13 295.61 157.24C281.52 149.93 267.28 142.9 253.13 135.69C242.36 130.2 232.42 123.69 225.13 113.69C221.35 108.54 218.92 102.79 216.66 96.9099C215.14 92.9099 214.19 88.7699 211.73 85.1199C211.662 85.0448 211.58 84.9843 211.488 84.9423C211.395 84.9003 211.296 84.8777 211.194 84.8759C211.093 84.874 210.993 84.8929 210.899 84.9314C210.805 84.97 210.721 85.0273 210.65 85.0999Z" stroke="#292929" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </Link>
    )
}

export default NavbarLogo