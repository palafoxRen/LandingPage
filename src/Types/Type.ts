import type { JSX } from "react";

export interface ContactInformation {
    text: string;
    iconUrl: string;
    alt: string;
}

export interface Media {
    text: string,
    icon: JSX.Element,
}

