import { Flex } from "@mantine/core";
import React from "react";
import { TagButton } from "../../components/TagButton";

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Flex gap={12}>
      {tags.map((item) => (
        <TagButton key={item}>{item}</TagButton>
      ))}
    </Flex>
  );
};
