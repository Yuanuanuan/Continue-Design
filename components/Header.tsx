import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-14 px-4 bg-[#141414] text-slate-300 flex justify-between items-center">
      <h1 className="font-bold text-lg">延序 設計</h1>
      <ul className="flex gap-10 pr-10">
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/column">COLUMN</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/service">SERVICE</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
