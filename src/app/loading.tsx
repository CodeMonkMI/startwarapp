import { Skeleton } from "@/components/ui/skeleton";
import { CharacterGridSkeleton } from "@/features/starwar/components/skeletons/";

export default function Loading() {
  // Or a custom loading skeleton component
  <div className="container mx-auto pt-6">
    <div className="mb-6">
      <Skeleton className="h-12 w-full max-w-md bg-slate-200 rounded-lg mx-auto animate-pulse" />
    </div>
    <CharacterGridSkeleton />
  </div>;
}
