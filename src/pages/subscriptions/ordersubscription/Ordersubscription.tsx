import Navbar from '../../../components/navbar/Navbar'
import './ordersubscription.scss'

const Ordersubscription = () => {
  return (
    <div className="ordersubscription">
        <Navbar/>
              <div className="orderinfo">
            <h1>Order Subscription</h1>
            <div>
            <button>Add new User </button>
            <button>Bulk Upload </button>
            </div>
        </div>
    </div>
  )
}

export default Ordersubscription