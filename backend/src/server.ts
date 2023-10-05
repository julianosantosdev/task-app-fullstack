import app from './app'
import AppDataSource from './data-source'

AppDataSource.initialize()
  .then(() => {
    const port = 3000
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
