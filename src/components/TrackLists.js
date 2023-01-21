import useMusicPlayer from "../hooks/usePlayerProvider";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import "./AlbumIcon.css";

function TrackLists() {
  const { trackList, playTrack, currentTrackIndex } = useMusicPlayer();
  return (
    <Box>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <Stack key={`track-${index}`} sx={{ flexGrow: "1" }}>
          <Box
            display="flex"
            mt={2}
            sx={{ bgColor: (theme) => theme.palette.action.selected }}
          >
            {currentTrackIndex === index ? (
              <AlbumIcon className="beating" />
            ) : (
              <></>
            )}
            <Typography
              className="song-title"
              onClick={() => playTrack(index)}
              sx={{
                ml: 1,
                textTransform: "capitalize",
                color:
                  currentTrackIndex === index
                    ? (theme) => theme.palette.text.secondary.darker
                    : "",
                fontWeight: currentTrackIndex === index ? "bold" : "",
              }}
            >
              {track.name}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
}

export default TrackLists;
