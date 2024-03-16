"use client";
import React from "react";
import {
  Card,
  Container,
  ScrollArea,
  Table as TableEl,
  darken,
  useMantineColorScheme,
} from "@mantine/core";
import { colors } from "../enums";

interface ITable {
  elements: string[][];
}

export const Table = ({ elements }: ITable) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container size="xl">
      <ScrollArea type="always" pb={15}>
        <Card radius={"lg"} p={0} style={{ border: "2px solid" }} w="1280px">
          <TableEl
            p={"24px 40px"}
            withRowBorders
            horizontalSpacing={"24px"}
            verticalSpacing={"16px"}
          >
            {elements.map((item, index) => {
              if (index === 0)
                return (
                  <TableEl.Thead
                    bg={
                      colorScheme === "dark"
                        ? darken(colors.gray, 0.3)
                        : colors.lightGray
                    }
                    style={{ borderBottom: "2px solid" }}
                  >
                    <TableEl.Tr>
                      {item.map((item2, index) => (
                        <TableEl.Th maw={330} key={index}>
                          {item2}
                        </TableEl.Th>
                      ))}
                    </TableEl.Tr>
                  </TableEl.Thead>
                );
              else
                return (
                  <TableEl.Tbody>
                    <TableEl.Tr style={{ borderWidth: "2px" }}>
                      {item.map((item2, index) => (
                        <TableEl.Th maw={330} key={index}>
                          {item2}
                        </TableEl.Th>
                      ))}
                    </TableEl.Tr>
                  </TableEl.Tbody>
                );
            })}
          </TableEl>
        </Card>
      </ScrollArea>
    </Container>
  );
};
