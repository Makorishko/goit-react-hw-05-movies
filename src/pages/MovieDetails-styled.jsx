import styled from 'styled-components';

export const DetailsContainer = styled.header`
  display: flex;
  padding: 15px;
  border-bottom: 2px;
  box-shadow: 7px 3px 3px lightgrey;
  margin-bottom: 10px;
`;
export const ListOfDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const ListOfGenres = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
  padding-left: 0px;
`;
export const AdditionalContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: inherit;
  border-bottom: 2px;
  box-shadow: 7px 3px 3px lightgrey;
  margin-bottom: 10px;
  padding-bottom: 15px;
  padding-left: 40px;

`;
