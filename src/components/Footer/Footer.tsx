import { Contactitem } from "./Contact-item"
import { Footerlistitem } from "./Footer-list-item";
import FacebookSVG from '/images/facebook-f-brands-solid-full.svg';

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

export const Footer = () => {
    return (
        <footer className="pt-65 pb-[300px] px-6" >
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

            <div className="text-white hover:text-Teal-200 cursor-pointer">
                <img src="/images/facebook-f-brands-solid-full.svg" alt="facebook" />
                <FacebookSVG />
            </div>

            </div>

        </footer>
    )
}
