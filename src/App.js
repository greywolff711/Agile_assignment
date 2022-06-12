import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {useContext} from 'react';
import { Helmet } from "react-helmet";
import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeContext, ThemeProvider} from "./providers/ThemeProvider";
import Styles from "./data/Styles";
import Particlesss from './components/Particlesss';

export const StyleTag = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  console.log(themeMode.theme);
  return (
    <Helmet>
      <style>{Styles(themeMode.theme)}</style>
    </Helmet>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div>
        <StyleTag/>
        <Router>
          <Particlesss/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
