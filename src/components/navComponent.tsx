import * as React from "react";

interface NavComponentProps {
  totalProducts: number;
}

export const NavComponent = ({ totalProducts }: NavComponentProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link active" aria-current="page">
              Home
            </span>
            <span className="nav-link">Features</span>
            <span className="nav-link">Pricing</span>
          </div>
        </div>
        <div className="navbar-nav">
          <span className="nav-item" style={{ color: "whitesmoke" }}>
            Products:{" "}
            <span className="badge-pill badge-secondary px-3 py-2">
              {totalProducts}
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};
