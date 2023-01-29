import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';
import { Theme } from '../../../infra/theme/types';

interface ThemeProps {
  theme: Theme;
}

interface SearchProps {
  isFavouritesToggled: boolean;
  onFavouritesToggle: () => void;
}

const SearchContainer = styled.View`
  padding: ${(props: ThemeProps) => props.theme.space[3]};
`;

export const Search: React.FC<SearchProps> = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword.trim());
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
