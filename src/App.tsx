import React from "react";
import "./App.css";
import {UserGrid} from "./components/UserGrid";
import {AppMenuBar} from "./components/AppMenuBar";

const App: React.FC = () => {

    return (

        <div className="App">
            <header className="app-header">
                <AppMenuBar/>
            </header>
            <main className="app-main">
                <UserGrid/>
            </main>
            <footer className="app-footer">
                <p>&copy; 2024 User Card App</p>
            </footer>
        </div>
    );
};

export default App;
