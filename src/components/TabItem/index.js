import './index.css'

const TabItem = props => {
  const {tabsList, updateTab, isActive} = props
  const {displayText, tabId} = tabsList

  const onClickActiveApps = () => {
    updateTab(tabId)
  }

  const isActiveTab = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        className={`${isActiveTab} tab-button`}
        type="button"
        onClick={onClickActiveApps}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
