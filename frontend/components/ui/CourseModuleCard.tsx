import { Course } from "@/types";
import { BookOpen, Clock } from "lucide-react";

interface CourseModuleCardProps {
  course: Course;
}

export default function CourseModuleCard({ course }: CourseModuleCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 card-hover group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">
            {course.code}
          </span>
          <h3 className="text-base font-bold text-maroon mt-1 group-hover:text-maroon-light transition-colors">
            {course.name}
          </h3>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 bg-maroon/5 rounded-full shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-maroon" />
          <span className="text-xs font-semibold text-maroon">
            {course.credits} cr
          </span>
        </div>
      </div>

      <p className="text-sm text-body-light leading-relaxed mb-3 line-clamp-2">
        {course.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-body-light">
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {course.semester === "year"
              ? "Year-long"
              : `Semester ${course.semester}`}
          </span>
        </div>
        {course.lecturer && (
          <span className="text-maroon/70 font-medium">{course.lecturer}</span>
        )}
      </div>

      {course.prerequisites && course.prerequisites.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          <span className="text-xs text-body-light">
            Prerequisites:{" "}
            <span className="font-medium text-body">
              {course.prerequisites.join(", ")}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
