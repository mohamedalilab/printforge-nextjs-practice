"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { isActivePath } from "@/utils/isActivePath";

interface AsideLinkProps {
  path: string;
  children: React.ReactNode;
}

function AsideLink({ path, children }: AsideLinkProps) {
  // get the path name to be able add active class
  const pathname = usePathname();
  const isActive = isActivePath(pathname, path);

  return (
    <li
      className={clsx(
        "link link--aside uppercase px-2 mb-5",
        isActive && "active"
      )}
    >
      <Link href={path}>{children}</Link>
    </li>
  );
}

export default AsideLink;
