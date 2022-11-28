import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Button, ErrorText, Form, IconSearch, Input } from './SearchBar.styled';
import { fetchSearchFilms } from 'service/api/fetchFilms';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = ({ setMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? '');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { search: '' } });

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
        console.log(data.results);
        if (data.results.length === 0) {
          toast(`Sorry, not movie ${search} in database...`);
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsByName(search);
  }, [search, setMovies]);

  return (
    <Box display="flex" position="relative" height="65px" width="100%">
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
};

export default SearchBar;
