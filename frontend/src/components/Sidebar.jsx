
import "./Sidebar.css";

function Sidebar({ activeItem, onNavigate }) {
    const menuItems = [
        { name: "Overview", icon: "▦" },
        { name: "New Investigation", icon: "+" },
        { name: "Investigation History", icon: "◷" },
        { name: "Reports", icon: "▤" },
    ];

    const bottomItems = [
        { name: "Settings", icon: "⚙" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <span className="brand-icon">V</span>
                <span>VYRAQ</span>
            </div>

            <div className="sidebar-label">WORKSPACE</div>

            <nav className="sidebar-menu">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className={`sidebar-item ${
                            activeItem === item.name ? "active" : ""
                        }`}
                        onClick={() => onNavigate(item.name)}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-bottom">
                {bottomItems.map((item) => (
                    <button
                        key={item.name}
                        className={`sidebar-item ${
                            activeItem === item.name ? "active" : ""
                        }`}
                        onClick={() => onNavigate(item.name)}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                ))}
            </div>

            <div className="sidebar-user">
                <div className="user-avatar">U</div>
                <div>
                    <p className="user-name">User Account</p>
                    <p className="user-role">Digital Investigator</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
