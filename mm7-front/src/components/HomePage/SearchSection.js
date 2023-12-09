import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';

const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

export default function UseAutocomplete() {

  const [recipes, setRecipes] = React.useState()
  React.useEffect(() => {
    fetch("http://localhost:3333/api/recipes")
    .then((response) => response.json())
    .then((data) => setRecipes(data))
    .catch((err) => { console.log(err); });
  },[])

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: recipes,
    getOptionLabel: (option) => option.name,
  });


  return (
    <div>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Qu'allons nous manger aujourd'hui ?</Label>
        <Input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.name}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}