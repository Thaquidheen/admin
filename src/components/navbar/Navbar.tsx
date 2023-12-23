import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Axtella</span>
      </div>
      <div className="icons">
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>3</span>
      </div>
      <div className="user">
        <img src="https://media.licdn.com/dms/image/C4D03AQFssK7TvC52zg/profile-displayphoto-shrink_200_200/0/1658302368984?e=1708560000&v=beta&t=XF1hIeJzes4foIDU7N6w_RrzZMKc7VTUKr_AV4_o1hk" alt="" />
        <span>Thaqu</span>
      </div>
      <img src="/setting.svg"  alt="" className='icon' />
      </div>
    </div>
  )
}

export default Navbar