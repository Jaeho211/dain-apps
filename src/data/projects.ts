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
    id: 'what-grade',
    title: '나는 몇 학년? · 수학',
    description: '수학 문제를 풀고 내 실력이 몇 학년인지 알아보세요. 다양한 유형에 도전하며 기록을 쌓을 수 있어요.',
    status: '완성',
    tags: ['수학', '학년 테스트'],
    firstRegisteredAt: '2026-10-03',
    lastModifiedAt: '2026-10-04',
    links: [
      { label: '수학 도전', url: 'https://math.dain.fun/' },
      { label: '소스 코드', url: 'https://github.com/Jaeho211/what-grade' },
    ],
    growthNotes: [],
  },
  {
    id: 'what-grade-english',
    title: '나는 몇 학년? · 영어',
    description: '영어 어휘와 독해 문제에 도전해 보세요. 문제를 풀면 내 영어 실력에 맞는 학년을 알려줘요.',
    status: '완성',
    tags: ['영어', '학년 테스트'],
    firstRegisteredAt: '2026-10-03',
    lastModifiedAt: '2026-10-04',
    links: [
      { label: '영어 도전', url: 'https://english.dain.fun/' },
      { label: '소스 코드', url: 'https://github.com/Jaeho211/what-grade-english' },
    ],
    growthNotes: [],
  },
  {
    id: 'sudoku',
    title: '스도쿠',
    description: '단계별로 풀이 방법을 배우고 스도쿠 문제에 도전해 보세요. 작은 퍼즐부터 9×9 퍼즐까지 차근차근 풀어봐요.',
    status: '완성',
    tags: ['퍼즐', '스도쿠', '단계별 학습'],
    firstRegisteredAt: '2026-10-04',
    lastModifiedAt: '2026-10-04',
    links: [
      { label: '스도쿠 시작', url: 'https://sudoku.dain.fun/' },
      { label: '소스 코드', url: 'https://github.com/Jaeho211/sudoku' },
    ],
    growthNotes: [],
  },
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
