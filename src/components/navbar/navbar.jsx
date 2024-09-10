import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto w-full container sm:px-16 px-6 py-6">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="space-x-6">
          <NavigationMenuItem className="font-bold">
            <Link href="/">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="font-bold">
            <Link href="/blogs">Blogs</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="font-bold">
            <Link href="/about">About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="font-bold">
            <Link href="/contact">Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
