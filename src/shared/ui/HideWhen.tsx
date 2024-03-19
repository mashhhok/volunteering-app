"use client";
import { Box } from "@mantine/core";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export const HideWhen = ({
  children,
  routes,
}: {
  children: React.ReactNode;
  routes: string[];
}) => {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = React.useState(true);

  React.useEffect(() => {
    let isHidden = false;
    routes.forEach((item) => {
      if (pathname.includes(item)) isHidden = true;
    });
    if (isHidden) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Box style={{ display: isHidden ? "none" : "block" }}>{children}</Box>;
};
