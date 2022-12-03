import { ToastContainer } from 'react-toastify';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import 'react-toastify/dist/ReactToastify.min.css';

const contextClass = {
  success: 'backdrop-blur bg-[#8892b0]/[.6] text-[#ccd6f6] font-sans text-sm',
  error: 'backdrop-blur bg-red-600/[.60] text-[#ccd6f6] font-sans text-sm',
};

function App() {
  return (
    <>
      <div className="bg-[#0a192f] h-screen">
        <div className="max-w-7xl w-[90%] m-auto">
          <PageTitle>TODO LIST</PageTitle>
          <div className="w-full max-w-[750px] m-auto">
            <AppHeader />
          </div>
        </div>
      </div>
      <ToastContainer
        toastClassName={({ type }) =>
          `${
            contextClass[type || 'default']
          } relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-5`
        }
      />
    </>
  );
}

export default App;
