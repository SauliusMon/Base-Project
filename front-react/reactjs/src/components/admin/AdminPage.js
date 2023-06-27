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
    mechanics: [],
    mechanicWorkplaces: [],
  
    userUsernameSearch: '',

    newMechanicName: '',
    newMechanicSecondName: '',
    newMechanicSpecialization: '',
    newMechanicTown: '',
    newMechanicCurrentWorkplace: {},

    currentMechanic: {},

    updateMechanicName: '',
    updateMechanicSecondName: '',
    updateMechanicSpecialization: '',
    updateMechanicTown: '',

    newMechanicWorkplaceName: '',
    newMechanicWorkplaceAddress: '',
    newMechanicWorkplaceBoss: '',


    currentMechanicWorkplace: {},

    updateMechanicWorkplaceName: '',
    updateMechanicWorkplaceAddress: '',
    updateMechanicWorkplaceBoss: '',

    
    isAdmin: true,
    isUsersLoading: false,
    isMechanicsLoading: false,
    isMechanicsWorkplacesLoading: false
  }

  componentDidMount() {
    const Auth = this.context
    const user = Auth.getUser()
    const isAdmin = user.data.rol[0] === 'ADMIN'
    this.setState({ isAdmin })

    this.handleGetUsers()
    this.handleGetMechanics()
    this.handleGetMechanicsWorkplaces()
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleSelectedMechanicWorkChange = (e, { value }) => {
    const Auth = this.context
    const user = Auth.getUser()

    orderApi.getMechanicWorkplaceByID(user, value)
      .then(response => {
        this.setState({ newMechanicCurrentWorkplace: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
  }

  handleSelectedMechanicChange = (e, { value }) => {
    const Auth = this.context
    const user = Auth.getUser()

    orderApi.getMechanicByID(user, value)
      .then(response => {
        this.setState({ currentMechanic: response.data })

        this.setState({ updateMechanicName: response.data.name })
        this.setState({ updateMechanicSecondName: response.data.secondName })
        this.setState({ updateMechanicSpecialization: response.data.specialization })
        this.setState({ updateMechanicTown: response.data.town })
      })
      .catch(error => {
        handleLogError(error)
      })
  }

  handleSelectedMechanicWChange = (e, { value }) => {
    const Auth = this.context
    const user = Auth.getUser()

    orderApi.getMechanicWorkplaceByID(user, value)
      .then(response => {
        this.setState({ currentMechanicWorkplace: response.data })

        this.setState({ updateMechanicWorkplaceName: response.data.name })
        this.setState({ updateMechanicWorkplaceAddress: response.data.address })
        this.setState({ updateMechanicWorkplaceBoss: response.data.boss })
      })
      .catch(error => {
        handleLogError(error)
      })
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

handleDeleteMechanic = (mechanicID) => {
  const Auth = this.context
  const user = Auth.getUser()

  this.setState({ isMechanicsLoading: true })
  orderApi.deleteMechanic(user, mechanicID)
    .catch(error => {
      handleLogError(error)
    })
    .finally(() => {
      this.handleGetMechanics()
      this.setState({ isMechanicsLoading: false })
    })
}

handleCreateMechanic = () => {
  const Auth = this.context
  const user = Auth.getUser()

  const mechanicDtoToCreate = { 
    name: this.state.newMechanicName,
    secondName: this.state.newMechanicSecondName,
    specialization: this.state.newMechanicSpecialization,
    town: this.state.newMechanicTown,
    workplace: this.state.newMechanicCurrentWorkplace.id
  } 

  this.setState({ isMechanicsLoading: true })
  orderApi.createNewMechanic(user, mechanicDtoToCreate)
    .catch(error => {
      handleLogError(error)
    })
    .finally(() => {
      this.handleGetMechanics()
      this.setState({ isMechanicsLoading: false })
    })
  }

handleUpdateMechanic = () => {
  const Auth = this.context
  const user = Auth.getUser()

  const mechanicDtoToUpdate = { 
    id: this.state.currentMechanic.id,
    name: this.state.updateMechanicName,
    secondName: this.state.updateMechanicSecondName,
    specialization: this.state.updateMechanicSpecialization,
    town: this.state.updateMechanicTown
  } 

  this.setState({ isMechanicsLoading: true })
  orderApi.updateExistingMechanic(user, mechanicDtoToUpdate)
    .catch(error => {
      handleLogError(error)
    })
    .finally(() => {
      this.handleGetMechanics()
      this.setState({ isMechanicsLoading: false })
    })
  }
      
  handleGetMechanicsWorkplaces = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isMechanicsWorkplacesLoading: true })
    orderApi.getMechanicsWorkplaces(user)
      .then(response => {
        this.setState({ mechanicWorkplaces: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isMechanicsWorkplacesLoading: false })
      })
  }

  handleDeleteMechanicWorkplace = (mechanicWorkplaceID) => {
    const Auth = this.context
    const user = Auth.getUser()
  
    this.setState({ isMechanicsLoading: true })
    orderApi.deleteMechanicWorkplace(user, mechanicWorkplaceID)
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.handleGetMechanicsWorkplaces()
        this.setState({ isMechanicsLoading: false })
      })
  }

  handleCreateMechanicWorkplace  = () => {
    const Auth = this.context
    const user = Auth.getUser()

    const mechanicWorkplaceDtoToCreate = { 
      name: this.state.newMechanicWorkplaceName,
      address: this.state.newMechanicWorkplaceAddress,
      boss: this.state.newMechanicWorkplaceBoss,
    } 
  
    this.setState({ isMechanicsWorkplacesLoading: true })
    orderApi.createNewMechanicWorkplace(user, mechanicWorkplaceDtoToCreate)
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.handleGetMechanicsWorkplaces()
        this.setState({ isMechanicsWorkplacesLoading: false })
      })
    }

  handleUpdateMechanicW  = () => {
    const Auth = this.context
    const user = Auth.getUser()
  
    const mechanicWDtoToUpdate = { 
      id: this.state.currentMechanicWorkplace.id,
      name: this.state.updateMechanicWorkplaceName,
      address: this.state.updateMechanicWorkplaceAddress,
      boss: this.state.updateMechanicWorkplaceBoss,
    } 
  
    this.setState({ isMechanicsLoading: true })
    orderApi.updateExistingMechanicWorkplace(user, mechanicWDtoToUpdate)
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.handleGetMechanicsWorkplaces()
        this.setState({ isMechanicsLoading: false })
      })
    }

  render() {
    if (!this.state.isAdmin) {
      return <Navigate to='/' />
    } else {
      const { isUsersLoading, users, mechanics, newMechanicCurrentWorkplace, userUsernameSearch, isMechanicsLoading,
       newMechanicName, newMechanicSecondName, newMechanicSpecialization, newMechanicTown,
       mechanicWorkplaces, newMechanicWorkplaceName, newMechanicWorkplaceAddress, newMechanicWorkplaceBoss,
       currentMechanic, updateMechanicName, updateMechanicSecondName, updateMechanicSpecialization, updateMechanicTown,
       currentMechanicWorkplace, updateMechanicWorkplaceName, updateMechanicWorkplaceAddress, updateMechanicWorkplaceBoss
      
      } = this.state
      return (
        <Container>
          <AdminTab
            isUsersLoading={isUsersLoading}
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleDeleteUser={this.handleDeleteUser}
            handleSearchUser={this.handleSearchUser}
            handleInputChange={this.handleInputChange}
            
            isMechanicsLoading={isMechanicsLoading}
            mechanics={mechanics}
            newMechanicCurrentWorkplace={newMechanicCurrentWorkplace}
            handleSelectedMechanicWorkChange={this.handleSelectedMechanicWorkChange}
            handleDeleteMechanic={this.handleDeleteMechanic}
            handleCreateMechanic={this.handleCreateMechanic}
            
            newMechanicName={newMechanicName}
            newMechanicSecondName={newMechanicSecondName}
            newMechanicSpecialization={newMechanicSpecialization}
            newMechanicTown={newMechanicTown}

            currentMechanic={currentMechanic}
            handleSelectedMechanicChange={this.handleSelectedMechanicChange}
            handleUpdateMechanic={this.handleUpdateMechanic}

            updateMechanicName={updateMechanicName}
            updateMechanicSecondName={updateMechanicSecondName}
            updateMechanicSpecialization={updateMechanicSpecialization}
            updateMechanicTown={updateMechanicTown}

            mechanicWorkplaces={mechanicWorkplaces}
            handleDeleteMechanicWorkplace={this.handleDeleteMechanicWorkplace}
            handleCreateMechanicWorkplace={this.handleCreateMechanicWorkplace}

            newMechanicWorkplaceName={newMechanicWorkplaceName}
            newMechanicWorkplaceAddress={newMechanicWorkplaceAddress}
            newMechanicWorkplaceBoss={newMechanicWorkplaceBoss}

            currentMechanicWorkplace={currentMechanicWorkplace}
            handleSelectedMechanicWChange={this.handleSelectedMechanicWChange}
            handleUpdateMechanicW={this.handleUpdateMechanicW}

            updateMechanicWorkplaceName={updateMechanicWorkplaceName}
            updateMechanicWorkplaceAddress={updateMechanicWorkplaceAddress}
            updateMechanicWorkplaceBoss={updateMechanicWorkplaceBoss}

          />
        </Container>
      )
    }
  }
}

export default AdminPage