import React from "react";

const TicketCard = ({ t, setTaskStatus, taskStatus }) => {
  const taskHandler = () => {
    setTaskStatus([...taskStatus, t]); 
  };

  return (
    <div
      onClick={taskHandler}
      key={t.id}
      className="bg-white rounded-2xl shadow-md p-4 w-full"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-[18px] font-medium text-gray-800">{t.title}</h2>

        <span
          className={`flex items-center gap-2 ${t.status == "Open" ? "text-green-700 bg-green-100" : "text-yellow-700 bg-yellow-100"} 
                   px-3 py-2 rounded-full text-sm font-medium`}
        >
          <span
            className={`w-4 h-4 ${t.status == "Open" ? "bg-green-600" : "bg-yellow-500"} rounded-full`}
          ></span>
          {t.status}
        </span>
      </div>

      <p className="text-gray-500 mt-2 line-clamp-2">{t.description}</p>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm font-medium">#{t.id}</span>
          <span
            className={`${(t.priority == "High Priority" && "text-red-500") || (t.priority == "Low Priority" && "text-green-500") || (t.priority == "Medium Priority" && "text-yellow-400")} text-sm font-semibold uppercase`}
          >
            {t.priority}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm">{t.customer}</span>

          <div className="flex items-center gap-2">
            <img src="/public/images/icons/ri_calendar-line.png" alt="" />
            <span className="text-sm">{t.createdAt.split("T")[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
