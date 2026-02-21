import { Contactitem } from "./Contact-item"
import { Footerlistitem } from "./Footer-list-item";
import { conditions, contactInformation, pages, medias } from '../../common/Constanst';
import type { ContactInformation } from "../../Types/Type";

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
                    conditions.map((condition: string) => (
                        <Footerlistitem key={condition} text={condition} />
                ))
            }
            </ul>

            <div className='flex justify-center gap-4'>
                {medias.map((media) =>(
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
