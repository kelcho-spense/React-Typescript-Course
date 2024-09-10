import MainPanel from "../components/dashboard/MainPanel";
import SideMenu from "../components/dashboard/SideMenu";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function Dashboard() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen">
                <SideMenu />
                <MainPanel />
            </main>
            <Footer />
        </>
    )
}

