import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import { orderApi } from '../misc/OrderApi'
import { handleLogError } from '../misc/Helpers'

import AuthContext from '../context/AuthContext'
import MechanicTableUser from './MechanicTableUser'


class UserPage extends Component {
  static contextType = AuthContext

  state = {
    isUser: true,

    mechanics: [],

    currentMechanicRating: '',

    isMechanicsLoading: false
  }

  componentDidMount() {
    const Auth = this.context
    const user = Auth.getUser()
    const isUser = user.data.rol[0] === 'USER'
    this.setState({ isUser })

    this.handleGetMechanics()
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleGetMechanics = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isMechanicsLoading: true })
    orderApi.getMechanics(user)
      .then(response => {
        this.setState({ mechanics: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isMechanicsLoading: false })
      })
  }

  handleRateMechanic = (mechanicID) => {
    const Auth = this.context
    const user = Auth.getUser()

    console.log(this.state.currentMechanicRating)
  
    this.setState({ isMechanicsLoading: true })
    orderApi.updateExistingMechaniRating(user, mechanicID, this.state.currentMechanicRating)
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.handleGetMechanics()
        this.setState({ isMechanicsLoading: false })
      })
    }


  render() {
    if (!this.state.isUser) {
      return <Navigate to='/' />
    } else {
      const { 
        mechanics, currentMechanicRating
      } = this.state
      return (
        <Container>
          <MechanicTableUser
            mechanics = {mechanics}
            currentMechanicRating = {currentMechanicRating}
            handleRateMechanic = {this.handleRateMechanic}
            handleInputChange = {this.handleInputChange}
          ></MechanicTableUser>
        </Container>
      )
    }
  }
}

export default UserPage