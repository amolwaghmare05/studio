'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import {
  Menu,
  Users,
  Image as ImageIcon,
  Video,
  Heart,
  Wand2,
  ChevronDown,
} from 'lucide-react';

const navLinks = [
  { href: '/members', label: 'Members', icon: Users },
  {
    href: '/gallery',
    label: 'Gallery',
    icon: ImageIcon,
    subLinks: [
      { href: '/gallery/photos', label: 'Photos', icon: ImageIcon },
      { href: '/gallery/videos', label: 'Videos', icon: Video },
    ],
  },
  { href: '/donate', label: 'Donate', icon: Heart },
  { href: '/generate', label: 'Generate Content', icon: Wand2 },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary',
        pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
      )}
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-primary">मुज्जर मित्र मंडळ</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      'flex items-center gap-1 hover:text-primary',
                      pathname.startsWith(link.href)
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href} className="flex items-center gap-2">
                        <subLink.icon className="h-4 w-4" />
                        {subLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="mb-4" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-headline text-2xl font-bold text-primary">मुज्जर मित्र मंडळ</span>
                </Link>
                {navLinks.map((link) =>
                  link.subLinks ? (
                    <div key={link.label} className="flex flex-col space-y-2">
                       <p className="font-semibold text-muted-foreground">{link.label}</p>
                       {link.subLinks.map(subLink => (
                         <Link key={subLink.href} href={subLink.href} className="flex items-center gap-2 pl-4 text-lg" onClick={() => setMobileMenuOpen(false)}>
                            <subLink.icon className="h-5 w-5" />
                            {subLink.label}
                         </Link>
                       ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
