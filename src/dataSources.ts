import MoviesAPI from './MoviesAPI'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataSources = (): any => {
  return {
    moviesAPI: new MoviesAPI(),
  }
}

export default dataSources
