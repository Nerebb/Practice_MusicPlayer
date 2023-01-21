import { Container, Typography } from "@mui/material";
import CurTrack from "./components/CurTrack";
import TrackLists from "./components/TrackLists";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "32px", fontWeight: "bold",mb:2 }}>
        MUI concepts Practice
      </Typography>
      <Container
        maxWidth={"sm"}
        sx={{
          p: 2,
          width: "425px",
          minHeight: "450px",
          backgroundColor: (theme) => theme.palette.action.disabledBackground,
          borderRadius: (theme) => theme.shape.borderRadius,
          color: (theme) => theme.palette.text.white,
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <TrackLists />
        <CurTrack />
      </Container>
    </Container>
  );
}

export default App;
