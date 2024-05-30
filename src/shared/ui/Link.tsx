"use client";
import React from "react";
import LinkEl from 'next/link'

export const Link = (props: typeof LinkEl.arguments & { href: string }) => {
  const href = props.href;

  const pathname = window.location.pathname;
  const new_href = "/" + pathname.split("/")[1] + href;
  console.log(new_href)
  return <LinkEl  {...props} href={new_href} />;
};
