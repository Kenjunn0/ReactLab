import ToDoList from "./components/toDoList";
import Topbar from "./components/Topbar";
function App() {

  return (
      <html lang="en">
        <body>
            <Topbar />
            <main className="flex flex-row">
                <div className="bg-gray-950 flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-32">
                    <ToDoList />
                </div>
            </main>
        </body>
      </html>
  );
}

export default App;