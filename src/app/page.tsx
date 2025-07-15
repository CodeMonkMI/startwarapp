import { StartWarCharacter } from "@/features/starwar";
import { Suspense } from "react";

export type PageProps = {
  searchParams: Promise<{ name?: string; limit?: string; page?: string }>;
};
export default function Home({ searchParams }: PageProps) {
  return (
    <div>
      <Suspense fallback={<h2>Loading</h2>}>
        <StartWarCharacter searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
