import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'marathon-image-privacy',
		color: '#ff3e00',
		description:
			'In the field of sports event photography, balancing the privacy of individual runners while highlighting a specific participant presents a unique challenge. This project proposes a comprehensive solution for processing marathon images, starting with the intricate task of racing bib detection and subsequent number recognition within a marathon dataset. After identifying bib numbers, images are systematically categorized into respec- tive buckets based on these identifiers. The project emphasizes the implementation of a robust segmentation algorithm designed to effectively isolate each runner in the image. Subsequently, a privacy-preserving mechanism selectively applies blurring to all runners in the image, directing attention to the highlighted run- ner identified by the racing bib number. Through the integration of computer vision, image processing, and privacy-preserving techniques, this project aims to contribute to the ethical and thoughtful dissemination of marathon event photographs.',
		shortDescription:
			'Multi-Runner Segmentation and Privacy-Preserving Focus in Marathon Images using Racing Bib Detection',
		links: [],
		logo: Assets.Unknown,
		name: 'Privacy Preservation in Marathon Images',
		period: {
			from: new Date()
		},
		skills: getSkills('python'),
		type: 'AI/ML/DL/CV'
	},
	{
		slug: 'safety-metrics-nyc',
		color: '#ff3e00',
		description:
			'Safety is of paramount importance because it di- rectly impacts individuals’ physical well-being, emotional secu- rity, and overall quality of life. A safe environment not only ensures the absence of physical harm but also enables individuals to thrive, both personally and collectively. Through this project, our aim is to leverage Big Data Analytics tools and techniques to assess safety in various regions of New York City, recognizing the significance of both immediate and underlying factors in shaping safety outcomes. The intended exercises in our analysis involve determining the overall safety metric for each New York City neighborhood by Zip Code, understanding the geographical distribution of the positive and negative constituents and the temporal trends of the safety metrics across New York City Zip Codes. The outcomes of our analysis would provide insights that can help shape policies, develop infrastructure and undertake suitable actions to make the city safer, and more appealing, and improve the well-being of its residents, ultimately boosting the city’s prosperity.',
		shortDescription:
			'Through this project, our aim is to leverage Big Data Analytics tools and techniques to assess safety in various regions of New York City, recognizing the significance of both immediate and underlying factors in shaping safety outcomes.',
		links: [],
		logo: Assets.Unknown,
		name: 'Assessment of Safety Metrics Across Neighborhoods in NYC',
		period: {
			from: new Date()
		},
		skills: getSkills('java', 'hadoop', 'tableau', 'hive'),
		type: 'Big Data'
	},
	{
		slug: 'advanced-database-systems',
		color: '#ff3e00',
		description:
			'The project is a complex system designed for managing data transactions, ensuring data integrity, and handling various site operations in a distributed or multi-site environment.',
		shortDescription:
			'The project is a complex system designed for managing data transactions, ensuring data integrity, and handling various site operations in a distributed or multi-site environment.',
		links: [],
		logo: Assets.Unknown,
		name: 'Replicated Concurrency Control and Recovery',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp'),
		type: 'Systems'
	},
	{
		slug: 'lsb-steganography',
		color: '#ff3e00',
		description:
			"Cryptography and steganography are two methods for securing data in information security. Cryptography involves encrypting a message using a key to generate a cipher text that can only be decrypted with a secret key. Steganography involves embedding secret information inside cover data in a way that is visually imperceptible. However, as the amount of secret information to be embedded becomes significantly large, the computational demands of encoding and decoding become more intensive, making efficiency a critical consideration. To address this issue, this research proposes a parallel implementation of the Least Significant Bit (LSB) Replacement Steganography technique. This parallelization can achieve a shorter encoding-decoding times for large volumes of secret information while maintaining covertness. The implementation of this parallelized steganographic technique has the potential to improve the speed and efficiency of encoding and decoding sensitive information. In addition to this, we also present generic highly-parallelizable extensions which can be used in conjunction with any of the implemented variants. The results demonstrate the efficiency gains that can be achieved through parallelization, suggesting that this approach can have practical benefits in information hiding.",
		shortDescription:
			'Cryptography and steganography secure data. Our research suggests parallel LSB Replacement Steganography, improving efficiency in encoding and decoding large volumes of information covertly. Highly parallelizable extensions offer additional benefits, enhancing efficiency in information hiding.',
		links: [],
		logo: Assets.Unknown,
		name: 'Least Significant Bit Steganography: A Parallel Implementation',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp','openmp', 'opencv'),
		type: 'Systems'
	},
	{
		slug: 'operating-systems',
		color: '#ff3e00',
		description:
			"This project features a compilation of mini-projects simulating an Operating System's Linker, Process Scheduler, Memory Management Unit and I/O Scheduler.",
		shortDescription:
			"This project features a compilation of mini-projects simulating an Operating System's Linker, Process Scheduler, Memory Management Unit and I/O Scheduler.",
		links: [],
		logo: Assets.Unknown,
		name: 'Operating System Simulator',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp'),
		type: 'Systems'
	},
	{
		slug: 'major-project',
		color: '#ff3e00',
		description:
			"Identifying various genera and species of micro-organisms is a very important part of micro-biology, but it is a tedious task, if performed manually. However, on the other hand, machine learning algorithms provide a sophisticated and precise method to classify these micro-organisms. The proposed methods intends to make use of various deep-learning and machine learning approaches in order to build models that can classify bacteria found in water into their respective genera. Furthermore, the results obtained using the various approaches is compared to find out which method produces the most effective and accurate results. This provides critical information to determine the most suitable approach to fulfill a similar use-case in the future.",
		shortDescription:
			"Identifying microorganisms is crucial in microbiology, yet manual classification is tedious. Machine learning offers a precise alternative. Our proposed methods leverage deep learning and machine learning to classify water bacteria into genera. We compare results to determine the most effective approach, critical for future use cases.",
		links: [],
		logo: Assets.Unknown,
		name: 'Classification of Bacteria using Machine Learning Approaches',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'tensorflow', 'keras', 'numpy'),
		type: 'AL/ML/DL/CV'
	},
	{
		slug: 'heatmap-analysis-based-formation-prediction',
		color: '#ff3e00',
		description:
			"In field sports, significant time is invested in preparing players and strategies, involving analysis of opponents' style, strengths, and weaknesses. Team formation is crucial for player coordination and performance. Heatmaps track player movement frequency, indicating team formation. This project proposes deconstructing opponent heatmaps using MATLAB, segregating fields into sport-relevant zones. The study demonstrates using Python's OpenCV to identify opponent network deficiencies and generate adaptive formations, capitalizing on team strengths for favorable outcomes.",
		shortDescription:
			"The project aims to optimize sports strategies by analyzing opponents' movements, identifying weaknesses using heatmaps, and generating adaptive formations for improved performance.",
		links: [],
		logo: Assets.Unknown,
		name: 'Heat-map Analysis Based Formation Prediction in Field Sports',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'opencv'),
		type: 'AL/ML/DL/CV'
	},
	{
		slug: 'cooperative-computing-framework',
		color: '#ff3e00',
		description:
		"Our implementation is based on the paper discussing the extension of the Cooperative Computing System (CCS) framework for prioritizing task execution in distributed computing environments. We have developed a Python-based solution to enhance reliability and timeliness while minimizing resource underutilization and overhead. Leveraging the principles outlined in the paper, our implementation focuses on efficiently scheduling tasks and managing resources to ensure the successful execution of high-priority tasks. By incorporating priority-based task execution and resource allocation strategies, our Python implementation offers a robust framework for addressing the challenges of scalability and reliability in distributed computing environments.",
		shortDescription:
			"Our Python implementation extends the CCS framework to prioritize task execution in distributed computing environments. By efficiently scheduling tasks and managing resources, it enhances reliability and timeliness while minimizing overhead.",
		links: [],
		logo: Assets.Unknown,
		name: 'Framework Implementation - Priority Based Task Execution in The Distributed Computing Environment',
		period: {
			from: new Date()
		},
		skills: getSkills('python'),
		type: 'Systems'
	},
	{
		slug: 'lbp-based-nlm',
		color: '#ff3e00',
		description:
		"This project implements the LBP based NLM algorithm, combining Local Binary Patterns (LBP) and Non-Local Means (NLM) for image denoising. It utilizes Gaussian noise modeling and a weighting function to restore pixel intensities. The LBP based NLM incorporates both NLM and LBP-based weighting functions to modulate weight functions, enhancing denoising performance. Parameter values used for implementation include specific window sizes and neighborhood considerations.",
		shortDescription:
			"This project merges Local Binary Patterns (LBP) with Non-Local Means (NLM) to effectively eliminate Gaussian noise from images, employing tailored parameters for improved denoising outcomes.",
		links: [],
		logo: Assets.Unknown,
		name: 'LBP Based NLM',
		period: {
			from: new Date()
		},
		skills: getSkills(),
		type: 'AI/ML/DL/CV'
	},
	{
		slug: 'stateful-nat64-ns3',
		color: '#ff3e00',
		description:
			"In this project, our team implemented the stateful mechanism in ns-3 to allow IPv6-only clients to contact IPv4 servers using unicast UDP, TCP, or ICMP while translating IPv4 packet header to IPv6 and vice-versa.",
		shortDescription:
			"In this project, our team implemented the stateful mechanism in ns-3 to allow IPv6-only clients to contact IPv4 servers using unicast UDP, TCP, or ICMP while translating IPv4 packet header to IPv6 and vice-versa.",
		links: [],
		logo: Assets.Unknown,
		name: 'Stateful NAT64 in ns-3',
		period: {
			from: new Date()
		},
		skills: getSkills('python'),
		type: 'Systems'
	},
	{
		slug: 'hpc-travelling-salesman-problem',
		color: '#ff3e00',
		description:
			"This project involved the implementation of 2-opt local search operators for solving the TSP on the GPU using its respective application programming interface. The dataset was obtained from Reinelt’s library (called TSPLIB), containing over 100 sample instances for the TSP from varying sizes and sources.",
		shortDescription:
			"Implementation of 2-opt local search operators for solving the TSP on the GPU using its respective application programming interface. The dataset was obtained from Reinelt’s library (called TSPLIB), containing over 100 sample instances for the TSP from varying sizes and sources.",
		links: [],
		logo: Assets.Unknown,
		name: 'Heterogeneous Parallel Computing - Travelling Salesman Problem',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp'),
		type: 'Systems'
	},
	{
		slug: 'personal-finance-management',
		color: '#ff3e00',
		description:
		"Personal Finance Management deals with the management of an individual's financial budget, save and spend resources in order to allow them to balance their current investments and sustain their future needs. The Database Management Project titled ‘Personal Finance Management’ is dedicated to allowing users to better manage their money in different wallets by keeping track of their daily transactions and summarizing the history of their expenses.",
		shortDescription:
			"Personal Finance Management deals with the management of an individual's financial budget, save and spend resources in order to allow them to balance their current investments and sustain their future needs. The Database Management Project titled ‘Personal Finance Management’ is dedicated to allowing users to better manage their money in different wallets by keeping track of their daily transactions and summarizing the history of their expenses.",
		links: [],
		logo: Assets.Unknown,
		name: 'Personal Finance Management System',
		period: {
			from: new Date()
		},
		skills: getSkills('r', 'dbms'),
		type: 'Systems'
	},
	{
		slug: 'compiler-simulator',
		color: '#ff3e00',
		description:
		"Our compiler simulator project is a comprehensive endeavor undertaken in three phases to facilitate the compilation process. The first phase involves lexical analysis, where we utilize the Lex tool to generate lexical analyzers. This phase focuses on tokenizing input source code into meaningful units such as identifiers, keywords, and operators. Following lexical analysis, the second phase encompasses syntax analysis, implemented using Yacc (Yet Another Compiler Compiler). Here, the grammar rules defined in Yacc facilitate parsing the token stream generated by the lexical analyzer. This phase aims to ensure syntactic correctness by constructing a parse tree or abstract syntax tree (AST) representing the hierarchical structure of the input program. Lastly, the third phase comprises semantic analysis, which involves examining the meaning and context of the parsed program. In this phase, we perform various checks to enforce language rules and detect semantic errors. These checks may include type checking, scope analysis, and symbol table management. Our implementation is entirely in the C language, leveraging its efficiency and versatility to create a robust compiler simulator capable of analyzing, parsing, and interpreting source code.",
		shortDescription:
			"Our compiler simulator project, implemented in C, comprises three phases: lexical analysis using Lex, syntax analysis using Yacc, and semantic analysis. These phases ensure the correct parsing, structure validation, and contextual analysis of input source code, enabling the simulation of a complete compilation process.",
		links: [],
		logo: Assets.Unknown,
		name: 'Compiler Simulator',
		period: {
			from: new Date()
		},
		skills: getSkills('c'),
		type: 'Systems'
	}
];

export default MY_PROJECTS;
