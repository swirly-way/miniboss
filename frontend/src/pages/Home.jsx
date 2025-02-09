const Home = () => {
  return (
    <div className="home-container p-4 m-2 w-1/2">
      <h1 className="header h-[5%] bg-blue-500">Home</h1>
      <div className="home-content h-[95%] bg-green-300">
        <div className="teamboard h-[50%]">
          <h1>Teamboard</h1>
        </div>
        <div className="reminders h-[50%]">
          <h1>Stuff to do.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
