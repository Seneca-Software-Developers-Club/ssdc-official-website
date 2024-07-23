import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Assuming you have CSS modules set up

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li className={router.pathname === '/' ? styles.active : ''}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={router.pathname === '/about' ? styles.active : ''}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={router.pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav ul {
          list-style-type: none;
          padding: 0;
        }
        nav li {
          display: inline;
          margin-right: 10px;
        }
        nav li.${styles.active} a {
          font-weight: bold;
          color: red;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
