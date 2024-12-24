import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

const StrapiImage = ({ src, alt, ...props }: Props) => {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_SERVER_URL;
  const imageUrl = src.startsWith("/") ? `${STRAPI_URL}${src}` : src;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      {...props}
    />
  );
};

export default StrapiImage;
