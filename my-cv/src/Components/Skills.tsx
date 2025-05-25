const items = [
  "Digital Advertising",
  "SEO & Analytics",
  "Content & Social Media",
  "AI Tools",
];

const languages = ["Macedonian", "English"];

const Skills = () => {
  return (
    <div className="w-screen md:w-[800px] text-5xl sm:h-[200px]">
      <h1 className="uppercase tracking-[10px] font-semibold mb-4 max-sm:text-center">
        Skills & Languages
      </h1>
      <div className="flex gap-10 text-xl items-center h-[50%]">
        <div className="flex flex-col gap-1">
          {items.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <div className="bg-black h-full w-[2px]"></div>
        <div className="flex flex-col gap-1">
          {languages.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
