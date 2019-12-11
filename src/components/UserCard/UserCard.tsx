import React from 'react'
import { UserData } from '../../model/user'
import { Card } from 'react-bootstrap'

import './UserCard.scss'


export interface OwnProps {
  userData: UserData
  openModal: (userId: number) => void
}
let timeout: any
let count: number = 0
export type UserCardProps = OwnProps
export class UserCard extends React.Component<UserCardProps, {}> {

  handleClick= () => {
    // cancel previous callback
    if (timeout) clearTimeout(timeout)
    // increment count
    count++
    // schedule new callback  [timeBetweenClicks] ms after last click
    timeout = setTimeout(() => {
      // listen for double clicks
      if (count === 2) {
        // turn on edit mode
        this.props.openModal(this.props.userData.id)
      }
      // reset count
      count = 0
    }, 250) // 250 ms
  }


  render() {
    return (
      <Card onClick={this.handleClick} bg='dark' className='userCard' text='white'>
        <Card.Header className='title'><h2>{this.props.userData.name}</h2></Card.Header>
        <Card.Body className='details'>
          <div>{this.props.userData.email}</div>
          <div>{this.props.userData.address.city}</div>
          <div>{this.props.userData.phone}</div>
          <div>{this.props.userData.website}</div>
          <div>{this.props.userData.company.name}</div>
        </Card.Body>
      </Card>
    )
  }
}

export default UserCard