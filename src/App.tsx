import './App.css';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';
import ApiProvider from './core/context/ApiProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <PlanetsTable />
      </ApiProvider>
    </QueryClientProvider>
  );
}

export default App;
