import { Toaster } from 'react-hot-toast';

import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';

const toastOptions = {
  success: {
    style: {
      background: '#8892b06a',
      color: '#ccd6f6',
      backdropFilter: 'blur(10px)',
      fontSize: '16px',
    },
  },
  error: {
    style: {
      background: '#8892b06a',
      color: '#ccd6f6',
      backdropFilter: 'blur(10px)',
      fontSize: '16px',
    },
  },
};

function App() {
  return (
    <>
      <div className="bg-[#0a192f] min-h-screen h-full">
        <div className="max-w-7xl w-[90%] m-auto">
          <PageTitle>TODO LIST</PageTitle>
          <div className="w-full max-w-[750px] m-auto">
            <AppHeader />
            <AppContent />
          </div>
        </div>
      </div>
      <Toaster toastOptions={toastOptions} />
    </>
  );
}

export default App;
