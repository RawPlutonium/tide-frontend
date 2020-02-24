import React from 'react';
import './index.scss';

function Footer(props){
  let year = new Date().getFullYear();
return(<div>
    <footer className="footer">
  <div className="content has-text-centered">
    <p>
        &copy;<strong> {year} Tide Management Services</strong>  
    </p>
  </div>
</footer>
    </div>)

}

export default Footer;