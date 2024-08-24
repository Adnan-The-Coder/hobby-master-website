import { FaCode, FaBrain, FaChalkboardTeacher } from 'react-icons/fa';

// Is this there Where it should be I mean being where it needs to be
// Checking whether Commits are live in the github through git or not
const Features = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Hobby Master?</h2>
          <p className="mt-4 text-lg text-gray-600">Explore the benefits of learning with us</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaCode className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Hands-On Coding</h3>
              <p className="mt-2 text-gray-600">Learn by doing with practical coding exercises and projects.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaBrain className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">AI Integration</h3>
              <p className="mt-2 text-gray-600">Learn to integrate and implement AI tools to boost productivity.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <FaChalkboardTeacher className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">High Quality Content</h3>
              <p className="mt-2 text-gray-600">Crafted Excellence: Where information meets inspiration.🌟</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
