import React from 'react'
import { Dropdown, Grid, Form, Button, Input, Table } from 'semantic-ui-react'

function ModifyMechanicTable({ handleInputChange, mechanicWorkplaces, currentMechanicWorkplace, handleSelectedMechanicWChange, handleUpdateMechanicW, 
  updateMechanicWorkplaceName, updateMechanicWorkplaceAddress, updateMechanicWorkplaceBoss}) {

  let mechanicWorkplaceLs
  if (currentMechanicWorkplace === undefined || currentMechanicWorkplace.name === "") {
    mechanicWorkplaceLs = (
      <Table.Row key='no-mechanics'>
        <Table.Cell collapsing textAlign='center' colSpan='6'>Choose mechanic</Table.Cell>
      </Table.Row>
    )
  } else {
    mechanicWorkplaceLs = (
      <Table.Row key={currentMechanicWorkplace.id}>
        <Table.Cell>{currentMechanicWorkplace.name}</Table.Cell>
        <Table.Cell>{currentMechanicWorkplace.address}</Table.Cell>
        <Table.Cell>{currentMechanicWorkplace.boss}</Table.Cell>
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
                placeholder='Select a Mechanic Workplace'
                selection
                options={mechanicWorkplaces.map(mechanicW => ({
                  value: mechanicW.id, 
                  text: mechanicW.name
                }))}
                onChange={handleSelectedMechanicWChange}
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
            <Table.HeaderCell width={3}>Address</Table.HeaderCell>
            <Table.HeaderCell width={3}>Boss</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mechanicWorkplaceLs}
        </Table.Body>
      </Table>

      <Grid stackable divided>
      <div style={{ margin: '20px auto', maxWidth: '600px' }}>
          <Form onSubmit={handleUpdateMechanicW}>
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
                      name='updateMechanicWorkplaceName'
                      placeholder='Name of Workplace'
                      value={updateMechanicWorkplaceName}
                      onChange={handleInputChange}
                    />
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                    <label>Address</label>
                    <Input
                      name='updateMechanicWorkplaceAddress'
                      placeholder='Address of Workplace'
                      value={updateMechanicWorkplaceAddress}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Form.Field style={{ marginLeft: '10px', marginRight: '10px'}}>
                  <label>Boss</label>
                  <Input
                      name='updateMechanicWorkplaceBoss'
                      placeholder='Boss of Workplace'
                      value={updateMechanicWorkplaceBoss}
                      onChange={handleInputChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Form.Button primary>Update Mechanic Workplace</Form.Button>
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