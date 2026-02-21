import { Facebookicon } from "../components/Footer/Facebook-icon"
import { Xicon } from "../components/Footer/X-icon"
import { Instagramicon } from "../components/Footer/Instagram-icon"
import type { ContactInformation, Media, Feature, Testimonial } from "../Types/Type"

export const contactInformation: ContactInformation[] = [
    {
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        iconUrl:'/images/icon-location.svg',
        alt:'location'
    },
    {
        text:'+1-543-123-4567',
        iconUrl:'/images/icon-phone.svg',
        alt:'icon phone'
    },
    {
        text:'example@fylo.com',
        iconUrl:'/images/icon-email.svg',
        alt:'icon email'
    }
]

export const pages: string[] = [
    'About us',
    'Job',
    'Press',
    'Blog'
]

export const conditions: string[] = [
    'Contact us',
    'Terms',
    'Privacy'
]

export const medias: Media [] = [
    {
        text: 'facebook',
        icon: <Facebookicon />,
    },

    {
        text: 'x',
        icon: <Xicon />
    },
    {
        text: 'instagram',
        icon: <Instagramicon />
    }
]