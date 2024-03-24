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
            styles={{
              tbody: {
                borderColor: "black",
              },
            }}
            horizontalSpacing={"24px"}
            verticalSpacing={"16px"}
            highlightOnHover
            style={{ cursor: "pointer" }}
          >
            {elements.map((item, index) => {
              if (index === 0)
                return (
                  <TableEl.Thead
                    key={index}
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
                  <TableEl.Tbody key={index}>
                    <TableEl.Tr style={{ borderWidth: "2px", borderTop:`1px solid ${colors.neutral}` }} >
                      {item.map((item2, index) => (
                        <TableEl.Td maw={330} key={index}>
                          {item2}
                        </TableEl.Td>
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
