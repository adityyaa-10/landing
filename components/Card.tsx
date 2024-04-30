/* eslint-disable @next/next/no-img-element */
import localFont from 'next/font/local';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const regularFont = localFont({
    src: '../fonts/SaansTRIAL-Regular.ttf',
    style: 'normal',
})

// Define props interface
interface CardProps {
    imgUrl: string;
    title: string;
    description: string;
    tags: string[];
}

const Card: React.FC<CardProps> = ({ imgUrl, title, description, tags }) => {
    return (
        <div className="mt-1 w-full max-w-sm overflow-hidden bg-white rounded-[36px] h-full">
            <div className="relative">
                <img
                    className="object-cover w-full h-40 rounded-t-[40px]"
                    src={imgUrl}
                    alt="avatar"
                />
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-medium">{title}</h1>
                <p className={`${regularFont.className} py-2 text-base leading-[1.35em] text-black tracking-wide`}>
                    {description}
                </p>
                <div className="mt-4 text-gray-700">
                    {tags.map((tag, index) => (
                        <h1 key={index} className="px-2 text-sm">
                            {tag}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
