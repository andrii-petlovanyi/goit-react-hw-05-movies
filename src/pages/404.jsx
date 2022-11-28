import { Box } from 'components/Box';

const NotFound = () => {
  return (
    <Box
      as="main"
      display="flex"
      textAlign="center"
      justifyContent="center"
      padding="20px"
      color="white"
    >
      <h1>Sorry, this page not found...</h1>
    </Box>
  );
};

export default NotFound;
