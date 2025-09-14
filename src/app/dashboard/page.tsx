"use client"

import useProfile from "@/hooks/useProfile";
import { PartyPopperIcon } from "lucide-react";

export default function Dashboard() {

  const profile = useProfile()

  return (
    <div className="flex items-center gap-2">
      Welcome to the dashboard dear <b>{profile.user.name}</b> !!! <PartyPopperIcon size={18}/> 
    </div>
  );
}
