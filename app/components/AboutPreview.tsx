import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col items-center gap-8 bg-gray-900">
      <img
        src="/images/profile.jpg"
        alt="KiKi's Profile"
        className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">👋🏻 About Me</h2>
        <p className="text-gray-200 mb-4 max-w 4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore
          nostrum perferendis totam tempora quae, quod veritatis eveniet natus
          deleniti.
        </p>
        <Link
          to="/about"
          className="inline-block text-blue-400 hover:underline text-sm"
        >
          Learn more about me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
