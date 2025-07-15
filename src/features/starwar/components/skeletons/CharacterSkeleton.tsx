import { Skeleton } from "@/components/ui/skeleton";

export function CharacterSkeleton() {
  return (
    <div className="rounded-2xl p-6 shadow bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col gap-3 min-h-[360px]">
      {/* Avatar and Name */}
      <div className="flex items-center gap-3 mb-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3 w-14 rounded mt-2" />
        </div>
      </div>
      {/* Description */}
      <Skeleton className="h-3 w-36 rounded mb-2" />
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-10 rounded-full" />
        ))}
      </div>
      {/* Planet */}
      <Skeleton className="h-6 w-16 rounded mt-4" />
    </div>
  );
}
