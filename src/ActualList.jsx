export default function ActualList({ channels }) {
  return (
    <>
      <ul style={{ listStyle: "none", marginTop: "150px" }}>
        <h3>Actual List:</h3>
        {channels.map((channel) => {
          return (
            <li
              className="listDiv"
              key={channel.id}
              style={{ backgroundColor: "#" + channel.color }}
            >
              <div>
                <img
                  src={channel.image}
                  alt={channel.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <div>
                  <h3>{channel.name}</h3>
                </div>
                <audio controls>
                  <source src={channel.liveaudio.url} type="audio/mpeg" />
                </audio>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
