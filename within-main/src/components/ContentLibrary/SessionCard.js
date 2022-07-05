import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SessionCard = ({ data, id }) => {
  const navigate = useNavigate();

  const redirectToSession = () => navigate(`/player/${id}`);

  let { title, estTime, image, level } = data;
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "30px",
        margin: "1em",
        minWidth: 300,
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            onClick={redirectToSession}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ width: "100%" }}
          >
            {`${estTime} - ${level}`}
          </Typography>
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        height="120"
        image={image}
        alt="green iguana"
        onClick={redirectToSession}
      />
    </Card>
  );
};
