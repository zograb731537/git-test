import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
   return (
    <nav className={s.nav}  >
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/settings" activeClassName={s.active}><h5>Settings</h5></NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/friends" activeClassName={s.active}><h3>Friends</h3></NavLink>
    <div>
      <img src="https://is.gd/QAgvzb" />
      <img src="https://is.gd/QAgvzb" />
      <img src="https://is.gd/QAgvzb" />
    </div>
    <div className={s.fname}>
      Edo   Vika   Tanya
    </div>
    </div>
  </nav>
   )
}

export default Navbar;