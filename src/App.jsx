import AppRoutes from "./routes/AppRoutes";
import ProfileProvider from "./contexts/ProfileProvider";
import { PreferencesProvider } from "./contexts/PreferencesContext";

function App() {
    return (
        <PreferencesProvider>
            <ProfileProvider>
                <AppRoutes />
            </ProfileProvider>
        </PreferencesProvider>
    );
}

export default App;
