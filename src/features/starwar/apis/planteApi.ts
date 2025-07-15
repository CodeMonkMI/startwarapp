import { baseUrl } from "./config";

export const fetchPlanets = async () => {
  return fetch(`${baseUrl}/planet`, {
    next: {
      revalidate: 3600,
      tags: ["planets"],
    },
  }).then((res) => res.json());
};

export type PlanetProperties = {
  created: string;
  edited: string;
  climate: string;
  surface_water: string;
  name: string;
  diameter: string;
  rotation_period: string;
  terrain: string;
  gravity: string;
  orbital_period: string;
  population: string;
  url: string;
};

export type PlanetResult = {
  properties: PlanetProperties;
  _id: string;
  description: string;
  uid: string;
  __v: number;
};

export type PlanetResponse = {
  message: string;
  result: PlanetResult;
  apiVersion: string;
  timestamp: string;
};

export const fetchPlanet = async (
  id: string | number
): Promise<PlanetResponse> => {
  return fetch(`${baseUrl}/planet/${id}`, {
    next: {
      revalidate: 3600,
      tags: ["planet", typeof id === "number" ? id.toString() : id],
    },
  }).then((res) => res.json());
};

// ? only use for planted search api
export const fetchPlanetByUrl = async (
  url: string
): Promise<PlanetResponse> => {
  return fetch(url, {
    next: {
      revalidate: 3600,
      tags: ["planetByUrl"],
    },
  }).then((res) => res.json());
};
