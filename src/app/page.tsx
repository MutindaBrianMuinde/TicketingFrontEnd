import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import EventCard from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";   // ← add this line

const mockEvents = [
  {
    id: "1",
    title: "Afrobeat Night Live – Nairobi Edition",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    date: "Sat, 28 Sep 2026 • 8:00 PM",
    location: "KICC, Nairobi",
    price: "KES 2,500",
    category: "Music",
  },
  {
    id: "2",
    title: "Tech Innovation Summit 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    date: "Fri, 10 Oct 2026 • 9:00 AM",
    location: "Sarit Centre, Westlands",
    price: "KES 5,000",
    category: "Conference",
  },
  {
    id: "3",
    title: "Sunset Yoga & Wellness Retreat",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    date: "Sun, 5 Oct 2026 • 4:00 PM",
    location: "Ngong Hills",
    price: "KES 1,200",
    category: "Wellness",
  },
  {
    id: "4",
    title: "Comedy Night Special",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800",
    date: "Thu, 25 Sep 2026 • 7:30 PM",
    location: "Alliance Française",
    price: "KES 1,500",
    category: "Comedy",
    isSoldOut: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />

      {/* Featured Events */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Featured Events
            </h2>
            <p className="mt-2 text-slate-600">
              Hand-picked experiences happening near you
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View all events
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
}