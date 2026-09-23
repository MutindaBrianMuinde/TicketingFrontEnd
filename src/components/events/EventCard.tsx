"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
  category: string;
  isSoldOut?: boolean;
}

export default function EventCard({
  id,
  title,
  image,
  date,
  location,
  price,
  category,
  isSoldOut = false,
}: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category badge */}
        <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">
          {category}
        </Badge>

        {isSoldOut && (
          <Badge className="absolute top-4 right-4 bg-red-500 text-white">
            Sold Out
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="text-xl font-bold text-primary">{price}</p>
          </div>
          {isSoldOut ? (
            <Button size = "sm" className = "rounded-full" disabled>
                Sold Out
            </Button>
            ) : (
                <Button size="sm" className="rounded-full gradient-primary text-white border-0" asChild>
                  <Link href={`/events/${id}`}>
                    <Ticket className="mr-2 h-4 w-4" />
                    Get Tickets
                  </Link>
                </Button>
              )}
        </div>
      </div>
    </motion.div>
  );
}