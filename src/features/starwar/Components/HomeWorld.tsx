import { Globe2 } from "lucide-react";
import { use } from "react";
import { fetchPlanetByUrl } from "../apis/planteApi";

const HomeWorld: React.FC<{ url: string }> = ({ url }) => {
  const {
    result: {
      properties: { name },
    },
  } = use(fetchPlanetByUrl(url));
  return (
    <div>
      <div className=" flex items-center gap-2">
        <Globe2 className="w-5 h-5 text-green-500" />
        <span className="rounded-xl bg-sky-100 px-3 py-1 text-xs font-semibold">
          {name}
        </span>
      </div>
    </div>
  );
};

export default HomeWorld;
