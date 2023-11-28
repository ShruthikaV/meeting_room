import useApi from "../hooks/useApi";

const MeetingRoom = ({ title }) => {
  const { data, loading, error } = useApi("http://localhost:4000");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // console.log(data);
  data.map((item) => {
    console.log(item.title);
  });

  return (
    <div>
      <h1>Meeting Rooms</h1>
      <ul>
        {data.map((item) => {
          <li key={item.id}>{item.title}</li>;
        })}
        <li>ALKSJD</li>
      </ul>
    </div>
  );
};

export default MeetingRoom;
