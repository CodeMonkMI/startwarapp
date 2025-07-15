import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import Link from "next/link";

export const CharacterPagination = ({
  total_pages,
  previous,
  next,
  current = 1,
}: {
  total_pages: number;
  previous: string | null;
  next: string | null;
  current: number;
}) => {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          {previous && (
            <PaginationItem>
              <Button variant={"ghost"}>
                <Link href={`/?page=${current - 1}`}>Previous</Link>
              </Button>
            </PaginationItem>
          )}
          {Array.from(new Array(total_pages | 1)).map((_, i) => (
            <PaginationItem key={i}>
              <Link href={`/?page=${i + 1}`} className="cursor-pointer">
                <Button
                  className="cursor-pointer"
                  variant={current === i + 1 ? "secondary" : "ghost"}
                >
                  {i + 1}
                </Button>
              </Link>
            </PaginationItem>
          ))}
          {next && (
            <PaginationItem>
              <Button variant={"ghost"}>
                <Link href={`/?page=${current - 1}`}>Next</Link>
              </Button>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CharacterPagination;
