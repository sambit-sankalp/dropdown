import React, { useState } from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// components
import {
  DropdownContainer,
  DropdownInput,
  DropdownMenu,
  DropdownTool,
  DropdownTools,
  TagClose,
  TagContainer,
  DropdownLabel,
  Tag,
} from './styles';

const Dropdown = ({ placeHolder, data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }

    return (
      <TagContainer>
        {selectedValue.map((option) => (
          <Tag color={option.color} bgColor={option.hover} key={option.value}>
            {option.label}
            <TagClose onClick={(e) => onTagRemove(e, option)}>
              <FontAwesomeIcon icon={faTimes} />
            </TagClose>
          </Tag>
        ))}
      </TagContainer>
    );
  };

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
  };

  const onItemClick = (option) => {
    let newValue;
    if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
      newValue = removeOption(option);
    } else {
      newValue = [...selectedValue, option];
    }
    setSelectedValue(newValue);
  };

  const isSelected = (option) => {
    return selectedValue.filter((o) => o.value === option.value).length > 0;
  };

  return (
    <DropdownContainer>
      <DropdownInput onClick={handleInputClick}>
        <div>{getDisplay()}</div>
        <DropdownTools>
          <DropdownTool>
            <FontAwesomeIcon icon={faTimes} />
          </DropdownTool>
          <DropdownTool>|</DropdownTool>
          <DropdownTool>
            <FontAwesomeIcon icon={showMenu ? faChevronUp : faChevronDown} />
          </DropdownTool>
        </DropdownTools>
      </DropdownInput>
      {showMenu && (
        <DropdownMenu>
          {data.map((option) => (
            <DropdownLabel
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && 'selected'}`}
              color={option.color}
              bgColor={option.hover}
            >
              {option.label}
            </DropdownLabel>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
