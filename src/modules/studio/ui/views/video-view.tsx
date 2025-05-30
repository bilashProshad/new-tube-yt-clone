import FormSection from "../sections/form-section";

interface PageProps {
  videoId: string;
}

export default function VideoView({ videoId }: PageProps) {
  return (
    <div className="px-4 pt-2.5 max-w-screen">
      <FormSection videoId={videoId} />
    </div>
  );
}
