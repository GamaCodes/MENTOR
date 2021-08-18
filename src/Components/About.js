import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  paperSpace: {
    padding: "2rem",
    textAlign: "justify",
    margin: "2rem",
  },
  title: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className="body-contain" id="acerca">
      <Typography
        variant="h3"
        align="Center"
        color="textSecondary"
        className={classes.title}
      >
        Acerca de
      </Typography>

      <section className="service-paper">
        <Paper elevation={3} className={classes.paperSpace}>
          <Typography
            variant="h6"
            align="Center"
            color="primary"
            className={classes.title}
          >
            Misión
          </Typography>
          <section className="service-section">
            <img src="/diamond.gif" alt="diamante" className="service-img" />
          </section>
          <Typography>
            Nuestra misión es la de promover la comercialización y producción de
            bienes y servicios en el mercado nacional con el fin de mercadear y
            comercializar productos, respondiendo a las necesidades del sector
            comercial, industrial y de servicios, brindando oportunidades de
            crecimiento, apertura y éxito a nuestros socios comerciales y
            contribuyendo al desarrollo de nuestra economía nacional.
          </Typography>
        </Paper>
      </section>
      <section className="service-paper">
        <Paper elevation={3} className={classes.paperSpace}>
          <Typography
            variant="h6"
            align="Center"
            color="primary"
            className={classes.title}
          >
            Visión
          </Typography>
          <section className="service-section">
            <img src="/rocket.gif" alt="diamante" className="service-img" />
          </section>
          <Typography>
            Brindar confianza en nuestro servicio y hacer una sociedad más
            prospera para bienestar de todos.
          </Typography>
        </Paper>
      </section>
      <section className="service-paper">
        <Paper elevation={3} className={classes.paperSpace}>
          <Typography
            variant="h6"
            align="Center"
            color="primary"
            className={classes.title}
          >
            Valores Corporativos
          </Typography>
          <section className="service-section">
            <img src="/check.gif" alt="diamante" className="service-img" />
          </section>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BusinessCenterIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Compromiso ético y social con nuestro trabajo" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessCenterIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Brindamos Confianza, Seguridad, Cumplimiento y Responsabilidad" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessCenterIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Satisfacción de las expectativas de nuestros clientes" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessCenterIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Honestidad en nuestro actuar." />
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </section>
    </div>
  );
}
