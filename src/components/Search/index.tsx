import React from 'react';
import debounce from 'lodash.debounce';


import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('');
    inputRef.current?.focus(); 
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 800),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        className={styles.input}
        placeholder="Поиск пиццы..."
        onChange={onChangeInput}
      />
      {value && (
        <button className={styles.btn} onClick={onClickClear}>
          &#10006;
        </button>
      )}
    </div>
  );
};

export default Search;
