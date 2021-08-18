import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2rem",
    textAlign: "justify",
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

export default function Service() {
  const classes = useStyles();

  return (
    <div className="body-contain" id="servicio">
      <Typography
        variant="h3"
        align="Center"
        color="textSecondary"
        className={classes.title}
      >
        Servicios
      </Typography>
      <section className="service-paper">
        <Paper elevation={3} className={classes.paper}>
          <Typography>
            Somos un aliado estratégico para las empresas que buscan realizar
            compras o proyectos de manera confiable y sin contratiempos. Nuestra
            experiencia nos permite brindarte un servicio totalmente
            personalizado, desarrollando cada proyecto a la medida de sus
            necesidades.
          </Typography>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Proporcionar asistencia técnica y de servicio sobre desarrollo organizacional
en áreas administrativas, técnicas productivas, comercializadoras de
consolidación en su mercado o de incursión en nuevos mercados a empresas
corporativas y personas físicas o morales."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Obtener
y otorgar por cualquier título, patentes, marcas, nombres
comerciales, opciones y preferenciales, derechos de autor y concesiones
para todo tipo de actividades"
                />
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </section>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.pexels.com/photos/3735782/pexels-photo-3735782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="equipo de laboratorio"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Equipo de laboratorio
                </Typography>
                <Typography>
                  Comercialización, compra, venta y distribución de productos
                  químicos, farmacéuticos, de laboratorio y más...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Equipo de oficina
                </Typography>
                <Typography>
                  Mobiliaria y equipo de administración, muebles de oficina y
                  estantería, bienes artísticos, culturales, científicos y
                  más...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.pexels.com/photos/8413080/pexels-photo-8413080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Equipo de seguridad
                </Typography>
                <Typography>
                  Compra venta y distribución de vestuario, blancos, prendas de
                  protección y artículos deportivos, vestuario, uniformes y
                  más...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          align="Center"
          color="textSecondary"
          className={classes.title}
        >
          Otros Servicios
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.pexels.com/photos/7883467/pexels-photo-7883467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Fertilizantes, pesticidas y otros agroquímicos, plaguicidas
                  abonos y fertilizantes material de limpieza
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Compra venta y distribución de material e instalación para el
                  servicio de energía eléctrica, energía solar, gas, tanque
                  estacionario en cilindros
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://images.pexels.com/photos/46801/coal-briquette-black-46801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Combustibles, lubricantes, aditivos, carbón y sus derivados.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
