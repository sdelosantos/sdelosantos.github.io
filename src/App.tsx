import './App.css';
import ApiProvider from './core/context/ApiProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiProvider>
        <h1>Hello</h1>
      </ApiProvider>
    </QueryClientProvider>
  );
}

export default App;
