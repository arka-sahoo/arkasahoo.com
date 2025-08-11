export const Projects = () => {
  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">My Projects</h1>
      <p className="text-gray-700 mb-6">These are some of the projects that I have worked on</p>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-1">
            Personal Website <span className="text-gray-600 text-base font-normal">| React.js, HTML, Tailwind CSS, JavaScript</span>
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-purple-700 mb-1">
            Shipping Data Analytics <span className="text-gray-600 text-base font-normal">| COBOL</span>
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-pink-700 mb-1">
            Date Wizard <span className="text-gray-600 text-base font-normal">| Java, Spring Boot, JUnit 5</span>
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-yellow-700 mb-1">
            Prepare <span className="text-gray-600 text-base font-normal">| JavaScript</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
