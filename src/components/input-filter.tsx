import React, { useRef, useState } from 'react';
import classes from './input-filter.module.scss';
import MagnifyIcon from './icons/magnify-icon';

const InputFilter = ({ onChange }: any) => {
  const [inputValue, setInputValue] = useState('');

  let debounceRef = useRef<ReturnType<typeof setTimeout>>(setTimeout(() => {}, 0))
  
  // Probably use Lodash for a larger project + if more functionality required
  const handleDebounce = () => {
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onChange(inputValue);
    }, 500);
  };

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={classes.container}>
      <label
        htmlFor='filter'
        className={classes.srOnly}
      >
        Restaurant filter
      </label>

      <div className={classes.icon}>
        <MagnifyIcon size="16" />
      </div>

      <input
        type="text"
        id="filter"
        name="filter"
        placeholder="enter restaurant name or cuisine"
        onKeyUp={handleDebounce}
        onChange={handleKeyPress}
        value={inputValue}
      />
    </div>
  );
};

export default InputFilter;
