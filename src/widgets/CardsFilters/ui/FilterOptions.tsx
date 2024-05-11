"use client";
import { Box, Checkbox, Flex, Select, Text, Title } from "@mantine/core";
import React, { RefObject } from "react";
import { LinearDivider } from "@/shared/ui";
import { colors } from "@/shared/enums";
import { FiltersSVG } from "@/shared/svg/FiltersSVG";
import { useSearchParams } from "next/navigation";
import { useDebounce, useReplaceSearchParams } from "@/shared/lib/hooks";

export const FilterOptions = () => {
  const searchParams = useSearchParams();
  const replaceSearchParams = useReplaceSearchParams();

  const [emergency, setEmergency] = React.useState(false);
  const [militarCars, setMilitarCars] = React.useState(false);
  const [equipment, setEquipment] = React.useState(false);
  const [military, setMilitary] = React.useState(false);
  const [drones, Drones] = React.useState(false);
  const [medical, setMedical] = React.useState(false);
  const [education, setEducation] = React.useState(false);
  const [animals, setAnimals] = React.useState(false);
  const [children, setСhildren] = React.useState(false);
  const [elderly, setЕlderly] = React.useState(false);
  const [volunteering, setVolunteering] = React.useState(false);

  const [locations, setLocations] = React.useState<string[]>([]);
  const [location, setLocation] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<string | null>(null);
  const debounce = useDebounce();

  const statuses = ["open", "pending", "close"];

  React.useEffect(() => {
    async function Do() {
      const locs = await fetch("/api/locations");
      const data = await locs.json();
      setLocations(data);
    }
    Do();
  }, []);

  const checkboxStateArray = [
    emergency,
    militarCars,
    equipment,
    military,
    drones,
    medical,
    education,
    animals,
    children,
    elderly,
    volunteering,
    location,
    status,
  ];


  const fundraiseArray = [
    { text: "🔥 Emergency", value: emergency, setValue: setEmergency },
    { text: "🚗 Military cars", value: militarCars, setValue: setMilitarCars },
    { text: "🥾 Equipment", value: equipment, setValue: setEquipment },
    { text: "🪖 Military", value: military, setValue: setMilitary },
    { text: "🦅 Drones", value: drones, setValue: Drones },
    { text: "💊 Medical", value: medical, setValue: setMedical },
    { text: "📚 Education", value: education, setValue: setEducation },
    { text: "🐾 Animals", value: animals, setValue: setAnimals },
    { text: "👧🏻 Сhildren", value: children, setValue: setСhildren },
    { text: "👨🏼‍🦳 Еlderly", value: elderly, setValue: setЕlderly },
    { text: "🙋🏼‍♂️ Volunteering", value: volunteering, setValue: setVolunteering },
  ];

  React.useEffect(() => {
    setEmergency(Boolean(searchParams.get("emergency")));
    setMilitarCars(Boolean(searchParams.get("militarCars")));
    setEquipment(Boolean(searchParams.get("equipment")));
    setMilitary(Boolean(searchParams.get("military")));
    Drones(Boolean(searchParams.get("drones")));
    setMedical(Boolean(searchParams.get("medical")));
    setEducation(Boolean(searchParams.get("education")));
    setAnimals(Boolean(searchParams.get("animals")));
    setСhildren(Boolean(searchParams.get("children")));
    setЕlderly(Boolean(searchParams.get("elderly")));
    setVolunteering(Boolean(searchParams.get("volunteering")));
    setLocation(searchParams.get("location"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    replaceSearchParams({
      emergency: emergency ? emergency : "",
      militarCars: militarCars ? militarCars : "",
      equipment: equipment ? equipment : "",
      military: military ? military : "",
      drones: drones ? drones : "",
      medical: medical ? medical : "",
      education: education ? education : "",
      animals: animals ? animals : "",
      children: children ? children : "",
      elderly: elderly ? elderly : "",
      volunteering: volunteering ? volunteering : "",
      location: location ? location : "",
      status: status ? status : "",
      page: 1,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, checkboxStateArray);

  return (
    <>
      <Flex justify={"space-between"} w={"100%"}>
        <Box w={"100%"}>
          <Flex gap={12} align={"center"} mb={40}>
            <FiltersSVG />
            <Text fz="20px">Filters</Text>
          </Flex>

          <Title order={4} mb={20}>
            Fundraise for
          </Title>
          <Flex gap={15} direction={"column"} mb={40}>
            {fundraiseArray.map((item, index) => (
              <Flex
                gap={12}
                align={"center"}
                key={index}
                onClick={() => {
                  item.setValue((prev) => !prev);
                  scrollTop();
                }}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  fontWeight: "lighter",
                }}
              >
                <Checkbox radius={"xs"} checked={item.value} />
                <Text fz="16px">{item.text}</Text>
              </Flex>
            ))}
          </Flex>

          <Select
            label={
              <Title order={4} mb={5}>
                Location
              </Title>
            }
            radius={"md"}
            description={"Choose the city"}
            placeholder="Input location"
            maw={280}
            data={locations}
            searchable={true}
            w={"100%"}
            value={location}
            mb={25}
            onChange={(value, option) => {
              setLocation(value);
              scrollTop();
            }}
          />
          <Select
            label={
              <Title order={4} mb={5}>
                Status
              </Title>
            }
            radius={"md"}
            description={"Choose the city"}
            placeholder="Input location"
            maw={280}
            data={statuses}
            searchable={true}
            w={"100%"}
            value={status}
            onChange={(value, option) => {
              setStatus(value);
              scrollTop();
            }}
          />
        </Box>
        <LinearDivider
          h={"100%"}
          w={"2px"}
          deg={180}
          color={colors.lightGray}
        />
      </Flex>
    </>
  );
};
