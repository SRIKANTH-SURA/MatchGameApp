import './index.css'

const TabItem = props => {
  const {tabDetails, onSelectTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    onSelectTab(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
