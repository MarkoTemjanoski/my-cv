const items = [
  {
    name: "Hackathon - FixDas",
  },
  {
    name: "Linkedin Campaign",
  },
  {
    name: "Content Marketing Strategy",
  },
  {
    name: "Digital Marketing Strategy"
  },
  {
    name: "Lead Generation Landing Page"
  },
  {
    name: "Social Media Strategy"
  },
  {
    name: "Google Analytics"
  },
  {
    name: "Search Engine Optimization"
  },
  {
    name: "CRM Software"
  },
  {
    name: "Email Marketing"
  },
];

const Experience = () => {
  return (
    <div className="w-screen md:w-[800px] text-5xl flex flex-col max-sm:items-center">
      <h1 className="uppercase tracking-[10px] font-semibold">Experience</h1>
      <div className="flex flex-wrap gap-3 mt-2 max-sm:justify-center">
        {items.map((item,index) => {
          return(
            <div key={index} className="text-xl bg-white/50"><a href="https://docs.google.com/document/d/13xLVuPE0y-fpwpBR7ySrYNtQz0ubMnCo7O3-62_zoT4/edit?tab=t.0">{item.name}</a></div>
          )
        })}
      </div>
    </div>
  );
};

export default Experience;
