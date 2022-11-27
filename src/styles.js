import styled from 'styled-components';

export const DropdownContainer = styled.div`
  text-align: left;
  position: relative;
  width: 50%;
`;

export const DropdownLabel = styled.div`
  color: ${({ color }) => color};
  &:hover {
    background-color: ${({ bgColor }) => bgColor};
  }
`;

export const Tag = styled.div`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  padding: 3px 10px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const DropdownInput = styled.div`
  border: 2px solid #0093d9;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownTool = styled.div`
  cursor: pointer;
  margin: 0 5px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  transform: translateY(8px);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: auto;
  background-color: #fff;
  z-index: 99;

  .dropdown-item {
    padding: 10px;
    cursor: pointer;
  }

  .dropdown-item.selected {
    display: none;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const TagClose = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
