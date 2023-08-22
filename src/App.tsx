import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import Footer from "./ui/Footer";

function App() {
    return (
        <Router>
            <>
                <Header />
                <Home />
                <Footer/>
            </>
        </Router>
    )
}

export default App;
