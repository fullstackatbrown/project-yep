interface FullWidthCardProps {
  title: string;
  body: string;
}

export default function FullWidthCard({ title, body }: FullWidthCardProps) {
  return (
    <div className="flex min-h-[70vh] flex-col justify-between rounded-3xl bg-[#d9d9d9] p-10">
      <h2 className="font-viga text-5xl font-black uppercase tracking-tight text-[#0f0f2d]">
        {title}
      </h2>
      <p className="max-w-4xl text-sm leading-relaxed text-[#0f0f2d] text-center self-center">
        {body}
      </p>
    </div>
  );
}
