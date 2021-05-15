import React from 'react'

const TabComponent = ({ name, id, removeTab, activeTabId, setactiveTab }) => {
    return (
        <div className={activeTabId === id ? "tabItem active" : "tabItem"}
            onClick={(e) => { e.preventDefault(); setactiveTab(id) }}
        >
            <div className="tabName">
                {name}
            </div>
            <div className="crossIcon">
                <button onClick={(e) => { e.preventDefault(); removeTab(id) }} className="removeTabIcon">x</button>
            </div>
        </div>
    )
}

export default TabComponent
