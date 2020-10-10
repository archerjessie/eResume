import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Card from './Card'
import shortid from 'shortid'
const Experience = () => {
  const workHistory = [
    {
      organization: '2Cloud Technology',
      yearStart: 2020,
      yearEnd: 0,
      title: 'Junior Web Developer',
      detail:
        'Consulting company specialized in building cloud-based applications. Worked in an Agile team, I developed a React applications for client. Some tech buzz words: React, REST API, S3, EC2, SQL, CI/CD, TDD, Git',
    },
    {
      organization: 'Doncaster BMW',
      yearStart: 2017,
      yearEnd: 2020,
      title: 'Senior sale Consultant',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    },
    {
      organization: 'Camberwell Toyota',
      yearStart: 2016,
      yearEnd: 2017,
      title: 'Sales Consultant',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    },
    {
      organization: 'Lexus',
      yearStart: 2016,
      yearEnd: 2016,
      title: 'Cadet',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    }
  ]

  return (
    <section className="experience-page">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container className="page__header">
          <Typography variant="h2">Experience</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          className="page__content"
          justify="center"
        >
          {workHistory.map((data, index) => (
            <Grid key={shortid.generate()} xs={12} item>
              <Card data={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Experience
