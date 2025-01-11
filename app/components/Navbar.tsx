"use client"
import { FC } from "react";
import {
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINav,
} from "@nextui-org/react";
import Link from "next/link";
import { signIn , useSession } from "next-auth/react";

interface Props {}

const Navbar: FC<Props> = () => {
  const { data , status } = useSession();
  return (
    <NextUINav shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          Auth Practice
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
      {
        status === 'authenticated'?( <button>Log Out</button>):(
          <>
          <button onClick={()=>signIn()}> built in sign In page </button>
          <NavbarItem>
            <Link href="/sign-in">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          </>
        )
      }
       
      </NavbarContent>
    </NextUINav>
  );
};

export default Navbar;
