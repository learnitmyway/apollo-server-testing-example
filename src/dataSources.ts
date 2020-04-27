import MoviesAPI from './MoviesAPI'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const dataSources = () => ({
  moviesAPI: new MoviesAPI(),
})

export default dataSources
