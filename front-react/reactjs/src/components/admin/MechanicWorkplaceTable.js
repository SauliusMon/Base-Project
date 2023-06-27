import React from 'react'
import { Dropdown, Grid, Form, Button, Input, Table } from 'semantic-ui-react'

function MechanicWorkplaceTable({ handleInputChange, mechanicWorkplaces, handleDeleteMechanicWorkplace, handleCreateMechanicWorkplace,
  newMechanicWorkplaceName, newMechanicWorkplaceAddress, newMechanicWorkplaceBoss }) {
 
  let mechanicWorkplaceList
  if (mechanicWorkplaces === undefined || mechanicWorkplaces.length === 0) {
    mechanicWorkplaceList = (
      <Table.Row key='no-mechanic-workplaces'>
        <Table.Cell collapsing textAlign='center' colSpan='6'>No mechanic workplaces</Table.Cell>
      </Table.Row>
    )
  } else {
    mechanicWorkplaceList = mechanicWorkplaces.map(mechanicWorkplace => {
      return (
        <Table.Row key={mechanicWorkplace.id}>
          <Table.Cell collapsing>
            <Button
              circular
              color='red'
              size='small'
              icon='trash'
              onClick={() => handleDeleteMechanicWorkplace(mechanicWorkplace.id)}
            />
          </Table.Cell>
          <Table.Cell>{mechanicWorkplace.name}</Table.Cell>
          <Table.Cell>{mechanicWorkplace.address}</Table.Cell>
          <Table.Cell>{mechanicWorkplace.boss}</Table.Cell>
          <Table.Cell>{mechanicWorkplace.mechanicList.length}</Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <>
      <Grid stackable divided>
      <div style={{ margin: '20px auto', maxWidth: '600px' }}>
          <Form onSubmit={handleCreateMechanicWorkplace}>
            <Grid columns={3} stackable centered>
              <Grid.Row>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Name</label>
                    <Input
                      name='newMechanicWorkplaceName'
                      placeholder='Name of Workplace'
                      value={newMechanicWorkplaceName}
                      onChange={handleInputChange}
                    />
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Second Name</label>
                    <Input
                      name='newMechanicWorkplaceAddress'
                      placeholder='Address of Workplace'
                      value={newMechanicWorkplaceAddress}
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
                      name='newMechanicWorkplaceBoss'
                      placeholder='Boss of Workplace'
                      value={newMechanicWorkplaceBoss}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Form.Button primary>Create Mechanic Workplace</Form.Button>
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
            <Table.HeaderCell width={3}>Address</Table.HeaderCell>
            <Table.HeaderCell width={3}>Boss</Table.HeaderCell>
            <Table.HeaderCell width={4}>Employees</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mechanicWorkplaceList}
        </Table.Body>
      </Table>
    </>
  )
}

export default MechanicWorkplaceTable