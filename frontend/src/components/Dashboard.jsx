import NewInvestigation from "./NewInvestigation";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

function Dashboard() {
    const [activeItem, setActiveItem] = useState("Overview");

    return (
        <div className="dashboard-layout">
            <Sidebar
                activeItem={activeItem}
                onNavigate={setActiveItem}
            />

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div>
                        <p className="dashboard-label">WORKSPACE</p>
                        <h1>{activeItem}</h1>
                        <p className="dashboard-subtitle">
                            Manage your digital content investigations.
                        </p>
                    </div>

                    <button
                        className="new-investigation-btn"
                        onClick={() => setActiveItem("New Investigation")}
                    >
                        + New Investigation
                    </button>
                </header>

                {activeItem === "Overview" && (
                    <>
                        <section className="welcome-section">
                            <h2>Digital Content Investigation</h2>
                            <p>
                                Examine suspicious content, verify claims,
                                and review evidence in one place.
                            </p>
                        </section>

                        <section className="investigation-section">
                            <div className="section-heading">
                                <h2>Recent Investigations</h2>
                            </div>

                            <div className="empty-investigations">
                                <div className="empty-icon">⌕</div>
                                <h3>No investigations yet</h3>
                                <p>
                                    Your investigation history will appear here
                                    once you analyze your first piece of content.
                                </p>

                                <button
                                    className="start-btn"
                                    onClick={() => setActiveItem("New Investigation")}
                                >
                                    Start an Investigation
                                </button>
                            </div>
                        </section>
                    </>
                )}

                {activeItem === "New Investigation" && (
                    <NewInvestigation />
                )}

                {activeItem === "Investigation History" && (
                    <section className="investigation-section">
                        <h2>Investigation History</h2>
                        <p>Your previous investigations will appear here.</p>
                    </section>
                )}

                {activeItem === "Reports" && (
                    <section className="investigation-section">
                        <h2>Verification Reports</h2>
                        <p>Your generated reports will appear here.</p>
                    </section>
                )}

                {activeItem === "Settings" && (
                    <section className="investigation-section">
                        <h2>Settings</h2>
                        <p>Manage your workspace preferences.</p>
                    </section>
                )}
            </main>
        </div>
    );
}

export default Dashboard;
