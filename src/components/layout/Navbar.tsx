"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Ticket, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary">
            <Ticket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Smart<span className="text-primary">Ticketing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/events" className="text-sm font-medium hover:text-primary transition">
            Explore Events
          </Link>
          <Link href="/organizer" className="text-sm font-medium hover:text-primary transition">
            Organize
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="gradient-primary text-white border-0 hover:opacity-90" asChild>
            <Link href="/register">Sign up</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}