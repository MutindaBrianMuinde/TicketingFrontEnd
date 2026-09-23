"use client";

import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Amazing
            <span className="block bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Events Near You
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl">
            From concerts and festivals to workshops and conferences — find and book tickets to the best experiences in one place.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search events, artists, or venues..."
                className="w-full rounded-2xl border-0 bg-white/95 py-4 pl-12 pr-4 text-slate-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
            <Button size="lg" className="rounded-2xl bg-white text-violet-700 hover:bg-white/90 px-8 h-14 font-semibold">
              Search Events
            </Button>
          </div>

          {/* Quick filters */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="secondary" className="rounded-full bg-white/20 hover:bg-white/30 text-white border-0">
              <Calendar className="mr-2 h-4 w-4" /> This Weekend
            </Button>
            <Button variant="secondary" className="rounded-full bg-white/20 hover:bg-white/30 text-white border-0">
              <MapPin className="mr-2 h-4 w-4" /> Near Me
            </Button>
            <Button variant="secondary" className="rounded-full bg-white/20 hover:bg-white/30 text-white border-0">
              Free Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}