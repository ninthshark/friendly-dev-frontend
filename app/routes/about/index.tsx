const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="KiKi's Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm KiKi 👋🏻
          </h1>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            doloremque optio est non quae tempora sit repudiandae temporibus rem
            magnam!
          </p>
        </div>
      </div>
      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          ipsum architecto exercitationem dicta nesciunt odit, quod harum sed,
          obcaecati incidunt tenetur nulla cupiditate? Magni, nobis sint! Cum
          repudiandae labore architecto?
        </p>
      </div>
      {/* Tech Stack Section */}
      <h2 className="text-2xl font-semibold text-white mb-4">👨🏻‍💻 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Next.js",
        ].map((tech) => (
          <li key={tech} className="bg-gray-800 px-4 py-2 rounded-full shadow">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
