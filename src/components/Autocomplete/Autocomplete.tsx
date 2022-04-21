import { FC, useEffect, useState } from "react";
import { entitySuggestions } from "../../constants";

type AutocompleteProps = {
  userInput: string;
};

export const Autocomplete: FC<AutocompleteProps> = ({ userInput }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const suggestions = entitySuggestions.filter((suggestion) => suggestion.includes(userInput));
    if (suggestions.length > 0) setFilteredSuggestions(suggestions);
  }, [userInput]);

  const handleClick = () => {};

  return (
    <>
      {filteredSuggestions.length > 0 ? (
        <ul className="list-none overflow-y-auto border-2 border-t-0 border-gray-300 w-full max-h-40">
          {filteredSuggestions.map((suggestion, key) => (
            <li key={key} onClick={handleClick}>
              {suggestion}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
