import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Projects =()=>(
    <section className="projects-page">
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item container className="page__header">
        <Typography variant="h2">Projects</Typography>
      </Grid>
      <Grid item>
            <ul>
                <li>
                    <a href="https://archerjessie.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Weather Forecast App</a>
                </li>
                <li>
                    <a href="https://archerjessie.github.io/calculator-react/" target="_blank" rel="noopener noreferrer">Online Calculator</a>
                </li>
                <li>
                    <a href="https://archerjessie.github.io/city-air-quality/" target="_blank" rel="noopener noreferrer">City Air Quality Dashboard</a>
                </li>
            </ul>
      </Grid>
    </Grid>
  </section>
)
export default Projects;

