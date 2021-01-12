import NavSidebar from "../Nav/NavSidebar";

export function Wrapper() {
  return (
    <div className="d-flex" id="wrapper">
    </div>
  );
}

export function Main() {
  return (
    <div className="page-content-wrapper">
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <NavSidebar/>
    </div>
  );
}