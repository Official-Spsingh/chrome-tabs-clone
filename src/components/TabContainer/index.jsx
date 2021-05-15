import React, { useState, useEffect } from 'react'
import TabComponent from '../TabComponent'

const TabContainer = () => {
    const [tabItems, settabItems] = useState([])
    const [activeTab, setactiveTab] = useState(0)
    const [activeIndex, setactiveIndex] = useState(null)
    useEffect(() => {
        let id = (new Date()).getTime()
        settabItems([{ name: 'New Tab', id: id }])
        setactiveTab(id)
    }, [])
    useEffect(() => {
        if (tabItems.length) {
            if (activeIndex == null)
                setactiveTab(tabItems[tabItems.length - 1].id)
            else {
                setactiveTab(tabItems[activeIndex].id)
                setactiveIndex(null)
            }

        }
    }, [tabItems])
    const addTabs = () => {
        let tabItemsClone = JSON.parse(JSON.stringify(tabItems))
        let id = (new Date()).getTime()
        let obj = {
            name: 'New Tab',
            id: id
        }
        tabItemsClone.push(obj)
        setactiveTab(id)
        settabItems(tabItemsClone)
        setactiveIndex(tabItemsClone.length - 1)
    }
    const removeTab = (id) => {
        let tabItemsClone = JSON.parse(JSON.stringify(tabItems))
        let activeIndex = -1
        if (id == activeTab && tabItemsClone.length > 1) {
            tabItemsClone.map((t, i) => {
                if (t.id == id) {
                    activeIndex = i - 1
                }
            })
        }
        if (tabItemsClone.length > 1) {
            tabItemsClone = tabItemsClone.filter((item) => item.id !== id);
        }
        if (activeIndex > -1)
            setactiveIndex(activeIndex)
        settabItems(tabItemsClone)
    }
    return (
        <div className="tabContainer">
            {
                tabItems.map(t => <TabComponent name={t.name} key={t.id} id={t.id} removeTab={removeTab} activeTabId={activeTab} setactiveTab={setactiveTab} />)
            }
            <button className="addIcon" onClick={addTabs}>+</button>
        </div>


    )
}

export default TabContainer
