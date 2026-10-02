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
  isPlaceholder?: boolean;
  image?: { src: string; alt: string };
  links?: { label: string; url: string }[];
  growthNotes: GrowthNote[];
}

// 실제 앱이 준비되면 이 항목을 교체하세요. 이미지 경로는 projects/example.webp 형식입니다.
export const projects: Project[] = [
  {
    id: 'first-app',
    title: '첫 번째 앱을 기다리는 중',
    description: '작은 아이디어가 앱이 되는 순간, 이곳에 첫 작품을 소개할 거예요.',
    status: '준비 중',
    tags: ['첫 프로젝트'],
    isPlaceholder: true,
    growthNotes: [],
  },
];
