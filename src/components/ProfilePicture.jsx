import React from 'react'
import Delete from '../assets/delete.svg'

export default function ProfilePicture({ user, showName, deleteChat }) {
    return (
        <div className='profilePicture-wrap'>
            <div className="profilePicture-component">
                <img className="profilePicture" src={user.profilePicture} alt="" />
                {showName && <h3 className="profilePicture-title">{user.name}</h3>}
            </div>
            {deleteChat && <img src={Delete} alt="" className="icon-small" onClick={() => deleteChat(user)} />}
        </div>
    )
}
