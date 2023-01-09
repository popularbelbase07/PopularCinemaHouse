import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
<div className="footer">

  <div className="App">

    <h6> The Oracle Cinemas © 2022 All rights reserved </h6>
    <Link className="text-white" to="https:/popularbelbase.epizy.com/"><h6>Designed & Developed By : Popular Belbase</h6></Link>
  </div>
</div>
  );
}
