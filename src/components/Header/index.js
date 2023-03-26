import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="score-container">
        <li className="nav-item">
          <p className="score">
            Score: <span className="text-color">{score}</span>
          </p>
        </li>
        <li className="nav-item">
          <p className="timer">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              alt="timer"
            />
            <p className="text-color">{timer} Sec</p>
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
