import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  
  const handleThemeChange = (e) => {
    if(themeMode.theme === THEME_TYPE.LIGHT) {
      setTheme({ theme:THEME_TYPE.DARK });
    }
    else {
      setTheme({ theme:THEME_TYPE.LIGHT });
    }
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          defaultChecked={themeMode.theme === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="bold"><strong>Dark mode</strong></span>
    </div>
  );
};

export default ThemeSwitcher;