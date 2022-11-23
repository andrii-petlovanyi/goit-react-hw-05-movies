import { fetchTrendFilms } from 'service/api/fetchFilms';

export const App = () => {
  (async function getTrendFilms() {
    try {
      const { data } = await fetchTrendFilms();
      console.log(data);
    } catch (error) {}
  })();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      Hello..=)
    </div>
  );
};
