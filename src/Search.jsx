export default function Search({ search, setSearch }) {
  return (
    <>
      <label htmlFor=""></label>
      <input
        type="text"
        placeholder="Search channel"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
