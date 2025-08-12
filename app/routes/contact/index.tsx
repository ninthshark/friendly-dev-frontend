import type { Route } from "./+types";
// import { Form } from "react-router";

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const subject = formData.get("subject");
//   const message = formData.get("message");

//   const errors: Record<string, string> = {};
//   if (!name || typeof name !== "string") {
//     errors.name = "Name is required.";
//   }
//   if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
//     errors.email = "A valid email is required.";
//   }
//   if (!subject || typeof subject !== "string") {
//     errors.subject = "Subject is required.";
//   }
//   if (!message || typeof message !== "string") {
//     errors.message = "Message is required.";
//   }
//   if (Object.keys(errors).length > 0) {
//     return { success: false, errors };
//   }

//   const data = { name, email, subject, message };
//   // Here you would typically handle the form submission, e.g., send an email or save to a database
//   console.log("Form submitted:", { name, email, subject, message });
//   return { success: true, message: "Your message has been sent!", data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        📬 Contact Me
      </h2>
      <form
        action="https://formspree.io/f/xwpqyrrd"
        method="post"
        className="space-y-6"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email Subject"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
