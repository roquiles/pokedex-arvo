import Image from 'next/image';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-indigo-900 h-16 flex items-center justify-center shadow-xl">
      <button type="button" onClick={() => router.reload()}>
        <Image
          src="/logo.png"
          alt="Pokédex"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-14"
        />
      </button>
    </header>
  );
};

export default Header;
