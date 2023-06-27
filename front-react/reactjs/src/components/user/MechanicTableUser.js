import React from 'react'
import { Dropdown, Grid, Form, Button, Input, Table } from 'semantic-ui-react'

function MechanicTableUser ({ mechanics, handleRateMechanic, currentMechanicRating, handleInputChange}) {
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
              color='green'
              size='small'
              icon='check'
              onClick={() => handleRateMechanic(mechanic.id)}
            />
          </Table.Cell>
          <Table.Cell> 
            <Input
                name='currentMechanicRating'
                placeholder='Rating'
                value={currentMechanicRating}
                onChange={handleInputChange}
            />
          </Table.Cell>
          <Table.Cell>{currentMechanicRating.rating == undefined ? mechanic.rating == undefined ? '0.0' : mechanic.rating : currentMechanicRating.rating}</Table.Cell>
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
      <Table compact striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}/>
            <Table.HeaderCell width={1}>Rating</Table.HeaderCell>
            <Table.HeaderCell width={2}>Name</Table.HeaderCell>
            <Table.HeaderCell width={2}>Second Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Specialization</Table.HeaderCell>
            <Table.HeaderCell width={2}>Town</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mechanicList}
        </Table.Body>
      </Table>
    </>
  )
}

export default MechanicTableUser