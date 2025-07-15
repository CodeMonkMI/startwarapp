"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const SearchBar = ({ name }: { name: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>(name || "");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    console.log(params);
    if (!value && params.size >= 1) {
      params.delete("name");
      router.replace(`?${params.toString()}`);
      return;
    }
    if (!value) {
      toast.error("Please enter a search term.", {
        position: "top-right",
      });
      return;
    }
    params.set("name", value.trim());

    router.replace(`?${params.toString()}`);
  };
  return (
    <div className="py-5 flex justify-center">
      <form
        onSubmit={submitHandler}
        className="flex items-center  border rounded-full shadow-md px-3 py-1.5 w-96 "
      >
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"Search"}
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent flex-1 text-base shadow-none"
          disabled={false}
        />
        <Button
          type="submit"
          size="icon"
          className="rounded-full ml-2"
          variant="secondary"
          aria-label="Search"
          disabled={false}
        >
          <Search className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};
