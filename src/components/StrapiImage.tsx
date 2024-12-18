import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

const StrapiImage = ({ src, alt, ...props }: Props) => {
  const STRAPI_URL = process.env.DOCKER_PUBLIC_STRAPI_API_URL || "http://host.docker.internal:1337";
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
