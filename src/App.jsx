import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TicketCards from "./components/TicketCards";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";

const fetchTickets = fetch("/data.json").then((res) => res.json());

function App() {
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleTaskComplete = (id) => {
    const completedTask = taskStatus.find((ts) => ts.id == id);
    const remainingTasks = taskStatus.filter((ts) => ts.id != id);

    setTaskStatus(remainingTasks);
    setResolved([...resolved, completedTask]);
    toast.success(`This ${id} task is completed successfully!`);
  };

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Navbar />
        <Banner resolved={resolved} taskStatus={taskStatus} />
        <section className="container mx-auto flex flex-col lg:flex-row gap-8 pb-20">
          <div className="w-full">
            <Suspense fallback={<h1 className="text-2xl">Loading...!</h1>}>
              <TicketCards
                taskStatus={taskStatus}
                setTaskStatus={setTaskStatus}
                fetchTickets={fetchTickets}
              />
            </Suspense>
          </div>
          <div className="w-full lg:w-[35%] px-4 lg:px-0">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Task Status
              </h3>
              {taskStatus.map((ts, idx) => (
                <div
                  key={idx}
                  className="bg-white w-80 p-4 rounded shadow mb-4 border border-gray-50"
                >
                  <h3 className="text-[#0e1d35] text-[17px] font-medium tracking-tight mb-4">
                    {ts.title}
                  </h3>
                  <button
                    onClick={() => handleTaskComplete(ts.id)}
                    className="w-full bg-[#0ca643] hover:bg-[#0a8f39] text-white font-medium py-2 rounded transition-colors"
                  >
                    Complete
                  </button>
                </div>
              ))}
              {taskStatus.length == 0 && (
                <p className="text-gray-500">
                  Select a ticket to add to Task Status
                </p>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Resolved
              </h3>
              <ul>
                {resolved.map((r) => (
                  <li className="p-4 bg-[#E0E7FF] shadow rounded-sm mb-4">
                    {r.title}
                  </li>
                ))}
              </ul>
              {resolved.length == 0 && (
                <p className="text-gray-500">Task No resolved tasks yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
