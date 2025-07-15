import { use } from "react";
import { fetchPeople } from "../apis/peopleApi";
import { CharacterCard } from "./CharacterCard";

export default function Character({ id }: { id: string }) {
  const {
    result: { properties: peopleData, description },
  } = use(fetchPeople(id));
  return (
    <>
      <CharacterCard
        name={peopleData.name}
        birth_year={peopleData.birth_year}
        gender={peopleData.gender}
        height={peopleData.height}
        mass={peopleData.mass}
        skin_color={peopleData.skin_color}
        hair_color={peopleData.hair_color}
        eye_color={peopleData.eye_color}
        description={description}
        homeworld={peopleData.homeworld}
      />
    </>
  );
}
