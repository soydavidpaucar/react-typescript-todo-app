import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="bg-[#0a192f]">
      <div className="max-w-7xl w-[90%] m-auto">
        <PageTitle>TODO LIST</PageTitle>
        <div className="w-full max-w-[750px] m-auto">
          <AppHeader />
        </div>
      </div>
    </div>
  );
}

export default App;
