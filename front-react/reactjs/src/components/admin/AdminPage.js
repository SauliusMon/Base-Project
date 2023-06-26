import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import AuthContext from '../context/AuthContext'
import { orderApi } from '../misc/OrderApi'
import AdminTab from './AdminTab'
import { handleLogError } from '../misc/Helpers'

class AdminPage extends Component {
  static contextType = AuthContext

  state = {
    users: [],
    orders: [],
  
    userUsernameSearch: '',
   
    isAdmin: true,
    isUsersLoading: false,
    isOrdersLoading: false,
  }

  componentDidMount() {
    const Auth = this.context
    const user = Auth.getUser()
    const isAdmin = user.data.rol[0] === 'ADMIN'
    this.setState({ isAdmin })

    this.handleGetUsers()
    this.handleGetOrders()
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }


  handleGetUsers = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isUsersLoading: true })
    orderApi.getAllUsers(user)
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isUsersLoading: false })
      })
  }

  handleSearchUser = () => {
    const Auth = this.context
    const user = Auth.getUser()

    let username = this.state.userUsernameSearch
    orderApi.getUsersFilteredByUsername(user, username)
      .then(response => {
        const data = response.data
        const users = data instanceof Array ? data : [data]
        this.setState({ users })
      })
      .catch(error => {
        handleLogError(error)
        this.setState({ users: [] })
      })
    
  }

  handleDeleteUser = (username) => {
    const Auth = this.context
    const user = Auth.getUser()

    orderApi.deleteUser(user, username)
      .then(() => {
        this.handleGetUsers()
      })
      .catch(error => {
        handleLogError(error)
      })
  }


  handleGetOrders = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isOrdersLoading: true })
    orderApi.getOrders(user)
      .then(response => {
        this.setState({ orders: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isOrdersLoading: false })
      })
  }

  handleDeleteOrder = (orderID) => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isOrdersLoading: true })
    orderApi.deleteOrder(user, orderID)
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.handleGetOrders()
        this.handleGetMeals()
        this.handleGetMenus()
        this.setState({ isOrdersLoading: false })
      })
  }

  handleAcceptOrder = (orderID) => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isOrdersLoading: true })
    orderApi.acceptOrder(user, orderID)
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.handleGetOrders()
        this.setState({ isOrdersLoading: false })
      })
  }


  render() {
    if (!this.state.isAdmin) {
      return <Navigate to='/' />
    } else {
      const { isUsersLoading, users, orders, userUsernameSearch, isOrdersLoading
       
      } = this.state
      return (
        <Container>
          <AdminTab
            isUsersLoading={isUsersLoading}
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleDeleteUser={this.handleDeleteUser}
            handleSearchUser={this.handleSearchUser}
            
            isOrdersLoading={isOrdersLoading}
            orders={orders}
            handleDeleteOrder={this.handleDeleteOrder}
            handleAcceptOrder={this.handleAcceptOrder}
            handleInputChange={this.handleInputChange}
          />
        </Container>
      )
    }
  }
}

export default AdminPage