import React from 'react'
import { makeStyles, Grid, Hidden } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 30,
    padding: 20,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
const ResumeCard = (props) => {
  const classes = useStyles()
  const { organization, yearStart, yearEnd, title, detail } = props.data

  return (
    <Grid container className="history-card">
      <Hidden xsDown>
        <Grid item xs={2} className="timeline-left">
          <span>{yearEnd}</span>
          <input type="radio" checked readOnly></input>
        </Grid>
        <Grid item xs={2} className="timeline-right"></Grid>
      </Hidden>
      <Grid item sm={6} className="card-content">
        <Card className={classes.card}>
          <Typography variant="h5" component="h3">
            {organization}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span className="experience__year">{`${yearStart}-${yearEnd}`}</span>
            &nbsp;
            <i className="experience__divider"></i>
            &nbsp;
            <span className="experience__title">{title}</span>
          </Typography>
          <Typography variant="body2" component="p">
            {detail}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default ResumeCard
