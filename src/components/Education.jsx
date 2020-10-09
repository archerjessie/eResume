import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Card from './Card'
import shortid from 'shortid'
const Education = () => {
  const educationHistory = [
    {
      organization: 'JR Academy',
      yearStart: 2019,
      yearEnd: 2020,
      title: 'Full-Stack Web Development Training Course',
    },
    {
      organization: 'Monash University',
      yearStart: 2013,
      yearEnd: 2014,
      title: 'Master of Applied Finance',
    },
    {
      organization: 'Monash University',
      yearStart: 2010,
      yearEnd: 2013,
      title: 'BA of Commerce and Finance',
    },
  ]

  return (
    <section className="experience-page">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container className="page__header">
          <Typography variant="h2">Education</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          className="page__content"
          justify="center"
        >
          {educationHistory.map((data) => (
            <Grid key={shortid.generate()} item sm={12}>
              <Card data={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Education
