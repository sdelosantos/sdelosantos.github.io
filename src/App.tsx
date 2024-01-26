import ApiProvider from './core/context/ApiProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlanetsScreen from './presentation/screens/PlanetsScreen/PlanetsScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <PlanetsScreen />
      </ApiProvider>
    </QueryClientProvider>
  );
}

export default App;
