"use client";
import { Sidebar, SidebarItem } from "./index";
import { useState } from "react";
import {
  UserCircle,
  Bell,
  Users,
  Calendar,
  FileText,
  Clock,
  NewspaperIcon,
  User2Icon,
  LogOut,
} from "lucide-react";

export default function NavBar() {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const sidebarItems = [
    {
      icon: <User2Icon size={20} />,
      text: "Fila de Atendimento",
      id: 7,
      to: "#",
    },
    { icon: <FileText size={20} />, text: "Prontuários", id: 6, to: "#" },
    { icon: <Calendar size={20} />, text: "Agendamento",  id: 5, to: "/navbar/calendar" },
    { icon: <NewspaperIcon size={20} />, text: "Notícias", id: 4, to: "/navbar/news" },
    { icon: <Users size={20} />, text: "Amigos", id: 3, to: "#" },
    { icon: <Bell size={20} />, text: "Notificações", id: 2, to: "/navbar/notifications" },
    { icon: <UserCircle size={20} />, text: "Perfil", id: 1, to: "/navbar/perfil" },
    { icon: <LogOut size={20} />, text: "Sair", id: 8, to: "/" },
  ];

  return (
    <Sidebar>
      {sidebarItems.map((item, idx) => (
        <SidebarItem
          key={item.id}
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          // key={idx}
          icon={item.icon}
          text={item.text}
          to={item.to}
          id={item.id}
        />
      ))}
    </Sidebar>
  );
}
