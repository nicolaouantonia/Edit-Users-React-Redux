import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/user'
import { UserData } from '../../model/user'
import { Container, Modal } from 'react-bootstrap'
import UserCard from '../../components/UserCard/UserCard'
import EditModal from '../../components/EditModal/EditModal'
import './Users.scss'

export interface DispatchProps {
  retrieveUsers: () => void
  editUser: (updatedUser: UserData) => void
}

export interface StateProps {
  users?: UserData[]
  loading: boolean
}

export interface UserState {
  showModal: boolean
  editUserId?: number
}

export type UserProps = StateProps & DispatchProps

export class Users extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  componentWillMount() {
    this.props.retrieveUsers()
  }

  handleSubmit = (userData: UserData) => {
    this.props.editUser(userData)
    this.setState({ showModal: false })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  openModal = (id: number) => {
    this.setState({ showModal: true, editUserId: id })
  }

  render() {
    return (
      <Container className='pageContainer'>
        <Modal size='lg' show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditModal handleSubmit={this.handleSubmit}
              userData={this.props.users && this.state.editUserId ?
                this.props.users.find(u => u.id === this.state.editUserId) : undefined} />
          </Modal.Body>
        </Modal>
        {this.props.users && this.props.users.map((userData, index) =>
          <UserCard key={index} openModal={this.openModal} userData={userData} />
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {
    users: state.usersDashboard.users,
    loading: state.usersDashboard.loading
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  retrieveUsers: (): void => {
    actions.retrieveUsers(dispatch)
  },
  editUser: (data: UserData): void => {
    dispatch(actions.editUser(data))
  }
})

export default connect<StateProps, DispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Users)