import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="bg-black text-slate-200 p-4">
        <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/">
          Home
        </Link>
        <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/products">
          All products
        </Link>
        {localStorage.admin === "true" ? (
          <>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/products/new">
              New product
            </Link>
          </>
        ) : null}
        {localStorage.email ? (
          <>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/carted_products">
              Shopping Cart
            </Link>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/orders">
              Orders
            </Link>

            <LogoutLink className="p-2 mr-2 rounded-md outline-slate-700 outline hover:bg-slate-200 hover:text-black" />
          </>
        ) : (
          <>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/signup">
              Signup
            </Link>
            <Link className="p-2 mr-2 rounded-md hover:bg-slate-200 hover:text-black" to="/login">
              Login
            </Link>
          </>
        )}
        <form action="/products" className="inline">
          <input name="name" type="text" placeholder="Search..." className="text-black rounded-md ml-8" />
        </form>
        <span className="float-end">{localStorage.email}</span>
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
