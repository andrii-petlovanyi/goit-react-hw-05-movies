import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Button, ErrorText, Form, IconSearch, Input } from './SearchBar.styled';
import { fetchSearchFilms } from 'service/api/fetchFilms';

const SearchBar = ({ setMovies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { search: '' } });

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? ''); // () => searchParams.get('query') ?? ''

  const onSubmit = ({ search }) => {
    setSearch(search);
    setSearchParams({ query: search });
    reset();
  };

  useEffect(() => {
    if (!search) return;

    async function getFilmsByName(search) {
      try {
        const { data } = await fetchSearchFilms(search);
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsByName(search);
  }, [search, setMovies]); //[search, setMovies]

  return (
    <Box display="flex" height="65px" width="100%">
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input
          {...register('search', { required: 'This field is required' })}
          placeholder="Search movie by name"
          autoFocus
        />
        <Button type="submit">
          <IconSearch />
        </Button>
      </Form>
      <ErrorText>{errors.search?.message}</ErrorText>
    </Box>
  );
};

export default SearchBar;
