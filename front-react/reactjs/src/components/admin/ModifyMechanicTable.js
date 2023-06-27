import React from 'react'
import { Dropdown, Grid, Form, Button, Input, Table } from 'semantic-ui-react'

function ModifyMechanicTable({ handleInputChange, mechanics, currentMechanic, handleSelectedMechanicChange, handleUpdateMechanic, 
  updateMechanicName, updateMechanicSecondName, updateMechanicSpecialization, updateMechanicTown}) {
  
  let mechanicLs
  if (currentMechanic === undefined || currentMechanic.name === "") {
    mechanicLs = (
      <Table.Row key='no-mechanics'>
        <Table.Cell collapsing textAlign='center' colSpan='6'>Choose mechanic</Table.Cell>
      </Table.Row>
    )
  } else {
    mechanicLs = (
      <Table.Row key={currentMechanic.id}>
        <Table.Cell>{currentMechanic.name}</Table.Cell>
        <Table.Cell>{currentMechanic.secondName}</Table.Cell>
        <Table.Cell>{currentMechanic.specialization}</Table.Cell>
        <Table.Cell>{currentMechanic.town}</Table.Cell>
      </Table.Row>
    );
  }

  return (
    <>
    <Form>
      <Grid columns={3} stackable centered>
        <Grid.Row>
          <Grid.Column>
            <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
              <label>Select a Mechanic</label>
              <Dropdown
                placeholder='Select a Mechanic'
                selection
                options={mechanics.map(mechanic => ({
                  value: mechanic.id, 
                  text: mechanic.name
                }))}
                onChange={handleSelectedMechanicChange}
              />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>    
      </Form>
      
      <Table compact striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={3}>Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Second Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Specialization</Table.HeaderCell>
            <Table.HeaderCell width={4}>Town</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mechanicLs}
        </Table.Body>
      </Table>

      <Grid stackable divided>
      <div style={{ margin: '20px auto', maxWidth: '600px' }}>
          <Form onSubmit={handleUpdateMechanic}>
            <Grid columns={3} stackable centered>
              <Grid.Row>
                {/* <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Select a Meal</label>
                    <Dropdown
                      placeholder='Select a Category'
                      selection
                      options={mealsCategories.map(category => ({
                        value: category, 
                        text: category
                      }))}
                      onChange={handleMealCategoryChange}
                    />
                  </Form.Field>
                </Grid.Column> */}
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Name</label>
                    <Input
                      name='updateMechanicName'
                      placeholder='Name of Mechanic'
                      value={updateMechanicName}
                      onChange={handleInputChange}
                    />
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Second Name</label>
                    <Input
                      name='updateMechanicSecondName'
                      placeholder='Second Name of Mechanic'
                      value={updateMechanicSecondName}
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
                      name='updateMechanicSpecialization'
                      placeholder='Specialization of Updated Mechanic'
                      value={updateMechanicSpecialization}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                  <label>Town</label>
                  <Input
                      name='updateMechanicTown'
                      placeholder='Town of Updated Mechanic'
                      value={updateMechanicTown}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Form.Button primary>Update Mechanic</Form.Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </div>
      </Grid>
    </>
  )
}

export default ModifyMechanicTable