import {useState, useEffect, useRef} from 'react';


const AutoComplete = ({options = ["Oranges", "Apples", "Pearls"] }) => {
    const[value, setValue] = useState("");
    const[showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()));

    const autocompleteRef = useRef();

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion);
        setShowSuggestions(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if(autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
            setShowSuggestions(false)
          }   
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    } ,[])

    return(
        <div className='autocomplete' ref={autocompleteRef}>
           <input
                value={value}
                onChange={handleChange}
                placeholder='Search'
                onFocus={() => setShowSuggestions(true)}
           />
           {showSuggestions && (
                <ul className='suggestions'>
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
           )}

        </div>
    );
}

export default AutoComplete;