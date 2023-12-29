'use client'

interface vTitle{
    subtitle:string
}

export const CardSubTitle = ({subtitle}:vTitle) => (
    <>
      <p className="text-xs text-left pl-2 font-bold min-h-[50px] max-h-[50px] truncate-height">{subtitle}</p>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );