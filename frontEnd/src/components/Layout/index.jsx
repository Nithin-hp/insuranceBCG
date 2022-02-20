import React,{ Fragment, useContext, useEffect, useState } from 'react';

//import { StoreContext } from 'store/Store';

import { BACKEND, Strings } from '../Constants';

//import Modal from 'components/Modal';

//import Header from './Header';
import LeftMenu from './LeftMenu/index';
import './style.css';

const Layout = ({ children }) => {
  //const { user, token, modalOpen, setModalOpen, postType, setPostType, fab, lang } = useContext(StoreContext)
  const [menuOpen, setMenuOpen] = useState(false)
 // const coverOpen = menuOpen || modalOpen  ? 'cover open' : 'cover'

  const [onlineIndicator, setOnlineIndicator] = useState(0)

  // useEffect(() => {
  //   if (user) {
  //     updateLastSeen()
  //     setOnlineIndicator(setInterval(() => updateLastSeen(), 60000))
  //   }

  //   return () => {
  //     clearInterval(onlineIndicator)
  //   }
  //   // eslint-disable-next-line
  // }, [user])

  const updateLastSeen = () => {
    // fetch(BACKEND + '/api/profile/setOnline', {
    //   method: 'PUT',
    //   headers: {
    //     Authorization: 'Bearer ' + token
    //   }
    // })
    //   .then(response => response.json())
    //   .catch(console.error)
  }

  const fabClick = () => {
  //   setModalOpen(!modalOpen)
 }

  const coverClick = () => {
  //  1 && setMenuOpen(false)
  //   1 && setModalOpen(false)
   }

  const modalClose = () => {
    // if (
    //   postType.type === 'answer' ||
    //   postType.type === 'answerEdit' ||
    //   postType.type === 'userThreadEdit' ||
    //   postType.type === 'adminThreadEdit'
    // ) {
    //   setPostType({
    //     type: 'answer',
    //     id: postType.id
    //   })
    // }
    // if (postType.type === 'fileEdit') {
    //   setPostType({
    //     type: 'upload',
    //     id: null
    //   })
    // }
   // setModalOpen(false)
  }

  // useEffect(() => {
  //   if (menuOpen || modalOpen) {
  //     document.body.classList.add('noscroll')
  //   } else {
  //     document.body.classList.remove('noscroll')
  //   }
  // }, [menuOpen, modalOpen])

  return (
    <Fragment>
      {/* <Header setMenuState={() => setMenuOpen(!menuOpen)} /> */}

      <section className="container">
        <LeftMenu open={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="content">
          {children}
        </main>

        {1 && 1 && (
          <div className="rigth_bar">
            <div className="fab" onClick={fabClick}>
              {
               1
                 ? (
                <Fragment>
                  <span>answer[en]e</span>
                  <i className="bx bx-pencil" />
                </Fragment>
              ) : 1 ? (
                <Fragment>
                  <span>newFile[en</span>
                  <i className="bx bx-cloud-upload" />
                </Fragment>
              ) : (
                <Fragment>
                  <span>createNew[en]</span>
                  <i className="bx bx-pencil" />
                </Fragment>
              )}
            </div>
          </div>
        )}
      </section>

      {/* {1 && modalOpen && <Modal open={modalOpen} close={modalClose} />} */}

      {/* <div className={coverOpen} onClick={coverClick} /> */}
    </Fragment>
  )
}

export default Layout;
