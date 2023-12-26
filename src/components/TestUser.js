import { useSearchParams } from "react-router-dom";

export const TestUser = () => {
  const [search, setSearch] = useSearchParams({ search: 1 });
  const number = search.get("search");
  return (
    <>
      <h1>Test user</h1>
      <input
        onChange={(e) => setSearch({ search: e.target.value })}
        value={number}
      />
    </>
  );
};
