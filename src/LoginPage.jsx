import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params) // Ensuring the .json endpoint is used
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        window.location.href = "/"; // Redirects to homepage
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        {errors.length > 0 && (
          <ul className="mb-4 text-red-600 text-sm">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// import axios from "axios";
// import { useState } from "react";

// export function LoginPage() {
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors([]);
//     const params = new FormData(event.target);
//     axios
//       .post("/sessions.json", params)
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem("email", response.data.email);
//         event.target.reset();
//         window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
//       })
//       .catch((error) => {
//         console.log(error.response);
//         setErrors(["Invalid email or password"]);
//       });
//   };

//   return (
//     <div id="login">
//       <h1>Login</h1>
//       <ul>
//         {errors.map((error) => (
//           <li key={error}>{error}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Email: <input name="email" type="email" />
//         </div>
//         <div>
//           Password: <input name="password" type="password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
