import { toQueryString } from "@/lib/toQueryString";
import { baseUrl } from "./config";

export type PeoplePaginatedResponse = {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: {
    uid: string;
    name: string;
    url: string;
  }[];
  apiVersion: string;
  timestamp: string;
};

type Filter = {
  name?: string | null;
  page?: string | null;
};

export const fetchPeoples = async (
  filter?: Filter
): Promise<PeoplePaginatedResponse> => {
  let url = `${baseUrl}/people`;
  if (filter) {
    const queryString = toQueryString({ ...filter, limit: 10 });
    url = `${url}?${queryString}`;
  }

  const peoples = await fetch(url, {
    next: {
      revalidate: 3600,
      tags: ["peoples"],
    },
  }).then((res) => res.json());
  if (filter?.name) {
    const copyData = { ...peoples, results: peoples.result };
    delete copyData.result;
    return copyData;
  }
  return peoples;
};

export type PeopleProperties = {
  created: string;
  edited: string;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: string;
  birth_year: string;
  url: string;
};

export type PeopleResult = {
  properties: PeopleProperties;
  _id: string;
  description: string;
  uid: string;
  __v: number;
};

export type PeopleResponse = {
  message: string;
  result: PeopleResult;
  apiVersion: string;
  timestamp: string;
};

export const fetchPeople = async (
  id: string | number
): Promise<PeopleResponse> => {
  return fetch(`${baseUrl}/people/${id}`, {
    next: {
      revalidate: 3600,
      tags: ["people", typeof id === "number" ? id.toString() : id],
    },
  }).then((res) => res.json());
};
