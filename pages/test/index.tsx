import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [quesNum, setQuesNum] = useState<number>(1);

  return (
    <Container sx={{ marginTop: "10px" }}>
      <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
        Test form
      </Typography>

      <Box component="form">
        <TextField
          onChange={(e) => {
            if (+e.target.value < 2) e.target.value = "1";
            setQuesNum(+e.target.value);
          }}
          type="number"
          required
          id="question__number"
          label="Question Number"
          name="ques_num"
        />
        {new Array(quesNum).fill(1).map((_, i) => (
          <div key={i}>
            <TextField
              fullWidth
              margin="normal"
              required
              id="question"
              label={`Question${i + 1}`}
              name={`question${i + 1}`}
            />
          </div>
        ))}

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Create Test
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
