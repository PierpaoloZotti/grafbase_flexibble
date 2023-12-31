import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";

export default async function Navbar() {
  const session = await getCurrentUser();
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={115}
            height={43}
            alt='Flexibble'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((navLinks) => (
            <Link
              key={navLinks.key}
              href={navLinks.href}
            >
              {navLinks.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
}
