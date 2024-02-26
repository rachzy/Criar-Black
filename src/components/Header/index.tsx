import React from "react";
import "./Header.css";

import LogoSiteBranco from "../../assets/logo_site_branco.png";
import { Link, useLocation } from "react-router-dom";
import path from "path";

const Header = () => {
  const location = useLocation();

  const paths = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/aboutUs",
      name: "Quem Somos",
    },
    {
      to: "/services",
      name: "Serviços",
    },
    {
      to: "/partners",
      name: "Clientes",
    },
    {
      to: "/cards",
      name: "Planos",
    },
    {
      to: "/sygest",
      name: "Sygest",
    },
  ];

  function mapPaths() {
    return paths.map((path) => (
      <Link
        key={path.to}
        className={location.pathname === path.to ? "active" : ""}
        to={path.to}
      >
        {path.name}
      </Link>
    ));
  }

  return (
    <header>
      <nav className="header" id="header">
        <main className="nav-top">
          <img src={LogoSiteBranco} alt="criar ideias logo" />
          <div className="nav-sections">{mapPaths()}</div>
        </main>
      </nav>
    </header>
  );
};

export default Header;
