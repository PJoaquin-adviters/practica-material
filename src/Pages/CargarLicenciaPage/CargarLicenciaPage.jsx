import React from "react";
import {
  Avatar,
  Badge,
  Select,
  MenuItem,
  InputLabel,
  ButtonGroup,
  Button,
  DatePicker,
  DateRangePicker,
  Typography,
  Grid,
} from "@mui/material";
import scaloni from "./scaloni.jpg";
import "./CargarLicenciaStyle.css";
import Lista from "../../components/lista/Lista";

const CargarLicenciaPage = () => {
  return (
    <Grid container>
      <Grid xs={12} lg={9} spacing={2} padding={2}>
        <main id="cl-contenedor">
          <section id="cl-titulo">
            <div>
              <Avatar alt="scaloni" src={scaloni} />
              <Typography variant="overline">Ricky</Typography>
            </div>
            <div>
              <Typography variant="h6">
                Balance actual: <b>24 días</b>
              </Typography>
            </div>
            <div>
              <Typography variant="button" display={"block"}>
                ESTADO
              </Typography>
              <Badge badgeContent={"Aún no enviado"} color="success"></Badge>
            </div>
          </section>
          <section id="cl-carga-licencia">
            <div>
              <span>
                <InputLabel id="cl-demo-select-small">
                  TIPO DE LICENCIA
                </InputLabel>
                <Select labelId="cl-demo-select-small" value="None">
                  <MenuItem value="None">
                    <em>SELECCIONE EL MOTIVO</em>
                  </MenuItem>
                  <MenuItem value={"medica"}>Médica</MenuItem>
                  <MenuItem value={"vacaciones"}>Vacaciones</MenuItem>
                  <MenuItem value={"dia-de-estudio"}>Dia de estudio</MenuItem>
                </Select>
              </span>
              <span>
                <Typography variant="h6">Archivo adjuntos</Typography>
                <Typography variant="caption" display="block">
                  No hay archivos adjuntos todavia
                </Typography>
                <Button variant="contained">SUBIR ARCHIVO</Button>
              </span>
            </div>
            <div id="cl-fecha-licencia">
              <div>
                <span className="cl-calendario-widget">
                  <span>{"Septiembre"}</span>
                  <span>
                    {21}
                    {" Lunes"}
                  </span>
                </span>
                <span className="cl-calendario-widget">
                  <span>{"Septiembre"}</span>
                  <span>
                    {21}
                    {" Lunes"}
                  </span>
                </span>
              </div>
              <ButtonGroup
                id="cl-grupo-botones-licencia"
                size="small"
                color="primary"
              >
                <Button>{8} dias laborales.</Button>
                <Button>{24} dias disponibles</Button>
              </ButtonGroup>
            </div>
            <div>
              <Typography variant="h6">DESCRIPCION</Typography>
              <textarea
                placeholder="Viaje al centro de la tierra"
                rows="4"
                cols="50"
                className="cl-textarea"
              ></textarea>
            </div>
          </section>
          <section id="cl-responsable-licencia">
            <Typography variant="h6" align="left">
              Aprobación a cargo de:
            </Typography>
            <div id="cl-contenedor-usuario">
              <Avatar alt="avatar-usuario" src={scaloni} />
              <Typography variant="overline">LIONEL SCALONI</Typography>
            </div>
            <Button
              variant="contained"
              id="cl-boton-licencia"
              sx={{ width: "fit-content", padding: "1em 2.5em" }}
            >
              SOLICITAR APROBACION
            </Button>
          </section>
        </main>
      </Grid>

      <Grid xs={12} lg={3}>
        <aside>
          <Lista titulo="Detalle de Vacaciones">

          </Lista>
        </aside>
      </Grid>
    </Grid>
  );
};

export default CargarLicenciaPage;
