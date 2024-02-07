import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
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
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
