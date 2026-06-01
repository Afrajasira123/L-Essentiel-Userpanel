import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent({ totalPages, page, handleChange }) {
    return (
        <Stack
            spacing={2}
            sx={{
                mt: 4,
                alignItems: "center",
            }}
        >
            <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: "black", // Adapted for light background
                    },
                    "& .Mui-selected": {
                        bgcolor: "black !important",
                        color: "white !important",
                    },
                }}
            />
        </Stack>
    );
}
