import './index.css'

const TabItem = props => {
  const {tabsList, getTabApps} = props
  const {displayText, tabId} = tabsList

  const onClickActiveApps = () => {
    getTabApps(tabId)
  }

  return (
    <li className="tab-item">
      <button className="tab-button" type="button" onClick={onClickActiveApps}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
