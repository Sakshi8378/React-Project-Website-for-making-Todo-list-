import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      
      
    </ul>
   {props.searchBar? <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>: "no search bar"}
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
//  <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <Link class="navbar-brand" to="#">Navbar</Link>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link" to="#">Link</Link>
//       </li>
//       <li class="nav-item dropdown">
//         <Link class="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
//           Dropdown
//         </Link>
//         <div class="dropdown-menu">
//           <Link class="dropdown-item" to="#">Action</Link>
//           <Link class="dropdown-item" to="#">Another action</Link>
//           <div class="dropdown-divider"></div>
//           <Link class="dropdown-item" to="#">Something else here</Link>
//         </div>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link disabled">Disabled</Link>
//       </li>
//     </ul>
    // <form class="form-inline my-2 my-lg-0">
    //   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    // </form>
//   </div>
// </nav> 
  )
}

Header.defaultProps={
  title:"Your Title Here",
  searchBar: true
}

Header.propTypes={
  title:PropTypes.string,
  searchBar:PropTypes.bool.isRequired
}