import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import SkillCategory from './SkillCategory'
const Skills = () => {
  return (
    <section className="skill-page">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container className="page__header">
          <Typography variant="h2">Skills</Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <SkillCategory
              name="Front End"
              rating={4.5}
              detail=" React, NPM, Webpack, HTML5, CSS3, SCSS, Bootstrap, Material UI, ES6, JQuery"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCategory
              name="Back End"
              rating={3}
              detail=" C#, JAVA, NodeJs, RESTful API"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <SkillCategory
              name="Cloud Service"
              rating={1.5}
              detail="AWS S3, AWS EC2, AWS IAM, AWS RDS, AWS CloudWatch"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SkillCategory
              name="Database"
              rating={3}
              detail="SQL Server, TSQL, RDS, MongoDB"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <SkillCategory
            name="Develop Tools & Platform"
            rating={3}
            detail="Jira, Jenkins, GitHub, Postman, VS Code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SkillCategory
            name="Methodologies"
            rating={3.5}
            detail="Agile, Scrum, CI/CD, TDD (Test Driven Development)"
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default Skills
