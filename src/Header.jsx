import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link className="text-2xl font-bold hover:text-gray-300" to="/">
          Amazon Clone
        </Link>
        <button
          className="block md:hidden text-gray-300 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="hidden md:flex items-center space-x-6">
          <Link className="hover:text-gray-300" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-300" to="/products">
            All Products
          </Link>
          <a className="hover:text-gray-300" href="/products/new">
            New Product
          </a>
          <a className="hover:text-gray-300" href="/carted_products">
            Shopping Cart
          </a>
          <Link className="hover:text-gray-300" to="/signup">
            Signup
          </Link>
          <Link className="hover:text-gray-300" to="/login">
            Login
          </Link>
          <LogoutLink />
        </div>
        <form className="hidden md:flex items-center space-x-2">
          <input
            className="w-40 px-2 py-1 border border-gray-600 rounded bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-gray-500"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}

// import { Link } from "react-router-dom";
// import { LogoutLink } from "./LogoutLink";

// export function Header() {
//   return (
//     <header>
//       <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Productz
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/products">
//                   All products
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/products/new">
//                   New product
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/carted_products">
//                   Shopping Cart
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <LogoutLink />
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
