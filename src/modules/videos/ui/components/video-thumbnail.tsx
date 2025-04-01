import Image from "next/image";

interface VideoThumbnailProps {
  title: string;
  imageUrl?: string | null;
  previewUrl?: string | null;
}

export default function VideoThumbnail({
  title,
  imageUrl,
  previewUrl,
}: VideoThumbnailProps) {
  return (
    <div className="relative group">
      {/* Thumbnail wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt={title}
          fill
          className="size-full object-cover group-hover:opacity-0"
        />
        <Image
          src={previewUrl ?? "/placeholder.svg"}
          alt={title}
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Video duration box */}
      {/* TODO: add video duration box */}
    </div>
  );
}
