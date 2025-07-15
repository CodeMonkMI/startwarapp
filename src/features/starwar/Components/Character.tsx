import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Eye, Palette, Ruler, User2, Weight } from "lucide-react";
import { Suspense, use } from "react";
import { fetchPeople } from "../apis/peopleApi";
import HomeWorld from "./HomeWorld";

export default function Character({ id }: { id: string }) {
  const {
    result: { properties: peopleData, description },
  } = use(fetchPeople(id));
  return (
    <Card className="relative w-full mx-auto rounded-3xl border-none overflow-hidden">
      {/* Glow Accent */}
      <span className="absolute top-0 right-0 w-24 h-24 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <span className="bg-blue-100 p-2 rounded-full">
            <User2 className="w-8 h-8 text-blue-600" />
          </span>
          <div>
            <CardTitle className="text-2xl font-extrabold tracking-tight text-gray-900">
              {peopleData.name}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <Calendar className="w-4 h-4" /> Born:{" "}
              <span className="font-medium">{peopleData.birth_year}</span>
            </div>
          </div>
        </div>
        <div className="mt-2 text-base text-gray-600">{description}</div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-4 gap-y-3 text-base">
        <div className="flex items-center gap-2 text-gray-700">
          <User2 className="w-5 h-5 text-blue-400" />
          <span className="rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold">
            {peopleData.gender}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Ruler className="w-5 h-5 text-purple-400" />
          <span className="rounded-xl bg-purple-100 px-3 py-1 text-xs font-semibold">
            {peopleData.height}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Weight className="w-5 h-5 text-pink-400" />
          <span className="rounded-xl bg-pink-100 px-3 py-1 text-xs font-semibold">
            {peopleData.mass}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Palette className="w-5 h-5 text-yellow-500" />
          <span className="rounded-xl bg-yellow-100 px-3 py-1 text-xs font-semibold">
            {peopleData.skin_color}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Palette className="w-5 h-5 text-amber-600" />
          <span className="rounded-xl bg-amber-100 px-3 py-1 text-xs font-semibold">
            {peopleData.hair_color}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Eye className="w-5 h-5 text-sky-500" />
          <span className="rounded-xl bg-sky-100 px-3 py-1 text-xs font-semibold">
            {peopleData.eye_color}
          </span>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <HomeWorld url={peopleData.homeworld} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
