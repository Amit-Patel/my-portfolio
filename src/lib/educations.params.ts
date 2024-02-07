import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'B.Tech. in Computer Science and Engineering',
		description: '',
		location: 'Mangalore, Karnataka, India',
		logo: Assets.Unknown,
		name: '',
		organization: 'National Institute of Technology Karnataka, India',
		period: { from: new Date(2015, 8, 3), to: new Date(2019, 5, 31) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: []
		// subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Master of Science in Computer Science',
		description: '',
		location: 'New York, New York, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'New York University',
		period: { from: new Date(2022, 9, 1), to: new Date(2024, 5, 15) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: []
		// subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];
