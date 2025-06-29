import React from 'react'

export default function ProfilePicture({ user, showName }) {
    return (
        <div className="profilePicture-component">
            <img className="profilePicture" src={user.profilePicture} alt="" />
            {showName && <h3 className="profilePicture-title">{user.name}</h3>}
        </div>
    )
}
