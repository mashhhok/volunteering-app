import { RgbaBgLayout } from "@/shared/ui/RgbaBgLayout";
import React from "react";

const layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <RgbaBgLayout>{children}</RgbaBgLayout>;
};

export default layout
