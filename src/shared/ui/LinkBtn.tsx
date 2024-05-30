"use client";
import { Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { colors } from "../enums";
import { usePathname } from "next/navigation";
import { Link } from "@/shared/ui/Link";

export const LinkBtn = ({
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
  const { hovered, ref } = useHover();
  const [active, setActive] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === href) {
      setActive(true);
    } else setActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Link href={href}>
      <Text
        ref={ref}
        {...props}
        {...(active && activeProps )}
        {...( hovered && activeProps )}
      >
        {children}
      </Text>
    </Link>
  );
};
