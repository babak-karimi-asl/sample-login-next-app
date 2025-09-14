"use client"

import useProfile from "@/hooks/useProfile";
import { PartyPopperIcon } from "lucide-react";

export default function Dashboard() {

  const profile = useProfile()

  return (
    <div className="flex flex-col md:flex-row  items-center gap-2">
      Welcome to the dashboard <b className="flex items-center gap-1">{profile.user.name} !!! <PartyPopperIcon size={18}/>  </b> 
    </div>
  );
}
