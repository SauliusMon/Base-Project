import React from 'react'
import { Dropdown, Grid, Form, Button, Input, Table } from 'semantic-ui-react'

function MechanicTable({ handleInputChange, mechanics, mechanicWorkplaces, newMechanicCurrentWorkplace, handleDeleteMechanic, handleCreateMechanic, handleSelectedMechanicWorkChange,
  newMechanicName, newMechanicSecondName, newMechanicSpecialization, newMechanicTown}) {
  let mechanicList
  if (mechanics === undefined || mechanics.length === 0) {
    mechanicList = (
      <Table.Row key='no-mechanics'>
        <Table.Cell collapsing textAlign='center' colSpan='6'>No mechanics</Table.Cell>
      </Table.Row>
    )
  } else {
    mechanicList = mechanics.map(mechanic => {
      return (
        <Table.Row key={mechanic.id}>
          <Table.Cell collapsing>
            <Button
              circular
              color='red'
              size='small'
              icon='trash'
              onClick={() => handleDeleteMechanic(mechanic.id)}
            />
          </Table.Cell>
          <Table.Cell>{mechanic.name}</Table.Cell>
          <Table.Cell>{mechanic.secondName}</Table.Cell>
          <Table.Cell>{mechanic.specialization}</Table.Cell>
          <Table.Cell>{mechanic.town}</Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <>
      <Grid stackable divided>
      <div style={{ margin: '20px auto', maxWidth: '600px' }}>
          <Form onSubmit={handleCreateMechanic}>
            <Grid columns={3} stackable centered>
              <Grid.Row>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Select a Mechanic Workplace</label>
                    <Dropdown
                      placeholder='Select a Mechanic Workplace'
                      selection
                      options={mechanicWorkplaces.map(mechanicW => ({
                        value: mechanicW.id, 
                        text: mechanicW.name
                      }))}
                      onChange={handleSelectedMechanicWorkChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Name</label>
                    <Input
                      name='newMechanicName'
                      placeholder='Name of Mechanic'
                      value={newMechanicName}
                      onChange={handleInputChange}
                    />
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Second Name</label>
                    <Input
                      name='newMechanicSecondName'
                      placeholder='Second Name of Mechanic'
                      value={newMechanicSecondName}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                  <label>Specialization</label>
                  <Input
                      name='newMechanicSpecialization'
                      placeholder='Specialization of New Mechanic'
                      value={newMechanicSpecialization}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                  <label>Town</label>
                  <Input
                      name='newMechanicTown'
                      placeholder='Town of New Mechanic'
                      value={newMechanicTown}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Form.Button primary>Create Mechanic</Form.Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </div>
      </Grid>
      <Table compact striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}/>
            <Table.HeaderCell width={3}>Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Second Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Specialization</Table.HeaderCell>
            <Table.HeaderCell width={4}>Town</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mechanicList}
        </Table.Body>
      </Table>
    </>
  )
}

export default MechanicTable