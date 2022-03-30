
import { Button, TextField } from '@mui/material';
import styledd from 'styled-components';
import { styled } from '@mui/material/styles'
export const SearchBar = styledd.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const SearchFiled = styled(TextField)`
  margin-right: 20px; 
`;

export const SearchButton = styled(Button)`
  text-transform: capitalize;
`;

export const Content = styledd.div`
  display:flex;
  margin:40px;
`;


