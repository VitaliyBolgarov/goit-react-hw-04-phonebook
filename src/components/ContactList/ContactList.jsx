import React from 'react';
import { Btn, Item, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  //console.log(contacts);
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}</span>

            <Btn type="button" onClick={() => onDelete(id)}>
              Delete
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
