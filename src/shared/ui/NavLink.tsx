"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const NavLink = ({
  href,
  children,
  props,
  activeProps,
}: {
  href: string;
  children: React.ReactNode;
  props?: typeof Link.arguments;
  activeProps?: typeof Link.arguments;
}) => {
  const [active, setActive] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === href) {
      setActive(true);
    } else setActive(false);
  }, [pathname]);

  return (
    <Link
      {...(!active && props)}
      {...(active && { ...props, ...activeProps })}
      href={href}
    >
      {children}
    </Link>
  );
};
