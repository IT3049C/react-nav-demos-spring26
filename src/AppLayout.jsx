import "./AppLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import { applySavedTheme } from "./utils/theme";

function AppLayout() {
  applySavedTheme();
  return (
    <div>
      <header>
        <h1>Campus Events</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          {` | `}
          <NavLink to="/about">About</NavLink>
          {` | `}
          <NavLink to="/events">Events</NavLink>
          {` | `}
          <NavLink to="/settings">Settings</NavLink>
        </nav>
        <hr />
        <main>
          <Outlet />
        </main>
      </header>
    </div>
  );
}

export default AppLayout;
