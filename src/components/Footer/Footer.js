import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='f6 ph5 pv2 bg-black white-70'>
      <ul className='list di pa0'>
        <li className='db di-ns'>
          <Link
            className='fw4 hover-white no-underline white-70 dib-ns pr3-ns'
            to='/'
          >
            Home
          </Link>
        </li>
        <li className='db di-ns'>
          <Link
            className='fw4 hover-white no-underline white-70 dib-ns ph3-ns'
            to='/terms-and-condition'
          >
            Terms and Conditions
          </Link>
        </li>
        <li className='db di-ns'>
          <Link
            className='fw4 hover-white no-underline white-70 dib-ns pl3-ns'
            to='/privacy-policy'
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
      <span className='fr'>&copy; 2022</span>
    </footer>
  );
};

export default Footer;
