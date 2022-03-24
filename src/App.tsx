import React from 'react'
import { Column } from './content/Column'
import { Card } from './content/Card'
import { AddNewItem } from './content/NewItemForm/AddNewItem'
import { AppContainer } from './styles'

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Column text="To Do">
          <Card text="Generate App scaffold" />
        </Column>

        <Column text="In Progress">
          <Card text="Learn Typescript" />
        </Column>

        <Column text="Done">
          <Card text="Begin to use static typing" />
        </Column>

        <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
      </AppContainer>
    </div>
  )
}

export default App
