import React from "react";
import { List } from "./components/List";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";

export const App = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${count}`
    );
    const data = await response.json();
    setItems(data.results);
  };

  const countPageTop = () => {
    setCount(count + 1);
    count === 42 ? setCount(42) : null;
  };
  const countPageButtom = () => {
    setCount(count - 1);
    count === 1 ? setCount(1) : null;
  };

  useEffect(() => {
    fetchData();
  }, [items]);

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant="h1">Api Rick & Morty</Typography>
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={countPageButtom}>
            Anterior
          </Button>
          <Button variant="contained" onClick={countPageTop}>
            Página {count}
          </Button>
        </Container>
        <List items={items} />
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            mt: 3,
            mb: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={countPageButtom}>
            Anterior
          </Button>
          <Button variant="contained" onClick={countPageTop}>
            Página {count}
          </Button>
        </Container>
      </Container>
    </>
  );
};
