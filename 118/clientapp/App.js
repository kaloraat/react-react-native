import { AuthProvider } from "./context/auth";
import { TaskProvider } from "./context/task";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
}
