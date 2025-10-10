import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  containerClassName = "max-w-sm rounded-lg p-4",
  imageClassName = "w-full h-auto object-cover",
  titleClassName = "text-text-primary text-2xl",
  descriptionClassName = "text-text-secondary text-base",
}) => {
  return (
    <div className={`${containerClassName} max-w-sm rounded-lg p-4`}>
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500} // You can set a base width here, but it will stretch to fill the container
          height={277}
          className={`${imageClassName} w-full  object-cover`}
        />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <h1 className={`${titleClassName} text-text-primary text-2xl`}>
          {title}
        </h1>
        <p className={`${descriptionClassName} text-text-secondary text-base`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
