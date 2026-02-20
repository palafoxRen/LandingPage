interface Feature {
    title: string;
    description: string;
    iconUrl: string;
}

const FeaturesData : Feature[] = [
    {
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl: '/images/icon-access-anywhere.svg'
    },

    {
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        iconUrl: '/images/icon-security.svg'
    },

    {
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        iconUrl: '/images/icon-collaboration.svg'
    },

    {
        title: "Store any type of file",
        description: "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
        iconUrl: '/images/icon-any-file.svg'
    },
]

export const Features = () => {
    return (
        <div>
            {
                FeaturesData.map(({title, description, iconUrl}: Feature) => (
                    <div>
                    <img src={iconUrl} alt={title}/>
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}