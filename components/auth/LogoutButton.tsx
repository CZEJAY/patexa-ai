"use client"
import { logout } from '@/actions/Logout'
import React from 'react'

interface LogoutButtonProps {
    children: React.ReactNode
}

/**
 *Client component to reduce the process of logging out a user  in the latest version if auth js.
 *
 * @param {LogoutButtonProps} {
 *     @class {
 * }
 * }
 * @return {*} 
 */
const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const onClick = () => {
        logout();
    }
  return (
    <span>
        {children}
    </span>
  )
}

export default LogoutButton