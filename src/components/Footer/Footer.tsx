import { Contactitem } from "./Contact-item"
import { Footerlistitem } from "./Footer-list-item";
import { Facebookicon } from "./Facebook-icon";
import type { JSX } from "react";
import { Xicon } from "./X-icon";
import { Instagramicon } from "./Instagram-icon";

interface ContactInformation {
    text: string;
    iconUrl: string;
    alt: string;
}

const contactInformation: ContactInformation[] = [
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

const pages: string[] = [
    'About us',
    'Job',
    'Press',
    'Blog'
]

const conditions: string[] = [
    'Contact us',
    'Terms',
    'Privacy'
]

interface Media {
    text: string,
    icon: JSX.Element,
}

const medias: Media [] = [
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

export const Footer = () => {
    return (
        <footer className="pt-65 pb-[60px] px-6" >
            <img className="mb-10" src="/images/logo.svg" alt="Logo" />

            <div className="flex flex-col gap-4 ">
            {
                contactInformation.map((contact: ContactInformation) => (
                    <Contactitem key={contact.alt} {...contact} />
                ))
            }
            </div>

            <div className="flex flex-col gap-8 mt-16">
            <ul>
                {
                    pages.map((page: string) =>(
                        <Footerlistitem key={page} text={page} />
                    ))
                }
            </ul>

            <ul>
                {
                    conditions.map((condition) => (
                        <Footerlistitem key={condition} text={condition} />
                ))
            }
            </ul>

            <div className='flex justify-center gap-4'>
                {medias.map((media: Media) =>(
                        <div key={media.text} className="text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5">
                            {media.icon}
                        </div>
                    ))
                }
            </div>

            </div>

        </footer>
    )
}
