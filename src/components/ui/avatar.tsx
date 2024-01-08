import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

interface CustomAvatarProps {
  src: string;
  fallbackText: string;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ src, fallbackText }) => (
  <Avatar.Root className="bg-blackA1 inline-flex h-[105px] w-[101px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <Avatar.Image
      className="h-full w-full rounded-[inherit] object-cover"
      src={src}
    />
    <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium">
      {fallbackText}
    </Avatar.Fallback>
  </Avatar.Root>
);

export default CustomAvatar;
