import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";
import Container from "../../components/Container";

const Footer = () => {
    return (
        <footer>
            <div className="bg-neutral text-neutral-content">
                <Container>
                    <div className="footer py-10">
                        <aside>
                            <h2 className="text-3xl">Bistro Boss</h2>
                            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                        </aside>
                        <nav>
                            <header className="footer-title">Social</header>
                            <div className="grid grid-flow-col gap-4 text-xl">
                                <a><FaTwitter></FaTwitter></a>
                                <a><FaYoutube></FaYoutube></a>
                                <a><FaFacebookF></FaFacebookF></a>
                            </div>
                        </nav>
                    </div>
                </Container>
            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;