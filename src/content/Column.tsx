import React from 'react';
import { AddNewItem } from './NewItemForm/AddNewItem';
import { ColumnContainer, ColumnTitle } from '../styles';

type ColumnProps = {
  text?: string;
};

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add another task"
        dark
      />
    </ColumnContainer>
  );
};
