import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-400">
      <ul className="flex gap-3">
        <li>
          <Link href="/">Next.js</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
