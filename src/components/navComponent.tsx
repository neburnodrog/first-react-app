import * as React from "react";

interface NavComponentProps {
  totalProducts: number;
}

export const NavComponent = (props: NavComponentProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>

        <div className="navbar-nav">
          <span className="nav-link">Home</span>
          <span className="nav-link">Features</span>
          <span className="nav-link">Pricing</span>
        </div>
        <div className="navbar-nav">
          <span className="nav-item" style={{ color: "whitesmoke" }}>
            Products:{" "}
            <span className="badge-pill badge-secondary px-3 py-2">
              {props.totalProducts}
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};
