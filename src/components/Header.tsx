import Image from 'next/image';
import Button from './ui/Button';

export default function Header(){
  return (
    <header className="w-full border-b border-border bg-surface/60 backdrop-blur supports-[backdrop-filter]:bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/brand/logo-192.png" alt="SubvenTech" width={24} height={24} />
          <span className="font-semibold tracking-tight">SubvenTech</span>
        </div>
        <nav className="flex items-center gap-2">
          <Button variant="ghost">Fonctionnalités</Button>
          <Button>Commencer</Button>
        </nav>
      </div>
    </header>
  );
}
