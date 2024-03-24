import React from "react";
import qs from "qs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useReplaceSearchParams = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()

  return (obj: Object) => {
    const qStr = qs.stringify({
      ...qs.parse(window.location.search.substring(1)),
      ...obj,
    });
    router.push(`${pathname}?${qStr}`, { scroll: false });
  };
};
