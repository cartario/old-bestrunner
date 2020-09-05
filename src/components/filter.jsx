import React, {useState} from 'react';
import styled from 'styled-components';
import {getUniq} from '../utils';

const List = styled.ul`
  display: flex;  
  width: 100%;
  margin: 0px;  
  padding: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); 
`;

const Item = styled.li`
  width: ${props=>props.width}%;  
  color: grey;
  cursor: pointer;
  text-align: left;  

  &:hover{
    color: ${props=>props.theme.primary};
  }

  &:active{
    color: ${props=>props.theme.secondary}
  }
`;

export default ({toggleSortUp, sessions, filterType, setFilterType}) => {




  

  return (
    <List>      
      <Item width={25} onClick={toggleSortUp}>Type
        <select value={filterType} onChange={(e)=>{setFilterType(e.target.value)}}>
          <option>Все</option>
            {getUniq(sessions).map((type)=><option key={type}>{type}</option>)}
        </select>
      </Item>
      <Item width={30} onClick={toggleSortUp}>Date</Item>
      <Item width={15} onClick={toggleSortUp}>Distance</Item>      
    </List>
  );
};
