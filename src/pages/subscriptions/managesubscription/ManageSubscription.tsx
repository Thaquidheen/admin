import Navbar from '../../../components/navbar/Navbar'
import './managesubscription.scss'

const ManageSubscription = () => {
  return (
    <div className="managesubscription">
          <Navbar/>
              <div className="manageinfo">
            <h1>Manage Subscription</h1>
            <div>
            <button>Add new User </button>
            <button>Bulk Upload </button>
            </div>
        </div>
    </div>
  )
}

export default ManageSubscription