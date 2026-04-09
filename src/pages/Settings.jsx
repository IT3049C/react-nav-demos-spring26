import { useNavigate } from "react-router-dom";
import { applySavedTheme } from "../utils/theme";
import "./Settings.css";
import { useState } from "react";

export function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem(`theme`) || `light`);
  const navigate = useNavigate();

  function handleSave() {
    localStorage.setItem(`theme`, theme);
    applySavedTheme();
    navigate(`/`);
  }

  return (
    <section>
      <h2>Settings Page</h2>
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <button onClick={handleSave}>Save</button>
    </section>
  );
}
