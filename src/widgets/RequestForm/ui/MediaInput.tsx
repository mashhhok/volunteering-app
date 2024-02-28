import { FileInput, FileInputProps, Pill } from "@mantine/core";
import React from "react";
import { GoFileMedia } from "react-icons/go";

const ValueFileComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

const MediaInput = () => {
  return (
    <FileInput
      accept=".jpg, .jpeg, .png, .webp, .svg, .mp4, .m4v, .mov, .mpg, .mpeg, .wmv"
      label="Attach media files"
      valueComponent={ValueFileComponent}
      placeholder="Field..."
      size="md"
      multiple
      leftSection={<GoFileMedia size={24} />}
    />
  );
};

export default MediaInput;
