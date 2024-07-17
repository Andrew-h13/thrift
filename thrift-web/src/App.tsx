import React, { useEffect, useState } from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Login from "./Pages/Login";
import Sidebar from "./components/sidebar";
import About from "./Pages/About";
import Account from "./Pages/Account";
import Cart from "./components/Cart";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./Pages/SignUp";
import Bubbles from "./components/bubbles";
import Slide from "./components/Slider";
import Footer from "./components/footer";
import { CartProvider } from './components/Cart-context';

function HomePage() {
  const navigate = useNavigate();

 

  const AnimatedTypography = styled(Typography)`
    & {
      position: relative;
      font-size: 50px;
    }

    & span {
      color: #fff;
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      animation: waviy 2s infinite;
      animation-delay: calc(0.1s * var(--i));
    }

    @keyframes waviy {
      0%,
      40%,
      100% {
        transform: translateY(0);
      }
      20% {
        transform: translateY(-20px);
      }
    }
  `;

  interface Styles extends React.CSSProperties {
    "--i": number;
  }

  const string = "Welcome to ThriftSea";

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number | null) => {
    setActiveButton(buttonId);
    localStorage.setItem("activeButton", String(buttonId));
  };

  useEffect(() => {
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(Number(storedActiveButton));
    }
  }, []);

  const handleGoToLogin = () => {
    navigate("/Login");
    handleButtonClick(3);
  };

  const handleGoToSignUp = () => {
    navigate("/SignUp");
    handleButtonClick(2);
  };

  return (
    <>
    <CartProvider>
    <Sidebar />
    <Cart />
    </CartProvider>


      <div className="content">
        <div className="welcome-banner">
          <div className="header">
            <Typography variant={"h1"} fontWeight={"bold"}>
              <AnimatedTypography>
                {string.split("").map((char, idx) => {
                  const styles: Styles = {
                    "--i": idx + 1,
                  };
                  return (
                    <span key={`${char}-${idx}`} style={styles}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </AnimatedTypography>
            </Typography>
          </div>

          <p className="description">
            At ThriftSea, we dive deep to bring you treasures without sinking
            your budget. Where thrifty meets the sea of endless possibilities!
          </p>

          <div className="button-container">
            <button
              className={`Join ${activeButton === 2 ? "active" : ""}`}
              onClick={handleGoToSignUp}
            >
              Join For Free
            </button>
            <button
              className={`Sign ${activeButton === 3 ? "active" : ""}`}
              onClick={handleGoToLogin}
            >
              Sign In
            </button>
          </div>
          <Bubbles></Bubbles>
        </div>
        <div className="spacer2"></div>
        <div className="cat-label">
          <h1 className="text-xl bg-black">Featured Items</h1>
          <div className="line2"></div>
        </div>
        <div className="spacer1">
          <div className="feature-item-container">
            <div className="feature-window-container">
              <Slide></Slide>
            </div>
          </div>
        </div>
        <div className="spacer3"></div>
        <div className="cat-label">
          <h1>Shop by Category</h1>
          <div className="line"></div>
        </div>
        <div className="cat-container">
          <div className="spacer"></div>
          <div className="windows-container">
            <div className="window-l">
              <div className="picture-window1"></div>
              <h1 className="card-titles">Electronics</h1>
              <h5 className="cat-des">
                Find the latest gadgets and timeless tech at unbeatable prices.
                From smartphones to gaming consoles, our electronics selection
                has everything you need. Dive into deals today!
              </h5>
            </div>
            <div className="window-m">
              <div className="picture-window2"></div>
              <h1 className="card-titles">Clothing</h1>
              <h5 className="cat-des">
                Update your wardrobe with our diverse clothing collection. From
                trendy styles to classic essentials, we offer quality apparel
                for men, women, and kids at thrift-friendly prices. Shop now!
              </h5>
            </div>
            <div className="window-r">
              <div className="picture-window3"></div>

              <h1 className="card-titles">Miscellaneous</h1>

              <h5 className="cat-des">
                Discover unique treasures in our miscellaneous section. From
                quirky decor to rare finds, explore a variety of items that add
                a special touch to your life. Start your hunt today!
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer2"></div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
