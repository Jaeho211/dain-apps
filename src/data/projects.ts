export interface GrowthNote {
  title: string;
  description: string;
  date?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: '준비 중' | '만드는 중' | '완성';
  tags: string[];
  // GitHub 기본 브랜치의 최초/최신 커밋 날짜 (한국 시간, YYYY-MM-DD).
  firstRegisteredAt?: string;
  lastModifiedAt?: string;
  isPlaceholder?: boolean;
  image?: { src: string; alt: string };
  links?: { label: string; url: string }[];
  growthNotes: GrowthNote[];
}

// 다인이가 만든 앱을 순서대로 기록합니다. 이미지 경로는 projects/example.webp 형식입니다.
export const projects: Project[] = [
  {
    id: 'runningsmile',
    title: 'runningsmile',
    description: '다인이가 만든 첫 번째 앱은 게임이에요. runningsmile을 직접 플레이해 보세요.',
    status: '완성',
    tags: ['첫 번째 앱', '게임'],
    firstRegisteredAt: '2025-06-04',
    lastModifiedAt: '2025-06-16',
    links: [
      { label: '게임 플레이', url: 'https://runningsmile.netlify.app/' },
      { label: '소스 코드', url: 'https://github.com/Jaeho211/runningsmile' },
    ],
    growthNotes: [],
  },
];
