"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderLink = ({href,children}) => {
    const pathname = usePathname();

  return (
    <Link href={href} className={pathname.startsWith(href) ? "active" : ""}>
      {children}
    </Link>
  );
};

export default HeaderLink;
