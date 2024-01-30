import { useEffect } from "react";
import { useState } from "react";
import Search from "./Search";
import List from "./List";
import ActualList from "./ActualList";

export default function App() {
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState("");

  async function getChannels() {
    const result = await fetch(
      "https://api.sr.se/api/v2/channels?format=json&size=100"
    );
    const data = await result.json();
    setChannels(data.channels);
  }

  useEffect(() => {
    getChannels();
  }, []);

  const filterdList = channels.filter((channel) => {
    return channel.name.toLowerCase().includes(search) && search !== "";
  });

  return (
    <>
      <div className="container">
        <div className="list">
          <h1>List of Sverige Radio Channels</h1>
          <Search search={search} setSearch={setSearch} />
          <List filterdList={filterdList} />
          <hr />
          <ActualList channels={channels} />
        </div>
      </div>
    </>
  );
}
