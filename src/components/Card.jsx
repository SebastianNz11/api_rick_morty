import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";

export const Card = ({ items }) => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 100,
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 5, padding: 5 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item lg={3} md={4} sm={12} xs={12} key={item.id}>
            <Paper
              elevation={5}
              sx={{
                paddingTop: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Img src={item.image} alt={item.name} />
                <Typography variant="h4" sx={{ marginTop: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="h6">{item.status}</Typography>
                <Typography>{item.species}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
