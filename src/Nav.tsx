import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { ModeToggle } from "./components/mode-toggle";
import { useAuth } from "./services/authC";

let pages = [
  {
    page: "Couriers de depart",
    link: "/couriers_de_depart",
  },
  {
    page: "Couriers d'arrive",
    link: "/couriers_d_arrive",
  },
  {
    page: "Statistics",
    link: "/statistics",
  },
];

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const auth = useAuth();

  const handleLogin = () => {
    if (!auth?.user) {
      auth?.login;
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="shadow-md w-full sticky top-0 left-0 bg-black z-30">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
          <Link
            to="/"
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white"
          >
            Gestion de Couriers
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          {open ? <IoMdClose /> : <IoMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black
         md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
         ${open ? "top-20 opacity-100" : "top-[-490px]"}
         `}
        >
          {auth?.user &&
            pages.map((page) => (
              <li
                key={page.link}
                className="md:ml-8 text-xl text-center md:my-0 my-7 pr-8"
              >
                <Link
                  to={page.link}
                  className="text-white hover:text-gray-400 duration-500"
                >
                  {page.page}
                </Link>
              </li>
            ))}
          <li onClick={handleLogin}>
            <Link
              to="/login"
              className="text-white hover:text-gray-400 duration-500"
            >
              {!auth?.user ? `Login` : `Hi ${auth?.user} Logout`}
            </Link>{" "}
          </li>
          <li>
            <ModeToggle className="md:ml-8 text-xl text-center md:my-0 my-7 pr-8" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
