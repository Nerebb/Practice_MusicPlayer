import {
  PauseCircleRounded,
  PlayCircleRounded,
  ShapeLine,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function CurTrack() {
  const {
    isPlaying,
    currentTrackName,
    currentTrackIndex,
    playPreviousTrack,
    playTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={(theme) => theme.palette.action.active}
      sx={{
        position: "absolute",
        bottom: 0,
        width: 1,
        left: 0,
        borderRadius: (theme) => theme.shape.borderRadius,
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
      }}
    >
      <IconButton
        aria-label={isPlaying ? "Pause" : "Resume"}
        onClick={() => playTrack(currentTrackIndex)}
      >
        {isPlaying ? <PauseCircleRounded /> : <PlayCircleRounded />}
      </IconButton>
      <Typography
        onClick={() => playTrack(currentTrackIndex)}
        sx={{ cursor: "pointer", textTransform: "capitalize" }}
      >
        {currentTrackName}
      </Typography>
      <Box>
        <IconButton
          aria-label="PreviousTrack"
          onClick={() => playPreviousTrack()}
        >
          <SkipPrevious />
        </IconButton>
        <IconButton aria-label="PreviousTrack" onClick={() => playNextTrack()}>
          <SkipNext />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CurTrack;
