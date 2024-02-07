import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'platform-developer-intern',
		company: 'Vimbly Group',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'New York, New York, USA',
		period: { from: new Date(2023, 5, 22), to: new Date(2023, 8, 11) },
		skills: getSkills(),
		name: 'Platform Developer Intern',
		color: '#171e2e',
		links: [],
		logo: Assets.VimblyGroup,
		shortDescription: ''
	},
	{
		slug: 'senior-software-engineer',
		company: 'VISA',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Bengaluru, Karnataka, India',
		period: { from: new Date(2021, 8, 1), to: new Date(2022, 7, 1) },
		skills: getSkills(),
		name: 'Senior Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Visa,
		shortDescription: ''
	},
	{
		slug: 'software-engineer',
		company: 'VISA',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Bengaluru, Karnataka, India',
		period: { from: new Date(2019, 7, 2), to: new Date(2021, 7, 31) },
		skills: getSkills(),
		name: 'Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Visa,
		shortDescription: ''
	},
	{
		slug: 'software-engineer-intern',
		company: 'VISA',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'Bengaluru, Karnataka, India',
		period: { from: new Date(2018, 5, 7), to: new Date(2018, 7, 27) },
		skills: getSkills(),
		name: 'Software Engineer Intern',
		color: 'blue',
		links: [],
		logo: Assets.Visa,
		shortDescription: ''
	},
	{
		slug: 'research-intern',
		company: 'Qatar Computing Research Institute',
		description: '',
		contract: ContractType.Internship,
		type: 'Research',
		location: 'Doha, Qatar',
		period: { from: new Date(2017, 5, 8), to: new Date(2017, 6, 22) },
		skills: getSkills(),
		name: 'Research Intern',
		color: 'cyan',
		links: [],
		logo: Assets.QCRI,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
