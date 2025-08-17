import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

/**
 * A simple application header. It displays the app name on the left and a
 * user avatar with a dropdown menu on the right. The dropdown menu uses
 * Radix primitives wrapped by our shadcn/ui components for consistent
 * styling and behavior. In a real app you could replace the avatar
 * fallback and image with user data.
 */
export default function Header() {
  return (
    <header className="bg-background border-b flex items-center justify-between px-4 py-3">
      <h1 className="text-xl font-semibold">Expense App</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="focus:outline-none rounded-full">
            <Avatar>
              {/* In a real application this image could come from user profile data */}
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="User avatar"
              />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
