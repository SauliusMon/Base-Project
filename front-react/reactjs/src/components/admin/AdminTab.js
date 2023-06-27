import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserTable from './UserTable'
import MechanicTable from './MechanicTable'
import MechanicWorkplaceTable from './MechanicWorkplaceTable'
import ModifyMechanicTable from './ModifyMechanicTable'
import ModifyMechanicWorkplace from './ModifyMechanicWorkplace'


function AdminTab(props) {
  const { handleInputChange } = props
  const { isUsersLoading, users, userUsernameSearch, handleDeleteUser, handleSearchUser } = props
  const { isMechanicsLoading, mechanics, newMechanicCurrentWorkplace, handleDeleteMechanic, handleCreateMechanic, handleSelectedMechanicWorkChange,
    newMechanicName, newMechanicSecondName, newMechanicSpecialization, newMechanicTown} = props
  const { mechanicWorkplaces, handleDeleteMechanicWorkplace, handleCreateMechanicWorkplace,
    newMechanicWorkplaceName, newMechanicWorkplaceAddress, newMechanicWorkplaceBoss } = props
  const { currentMechanic, handleSelectedMechanicChange, handleUpdateMechanic, 
    updateMechanicName, updateMechanicSecondName, updateMechanicSpecialization, updateMechanicTown } = props
  const  {currentMechanicWorkplace, handleSelectedMechanicWChange, handleUpdateMechanicW, 
    updateMechanicWorkplaceName, updateMechanicWorkplaceAddress, updateMechanicWorkplaceBoss } = props

  const panes = [
    {
      menuItem: { key: 'users', icon: 'users', content: 'Users' },
      render: () => (
        <Tab.Pane loading={isUsersLoading}>
          <UserTable
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleInputChange={handleInputChange}
            handleDeleteUser={handleDeleteUser}
            handleSearchUser={handleSearchUser}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'mechanics', icon: 'wrench', content: 'Mechanics' },
      render: () => (
        <Tab.Pane loading={isMechanicsLoading}>
          <MechanicTable
            mechanics={mechanics}
            mechanicWorkplaces={mechanicWorkplaces}
            handleDeleteMechanic={handleDeleteMechanic}
            handleCreateMechanic={handleCreateMechanic}
            handleSelectedMechanicWorkChange={handleSelectedMechanicWorkChange}

            newMechanicName={newMechanicName}
            newMechanicSecondName={newMechanicSecondName}
            newMechanicSpecialization={newMechanicSpecialization}
            newMechanicTown={newMechanicTown}
            newMechanicCurrentWorkplace={newMechanicCurrentWorkplace}
            handleInputChange={handleInputChange}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'modify-mechanic', icon: 'wrench', content: 'Modify Mechanic' },
      render: () => (
        <Tab.Pane loading={isMechanicsLoading}>
          <ModifyMechanicTable
            mechanics={mechanics}
            currentMechanic={currentMechanic}
            handleSelectedMechanicChange={handleSelectedMechanicChange}
            handleUpdateMechanic={handleUpdateMechanic}

            updateMechanicName={updateMechanicName}
            updateMechanicSecondName={updateMechanicSecondName}
            updateMechanicSpecialization={updateMechanicSpecialization}
            updateMechanicTown={updateMechanicTown}
            handleInputChange={handleInputChange}
        />
      </Tab.Pane>
    )
  },
    {
      menuItem: { key: 'mechanics-workplaces', icon: 'home', content: 'Mechanics Workplaces' },
      render: () => (
        <Tab.Pane loading={isMechanicsLoading}>
          <MechanicWorkplaceTable
          mechanicWorkplaces={mechanicWorkplaces}
          handleDeleteMechanicWorkplace={handleDeleteMechanicWorkplace}
          handleCreateMechanicWorkplace={handleCreateMechanicWorkplace}

          newMechanicWorkplaceName={newMechanicWorkplaceName}
          newMechanicWorkplaceAddress={newMechanicWorkplaceAddress}
          newMechanicWorkplaceBoss={newMechanicWorkplaceBoss}
          handleInputChange={handleInputChange}
        />
      </Tab.Pane>
    )
  },
    {
      menuItem: { key: 'modify-mechanics-workplaces', icon: 'home', content: 'Modify Mechanics Workplaces' },
      render: () => (
        <Tab.Pane loading={isMechanicsLoading}>
          <ModifyMechanicWorkplace
          mechanicWorkplaces={mechanicWorkplaces}
          currentMechanicWorkplace={currentMechanicWorkplace}
          handleSelectedMechanicWChange={handleSelectedMechanicWChange}
          handleUpdateMechanicW={handleUpdateMechanicW}

          updateMechanicWorkplaceName={updateMechanicWorkplaceName}
          updateMechanicWorkplaceAddress={updateMechanicWorkplaceAddress}
          updateMechanicWorkplaceBoss={updateMechanicWorkplaceBoss}
          handleInputChange={handleInputChange}
        />
      </Tab.Pane>
      )
    }
]

  return (
    <Tab menu={{ attached: 'top' }} panes={panes} />
  )
}

export default AdminTab