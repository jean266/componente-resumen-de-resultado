/* eslint-disable react/prop-types */

function Category({ data }) {
  return (
    <>
      <div
        className={`flex justify-between bg-red-light/10 p-3 mb-5 rounded-lg`}
      >
        <div className="flex gap-3">
          <img src={data[0].icon} alt="icon Reaction" />
          <p className={`text-red-light font-bold`}>{data[0].category}</p>
        </div>

        <div>
          <p className="text-gray-blue-dark/60 text-base font-bold">
            <span className="text-gray-blue-dark">{data[0].score}</span> / 100
          </p>
        </div>
      </div>

      <div
        className={`flex justify-between bg-orangey-yellow/10 p-3 mb-5 rounded-lg`}
      >
        <div className="flex gap-3">
          <img src={data[1].icon} alt="icon Reaction" />
          <p className={`text-orangey-yellow font-bold`}>{data[1].category}</p>
        </div>

        <div>
          <p className="text-gray-blue-dark/60 text-base font-bold">
            <span className="text-gray-blue-dark">{data[1].score}</span> / 100
          </p>
        </div>
      </div>

      <div
        className={`flex justify-between bg-green-teal/10 p-3 mb-5 rounded-lg`}
      >
        <div className="flex gap-3">
          <img src={data[2].icon} alt="icon Reaction" />
          <p className={`text-green-teal font-bold`}>{data[2].category}</p>
        </div>

        <div>
          <p className="text-gray-blue-dark/60 text-base font-bold">
            <span className="text-gray-blue-dark">{data[2].score}</span> / 100
          </p>
        </div>
      </div>

      <div
        className={`flex justify-between bg-cobalt-blue/10 p-3 mb-5 rounded-lg`}
      >
        <div className="flex gap-3">
          <img src={data[3].icon} alt="icon Reaction" />
          <p className={`text-cobalt-blue font-bold`}>{data[3].category}</p>
        </div>

        <div>
          <p className="text-gray-blue-dark/60 text-base font-bold">
            <span className="text-gray-blue-dark">{data[3].score}</span> / 100
          </p>
        </div>
      </div>

    </>
  );
}

export default Category;
