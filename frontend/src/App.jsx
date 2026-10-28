import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Approuter from "./routers/Approuter";
import { useUser } from "./hooks/use.user";

export default function App() {
  const { handleGetUser } = useUser();
  const isLoggedIn = useSelector((s) => s.StoreState.isLoggedIn);

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Approuter />
      </main>
      <Footer />
    </div>
  );
}
