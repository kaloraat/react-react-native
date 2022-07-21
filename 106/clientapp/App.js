import { AuthProvider } from "./context/auth";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
