"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isActivePath } from "../_utils/isActivePath";
import Link from "next/link";
import clsx from "clsx";

interface NavLinkType {
  path: string;
  children: Readonly<React.ReactNode>;
}

function NavLink({ path, children }: NavLinkType) {
  // get the path name to be able add active class
  const pathname = usePathname();
  const isActive = isActivePath(pathname, path);

  return (
    <Link
      href={path}
      className={clsx(
        "link link--nav lg:text-lg uppercase p-2",
        isActive && "active"
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
