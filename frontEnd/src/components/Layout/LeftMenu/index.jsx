import React,{ useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

//import { StoreContext } from 'store/Store';

//import Socket, { joinToRoom, leaveFromRoom } from 'support/Socket';
import { Strings } from '../../support/Constants';
import { counter } from '../../support/Utils';

import './style.css';

const LeftMenu = ({ open, setMenuOpen }) => {
  //const { user, token, lang } = useContext(StoreContext)
  const [messages, setMessages] = useState(0)
  const [adminNotification, setAdminNotification] = useState(false)
  const menuOpen = 1 ? 'left_bar open' : 'left_bar'

  // useEffect(() => {
  //   if (user?.id) joinToRoom('pmCount:' + user.id, { token })
  //   return () => {
  //     if (user?.id) leaveFromRoom('pmCount:' + user.id)
  //   }
  // }, [user?.id, token])

  // useEffect(() => {
  //   if (user?.role >= 2) joinToRoom('adminNotification', { token })
  //   return () => {
  //     if (user?.role >= 2) leaveFromRoom('adminNotification')
  //   }
  // }, [user?.role, token])

  // useEffect(() => {
  //   Socket.on('messagesCount', (data) => {
  //     setMessages(data.count)
  //   })
  //   Socket.on('newAdminNotification', (data) => {
  //     if (data.type === 'report') {
  //       localStorage.setItem('reports', true)
  //     }
  //     if (data.type === 'file') {
  //       localStorage.setItem('files', true)
  //     }
  //     setAdminNotification(true)
  //   })
  // }, [])

  const dashboardClick = () => {
  //   setAdminNotification(false)
  //   setMenuOpen(false)
   }

  return (
    <aside className={menuOpen}>
      <nav className="main_nav">
        <ul className="nav_links">
          {1 && (
            <>
              {3 >= 2 && (
                <li className="nav_item">
                  <NavLink to="/dashboard" onClick={dashboardClick}>
                    <span className="nav_text">{Strings.dashboard[2]}</span>
                    {adminNotification && <span className="nav_counter dot"></span>}
                  </NavLink>
                </li>
              )}
              <li className="nav_item">
                <NavLink to="/messages" onClick={() => setMenuOpen(false)}>
                  <span className="nav_text">{Strings.messages[2]}</span>
                  {messages > 0 && <span className="nav_counter">{counter(messages)}</span>}
                </NavLink>
              </li>
            </>
          )}
          <li className="nav_item">
            <NavLink to="/boards" onClick={() => setMenuOpen(false)}>
              <span className="nav_text">{Strings.allBoards[2]}</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/uploads" onClick={() => setMenuOpen(false)}>
              <span className="nav_text">{Strings.filesUploads[2]}</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/users" onClick={() => setMenuOpen(false)}>
              <span className="nav_text">{Strings.users[2]}</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/admins" onClick={() => setMenuOpen(false)}>
              <span className="nav_text">{Strings.admins[2]}</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/rules" onClick={() => setMenuOpen(false)}>
              <span className="nav_text">{Strings.rules[2]}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default LeftMenu;
