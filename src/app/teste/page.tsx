const Page = () => {
  interface Parameters {
    orientation: number;
    swellMultiplierCoefficient: number; // specific to each beach
  }
  const parameters = {
    orientation: 240,
    impediment: 2,
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <span> teste</span>
    </div>
  );
};

export default Page;
