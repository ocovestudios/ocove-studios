import FooterLogo from "./footerlogo";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="global__footer">
            <div className="footer__info">
                <div className="footer__title">
                    <FooterLogo />
                    <h2>Ocove Studios</h2>
                </div>
                <div className="footer__email">
                    <p>ocovestudios@gmail.com</p>
                </div>
            </div>
            <div className="footer__links">
            </div>
            <div className="footer__policies">
                <ul>
                    <Link href='/policy' passHref><li className="footer__policy-link">Privacy Policy</li></Link>
                    <li style={{ display: 'inline-block', marginLeft: '1em' }}>|</li>
                    <Link href='/cookies' passHref><li className="footer__policy-link">Cookie Policy</li></Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;