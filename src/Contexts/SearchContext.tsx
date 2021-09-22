import React, { createContext, FC, useState } from 'react'
import { SearchContextStatus } from './SearchContextStatus'

const contextDefaultValues : SearchContextStatus = {
    searchTerm: "",
    Search:  (searchItem: string) => {}
};

export const SearchContext = createContext<SearchContextStatus>(
    contextDefaultValues
);

const SearchContextProvider: FC = ({children}) => {
    const [searchTerm, setsearchTerm] = useState<string>("");
    const Search = (searchItem: string) => setsearchTerm(searchItem);

    return( 
        <SearchContext.Provider value={{
            searchTerm,
            Search
        }}>
            {children}
        </SearchContext.Provider>
        
    );

} 
export default SearchContextProvider