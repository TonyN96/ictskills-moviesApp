import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import WatchlistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToWatchlist = (e) => {
        e.preventDefault();
        context.addToWatchlist(movie);
    };
    return (
        <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
            <WatchlistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToWatchlistIcon;
