import Image from 'next/image';
import Button from './ui/Button';

export default function Header(){
  return (
    <header className="w-full border-b bg-surface/60 backdrop-blur supports-[backdrop-filter]:bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/brand/logo-subventec.svg" alt="Subventec" width={28} height={28} priority />
          <span className="font-display text-[15px] tracking-tight">Subventec</span>
        </div>
        <nav className="flex items-center gap-2">
          <Button variant="ghost">Tester vos aides</Button>
          <Button>Créer un compte</Button>
        </nav>
      </div>
    </header>
  );
}
