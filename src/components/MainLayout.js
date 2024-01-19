"use client";
import { CssBaseline } from "@mui/material";
import React from "react";

export function MainLayout({children}){
    return(
        <React.Fragment>
            <CssBaseline />
            {children}
        </React.Fragment>
    );
}