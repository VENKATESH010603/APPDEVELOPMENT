import { Link } from 'react-router-dom'

const Footer = () => (
  <>
    <footer className="bg-secondary text-white text-center py-3 mt-5 sticky-footer">
      <div className="container">
        <p>
          &copy; Made with ❤ by
          <Link
            to="https://github.com/bilalrajput09"
            className="link-warning"
            style={{ textDecoration: 'none' }}
          >
            {' '}
          </Link>
          &nbsp;
          <Link
            to="https://github.com/kalbek"
            className="link-warning"
            style={{ textDecoration: 'none' }}
          >
            
            {' B VENKATESH '}
          </Link>
        </p>
        <p>
          
          <Link to="/privacy" className="text-white">
            Privacy Policy
          </Link>
          {' '}
          |
          <Link to="/https://www.termsfeed.com/blog/terms-conditions-games/" className="text-white">
            About Us
          </Link>
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
