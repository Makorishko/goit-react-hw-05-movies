import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ value: e.target[0].value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
