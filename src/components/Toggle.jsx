import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === "dark");

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
    toggleTheme();
  };

  return (
    <div>
      <div>
        <input type="checkbox" className="checkbox" id="checkbox" onClick={handleToggle} checked={checked} />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="ri-sun-fill "></i>
          <i className="ri-moon-fill"></i>
          <span className="ball"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
