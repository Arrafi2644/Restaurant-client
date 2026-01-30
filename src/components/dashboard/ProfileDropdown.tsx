"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProfileAvatar } from "./ProfileAvatar"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { LogOut, User2 } from "lucide-react"
import { logoutUser } from "@/utils/logoutUser"

export function ProfileDropdown() {
  const router = useRouter()

  const handleLogout = async () => {
    logoutUser()
    toast.success("Logout successful")
    router.push("/")

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="p-0 rounded-full h-10 w-10 flex items-center justify-center"
        >
          <ProfileAvatar />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profile">
              <User2 />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
