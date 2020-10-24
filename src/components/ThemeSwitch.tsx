import React from 'react'

const ThemeSwitch: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(true)

  const css: string = `
    .weather-info-card {
      color: #fff;
      background: rgba(0, 0, 0, 0.5) !important;
    }
    body {
      background: #18191A;
    }
    .navbar {
      background: #242526;
    }
    .logo {
      color: #fff !important;
    }
    .theme-text {
      color: #fff !important;
    }
    .nav-wrapper {
      border: none !important;
    }
    .nav-wrapper::before {
      display: none;
    }
    .weather-info-block {
      background: rgba(0, 0, 0, 0.5) !important;
    }
    .city {
      color: #fff !important;
    }
    .search input {
      background: transparent !important;
      color: #fff !important;
    }
    .main-content {
      box-shadow: none !important;
    }
  `

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setActive((prevVal) => !prevVal)
  }

  return (
    <div className="theme-switcher">
      <label className="switch">
        <input
          className={active ? 'active' : ''}
          type="checkbox"
          onChange={changeTheme}
        />
        <span className="slider round"></span>
      </label>
      <div className="theme-text">dark theme</div>
      <style media={active ? 'screen' : 'none'}>
        {active ? css.trim() : css}
      </style>
    </div>
  )
}

export default ThemeSwitch
