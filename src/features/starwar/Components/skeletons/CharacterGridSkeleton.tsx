import { CharacterSkeleton } from "./CharacterSkeleton";

export function CharacterGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
      {Array.from({ length: 10 }).map((_, idx) => (
        <CharacterSkeleton key={idx} />
      ))}
    </div>
  );
}
