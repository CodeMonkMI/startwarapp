import { StartWarCharacter } from "@/features/starwar";

export type PageProps = {
  searchParams: Promise<{ name?: string; limit?: string; page?: string }>;
};
export default function Home({ searchParams }: PageProps) {
  return (
    <div>
      <StartWarCharacter searchParams={searchParams} />
    </div>
  );
}
