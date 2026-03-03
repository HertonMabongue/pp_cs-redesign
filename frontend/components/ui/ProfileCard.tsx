"use client";

import { Mail, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { StaffMember } from "@/types";

interface ProfileCardProps {
  member: StaffMember;
}

export default function ProfileCard({ member }: ProfileCardProps) {
  const router = useRouter();

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/people/staff/${member.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(`/people/staff/${member.id}`);
      }}
      className="block group cursor-pointer"
    >
      <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover h-full">
        {/* Image area */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-maroon/10 to-gold/5">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-maroon/10 flex items-center justify-center border-3 border-gold/30">
              <span className="text-2xl font-bold text-maroon/40">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-maroon group-hover:text-maroon-light transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-gold-dark font-medium mt-0.5">
            {member.title}
          </p>
          <p className="text-xs text-body-light mt-1">{member.role}</p>

          {/* Research interests */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {(member.researchAreas ?? []).slice(0, 3).map((interest) => (
              <span
                key={interest}
                className="px-2 py-0.5 bg-maroon/5 text-maroon text-xs font-medium rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-4 pt-3 border-t border-border flex items-center gap-3">
            <a
              href={`mailto:${member.email}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-body-light hover:text-maroon transition-colors"
              title={`Email ${member.name}`}
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
            {member.website && (
              <a
                href={member.website}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-body-light hover:text-maroon transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
