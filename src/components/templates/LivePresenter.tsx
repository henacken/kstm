import React from 'react'
import styles from './templates.module.css'
import SlideView from '../atoms/SlideView'
import LiveChat from '../organisms/LiveChat'
import MemoSpace from '../atoms/MemoSpace'

const LivePresenter = () => {
  return (
    <div>
        <SlideView />
        <LiveChat />
        <MemoSpace />
    </div>
  )
}

export default LivePresenter
