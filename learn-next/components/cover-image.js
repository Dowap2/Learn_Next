import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const Video = styled.video`
  width: 1240px;
  height: 620px;
`;

export default function CoverImage({ title, src, slug, height, width, videoUrl }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  const video = (
    <iframe
      width={width}
      height={height}
      src="https://www.youtube.com/embed/87ehMIp9jgI?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
  return (
    <div
      className="sm:mx-0"
      onMouseOver={e => setIsMouseOver(true)}
      onMouseOut={e => setIsMouseOver(false)}
    >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{isMouseOver ? video : image}</a>
        </Link>
      ) : isMouseOver ? (
        video
      ) : (
        image
      )}
    </div>
  );
}
