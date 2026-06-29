import type { FooterProps } from "../../lovatou/interfaces/Footer.types";
import "./Footer.css";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({
  companyName,
  year = new Date().getFullYear(),
  whatsappUrl,
  linkedinUrl,
  instagramUrl,
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p>
          © {year} {companyName}
        </p>

        <div className="footer-links">

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={28} />
            </a>
          )}

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaLinkedin size={28} />
            </a>
          )}
          

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={28} />
            </a>
          )}

        </div>

      </div>
    </footer>
  );
};

export default Footer;