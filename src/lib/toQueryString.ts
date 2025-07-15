export function toQueryString(params: {
  [key: string]: string | number | boolean | null | undefined;
}) {
  return Object.entries(params)
    .reduce<string[]>((acc, [k, v]) => {
      if (v !== null && v !== undefined && v !== "") {
        acc.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
      }
      return acc;
    }, [])
    .join("&");
}
