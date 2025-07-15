import { SearchParamType } from "@/app/type";
import { Suspense, use } from "react";
import { fetchPeoples } from "./apis/peopleApi";
import Character from "./components/Character";
import CharacterPagination from "./components/Pagination";
import { SearchBar } from "./components/SearchBar";
import { CharacterSkeleton } from "./components/skeletons";

export type Props = {
  searchParams: SearchParamType;
};

export const StartWarCharacter = ({ searchParams }: Props) => {
  const resolvedSearchParams = use(searchParams);
  const current = resolvedSearchParams?.page
    ? parseInt(resolvedSearchParams?.page)
    : 1;
  const name = resolvedSearchParams?.name;
  const {
    results: characters,
    total_pages,
    previous,
    next,
  } = use(fetchPeoples({ page: current.toString(), name }));
  return (
    <div className={name ? "mb-10" : ""}>
      <div className="container mx-auto">
        <div>
          <SearchBar name={name || ""} />
        </div>
        <div className="">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {characters?.map((character) => (
              <Suspense key={character.uid} fallback={<CharacterSkeleton />}>
                <Character id={character.uid} />
              </Suspense>
            ))}
          </div>
          {total_pages && (
            <div className="mt-5">
              <CharacterPagination
                total_pages={total_pages}
                previous={previous}
                next={next}
                current={current}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
