import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul className="flex gap-2 my-2">
          <li className="bg-slate-400 p-2 rounded-md ml-2">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-slate-400 p-2 rounded-md">
            <Link to="/table">Table</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;
