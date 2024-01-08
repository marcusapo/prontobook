"use client";
import Logo1 from "../../../public/logo/LOGO1.png";
import { useContext, createContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface SidebarContextProps {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="grid md:grid-cols-8 ">
      <Image src={Logo1} alt="" className="w-38 h-30 m-2 ml-12 mr-12" />
      <SidebarContext.Provider value={{ expanded: true }}>
        <ul className="grid grid-flow-col gap-8 -ml-20">{children}</ul>
      </SidebarContext.Provider>
    </div>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  to: string;
  id: number;
  selectedItemId: any;
  setSelectedItemId: any;
}

export function SidebarItem({
  icon,
  text,
  to,
  id,
  selectedItemId,
  setSelectedItemId,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext)!;
  const router = useRouter();
  const handleClick = () => {
    router.push(to);
    setSelectedItemId(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`
    flex py-2 my-1  px-4
    font-normal rounded-md cursor-pointer
    ${selectedItemId === id ? "bg-sky-700 text-white" : ""}
  `}
    >
      <span className="pr-2">{icon}</span>

      <span className="w-max font-roboto font-medium text-base leading-6 ">
        {text}
      </span>
    </button>
  );
}
