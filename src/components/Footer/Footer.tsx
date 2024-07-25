import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname(); // check https://nextjs.org/docs/app/api-reference/functions/use-pathname

  return (
    <footer>
      {pathname !== '/contact' && (
        <div className="navbar-container footer1">
          <ul className="navbar-menu" id="navbar-menu">
            <li>
              <a
                className="navbar-link"
                id="joinBtn"
                href="https://clubs.ssfinc.ca/feeds?type=club&type_id=35536"
              >
                JOIN CLUB
              </a>
            </li>
            <li>
              <a className="navbar-link" href="https://discord.gg/aWJH5Cx9y3">
                <img className="socials" src="/img/discord.png" alt="Discord"></img>
              </a>
            </li>
            <li>
              <a className="navbar-link" href="https://www.instagram.com/seneca_sdc/">
                <img
                  className="socials"
                  src="<%= (typeof Colour !== 'undefined' && Colour === '#1e1e1e') ? '/img/instagram-b.png' : '/img/insta-color.png' %>"
                  alt="Instagram"
                ></img>
              </a>
            </li>
            <li>
              <a
                className="navbar-link"
                href="https://www.linkedin.com/company/seneca-software-developers-club/"
              >
                <img className="socials" src="/img/linkedin.png" alt="LinkedIn"></img>
              </a>
            </li>
          </ul>
        </div>
      )}
      {pathname !== '/' && (
        <div className="navbar-container footer2" id="arrowCont">
          <ul className="navbar-menu" id="navbar-menu">
            <li>
              <a className="navbar-link back-button" id="backButton" onClick="history.back()">
                <img src="/img/logoLeft.png" alt="" />
              </a>
            </li>{' '}
            <p id="slash">/</p>
            <li>
              <a className="navbar-link next-button" id="nextButton" href="<%= '/' + nextPage %>">
                <img src="/img/logoRight.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
