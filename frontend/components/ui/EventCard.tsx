import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const typeColors = {
    seminar: "bg-maroon text-white",
    workshop: "bg-gold text-white",
    conference: "bg-science-red text-white",
    social: "bg-seabreeze text-white",
    deadline: "bg-fiery text-white",
  };

  const date = new Date(event.date);
  const month = date
    .toLocaleDateString("en-ZA", { month: "short" })
    .toUpperCase();
  const day = date.getDate();

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover group">
      <div className="flex">
        {/* Date badge */}
        <div className="w-20 shrink-0 bg-maroon/5 flex flex-col items-center justify-center p-4 border-r border-border">
          <span className="text-xs font-bold text-gold-dark uppercase">
            {month}
          </span>
          <span className="text-2xl font-black text-maroon">{day}</span>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors[event.type]}`}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
          </div>

          <h3 className="text-base font-bold text-maroon group-hover:text-maroon-light transition-colors mb-1.5">
            {event.title}
          </h3>

          <p className="text-sm text-body-light leading-relaxed line-clamp-2 mb-3">
            {event.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-body-light">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {event.time}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {event.location}
            </div>
            {event.speaker && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {event.speaker}
                {event.speakerAffiliation && ` (${event.speakerAffiliation})`}
              </div>
            )}
          </div>

          {event.registrationUrl && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-dark hover:text-maroon transition-colors"
            >
              Register
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
