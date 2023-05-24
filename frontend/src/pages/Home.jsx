import Memo from "Memo";

const Home = () => {
  const myStyle = {
    color: "red",
    backgroundColor: "lightblue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <>
      <h1 style={myStyle}>Home</h1>
      <Memo />
    </>
  );
};

export default Home;
