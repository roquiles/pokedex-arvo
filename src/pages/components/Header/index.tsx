import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="w-full bg-indigo-900 h-16 flex items-center justify-center shadow-xl">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Pokédex"
        width="0"
        height="0"
        sizes="100vw"
        className="w-auto h-14"
      />
    </Link>
  </header>
);

export default Header;
