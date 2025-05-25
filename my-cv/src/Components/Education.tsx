const items = [
  {
    city: "Skopje",
    year: "2022-2026",
    text: "Ss. Cyril and Methodius University – Faculty of Economics Bachelor’s in E-Business",
  },
  {
    city: "Skopje",
    year: "2024-2025",
    text: "Brainster Digital Marketing Academy",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col text-5xl max-h-[350px] gap-4 md:w-[800px] w-screen px-[5%] md:px-0">
      <h1 className="uppercase tracking-[10px] font-semibold">Education</h1>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="flex flex-col text-xl">
                <div className="font-bold">{item.city}</div>
                <div className="text-gray-700 font-thin">{item.year}</div>
              </div>
              <div className="w-[100px] h-[5px] bg-black/30" />
              <div className="text-xl text-wrap w-[50%]">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
