import { Link } from "react-router-dom";

Link;
export default function Header() {
  return (
    <div>
      <header className={`mx-auto`}>
        <nav
          className={`md:px-[100px] md:py-5 px-[30px] py-3 bg-gray-700 flex items-center justify-between`}
        >
          <h2 className={`text-3xl font-semibold`}>TrixNG</h2>
          <div>
            <ul>
              <li className="text-base text-gray-400 font-medium">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
