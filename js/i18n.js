const translations = {
    'zh': {
        'nav': {
            'title': '我的个人网站',
            'research': '科研',
            'internship': '实习',
            'education': '学校教育',
            'life': '生活日常'
        },
        'hero': {
            'title': '欢迎来到我的个人网站',
            'subtitle': '这里记录了我的科研经历、实习经验、教育背景以及生活点滴'
        },
        'research': {
            'title': '科研',
            'project1': {
                'title': '非正交分解的情绪信号分析',
                'description': '项目名称：Establishing individualized emotional hyperspace through a scalable Non-orthogonal decomposing framework。基于非正交分解算法，拆解 fMRI 情绪信号，实现个性化情绪空间构建。相关代码已在GitHub开源，论文预印本发表于bioRxiv。',
                'button': '查看代码'
            },
            'project2': {
                'title': '张量重建的情绪信号补全',
                'description': '项目名称：Decoding and prediction of individual neural representations of emotion processing with a scalable tensor-based principle。采用张量分解与重建算法对情绪相关的 fMRI 信号进行预测和补全。相关代码已在GitHub开源，论文预印本发表于bioRxiv。',
                'button': '查看代码'
            },
            'project3': {
                'title': '大型 fMRI 信号模型与个性化神经分析',
                'description': '项目名称：Brain-DiT AI: Neurocognitive Profile Mapping for Personalized Neuroscience and Psychiatry。构建大模型，解析 fMRI 在底层认知结构和个性化神经精神病学应用中的可能性。相关代码已在GitHub开源，论文预印本发表于bioRxiv。',
                'button': '查看代码'
            }
        },
        'internship': {
            'title': '实习',
            'experience1': {
                'title': '私募基金实习',
                'description': '时间：2021.3-2021.5 / 2021.4-2021.6\n工作内容：新能源汽车行业研究、人工智能行业研究；基于 Gamma-Scalping 的期权对冲策略研究和隐含波动率预测建模。\n收获：熟悉资本市场的研究方法；通过量化与统计模型学习，将学术研究与金融应用相结合。',
                'button': '了解更多'
            },
            'experience2': {
                'title': '上海芯钬量子科技',
                'description': '时间：2022.7-2022.9\n工作内容：研发类似 Origin 的数据分析软件，完善底层架构文档。\n收获：加强软件开发及数据可视化实践能力，并对量子科技领域有一定了解。',
                'button': '了解更多'
            }
        },
        'education': {
            'title': '学校教育',
            'edu1': {
                'title': '本科教育 - 山东大学',
                'description': '时间：2017.9-2021.6\n学院：数学学院\n专业：统计学\n成果：多次获得学业奖学金，并在大学生数学建模竞赛、英语竞赛等赛事中获奖。',
                'button': '了解更多'
            },
            'edu2': {
                'title': '研究生教育 - 复旦大学',
                'description': '时间：2021.9-至今\n学院：类脑智能科学与技术研究院\n专业方向：应用数学（直博生）\n荣誉：连续获得复旦大学学业奖学金、荣获优秀团员、优秀学生干部等称号。',
                'button': '了解更多'
            },
            'edu3': {
                'title': '学术荣誉与组织经历',
                'description': '在学期间积极参与学术社团和学生管理组织，包括青年马克思主义研究协会、研究生会及校团委等。担任多个学生组织职务，展现出较强的组织和统筹能力。',
                'button': '了解更多'
            }
        },
        'life': {
            'title': '生活日常',
            'life1': {
                'title': '学生社团与社会活动',
                'description': '山东大学期间：担任数学建模协会学术部部长、数学学院本科学生代表，负责活动策划及学生意见收集。\n复旦大学期间：担任青年马克思主义研究协会秘书处负责人、研究生会学术文化干事、大数据学院团委组织部部长、校团委组织部副部长等职务。\n参与吉林省"百名优秀硕博进县区团建指导员"项目，将AI研究与地方产业结合。',
                'button': '了解更多'
            },
            'life2': {
                'title': '个人技能',
                'description': '英语能力：大学英语四级（602分）、六级（554分）、雅思（6.5）。\n计算机技能：熟悉Matlab、R、Python等语言。\n专业证书：持有证券从业资格证。\n竞赛获奖：全国大学生数学竞赛、美国大学生数学建模竞赛、全国大学生数学建模竞赛等多项奖项。',
                'button': '了解更多'
            },
            'life3': {
                'title': '综合能力',
                'description': '通过丰富的学生组织经验与社会实践，积累了较强的沟通协调和组织策划能力，能够在日常生活和学术活动中兼顾多重角色与职责。科研上以数学和算法为核心，深度参与大脑与情绪信号的交叉研究，为未来在科研、金融或科技领域的发展打下了坚实的基础。',
                'button': '了解更多'
            }
        },
        'footer': {
            'copyright': '© 2023 我的个人网站 - 保留所有权利',
            'social': {
                'weibo': '微博',
                'zhihu': '知乎',
                'github': 'GitHub'
            },
            'language': '切换语言：'
        }
    },
    'en': {
        'nav': {
            'title': 'My Personal Website',
            'research': 'Research',
            'internship': 'Internship',
            'education': 'Education',
            'life': 'Life'
        },
        'hero': {
            'title': 'Welcome to My Personal Website',
            'subtitle': 'Here you will find my research experience, internship experience, educational background, and life moments'
        },
        'research': {
            'title': 'Research',
            'project1': {
                'title': 'Emotional Signal Analysis with Non-orthogonal Decomposition',
                'description': 'Project: Establishing individualized emotional hyperspace through a scalable Non-orthogonal decomposing framework. Using non-orthogonal decomposition algorithms to analyze fMRI emotional signals and construct personalized emotional spaces. Code is open-sourced on GitHub, and the paper preprint is published on bioRxiv.',
                'button': 'View Code'
            },
            'project2': {
                'title': 'Emotional Signal Completion with Tensor Reconstruction',
                'description': 'Project: Decoding and prediction of individual neural representations of emotion processing with a scalable tensor-based principle. Using tensor decomposition and reconstruction algorithms for prediction and completion of emotion-related fMRI signals. Code is open-sourced on GitHub, and the paper preprint is published on bioRxiv.',
                'button': 'View Code'
            },
            'project3': {
                'title': 'Large-scale fMRI Signal Model and Personalized Neural Analysis',
                'description': 'Project: Brain-DiT AI: Neurocognitive Profile Mapping for Personalized Neuroscience and Psychiatry. Building large models to analyze the possibilities of fMRI in underlying cognitive structures and personalized neuropsychiatric applications. Code is open-sourced on GitHub, and the paper preprint is published on bioRxiv.',
                'button': 'View Code'
            }
        },
        'internship': {
            'title': 'Internship',
            'experience1': {
                'title': 'Private Equity Fund Internship',
                'description': 'Period: Mar 2021 - May 2021 / Apr 2021 - Jun 2021\nWork Content: Research on new energy vehicles and artificial intelligence industries; Research on Gamma-Scalping based option hedging strategies and implied volatility prediction modeling.\nGains: Familiarity with capital market research methods; Combining academic research with financial applications through quantitative and statistical modeling.',
                'button': 'Learn More'
            },
            'experience2': {
                'title': 'Shanghai Xinhe Quantum Technology',
                'description': 'Period: Jul 2022 - Sep 2022\nWork Content: Developed Origin-like data analysis software and improved underlying architecture documentation.\nGains: Enhanced software development and data visualization practical skills, gained understanding of quantum technology field.',
                'button': 'Learn More'
            }
        },
        'education': {
            'title': 'Education',
            'edu1': {
                'title': 'Bachelor - Shandong University',
                'description': 'Period: Sep 2017 - Jun 2021\nSchool: School of Mathematics\nMajor: Statistics\nAchievements: Multiple academic scholarships, awards in mathematical modeling competitions and English competitions.',
                'button': 'Learn More'
            },
            'edu2': {
                'title': 'Graduate - Fudan University',
                'description': 'Period: Sep 2021 - Present\nInstitute: Institute of Science and Technology for Brain-inspired Intelligence\nDirection: Applied Mathematics (Direct Ph.D.)\nHonors: Consecutive Fudan University academic scholarships, Outstanding League Member, Outstanding Student Leader.',
                'button': 'Learn More'
            },
            'edu3': {
                'title': 'Academic Honors and Organization Experience',
                'description': 'Actively participated in academic societies and student management organizations, including Youth Marxism Research Association, Graduate Student Union, and School Youth League Committee. Held multiple student organization positions, demonstrating strong organizational and coordination abilities.',
                'button': 'Learn More'
            }
        },
        'life': {
            'title': 'Life',
            'life1': {
                'title': 'Student Societies and Social Activities',
                'description': 'At Shandong University: Served as Academic Department Director of Mathematical Modeling Association and Undergraduate Student Representative of School of Mathematics.\nAt Fudan University: Served as Secretary of Youth Marxism Research Association, Academic and Cultural Officer of Graduate Student Union, Organization Department Director of School of Big Data, Deputy Director of School Youth League Committee Organization Department.\nParticipated in Jilin Province "100 Outstanding Masters and Doctors as County District Team Building Instructors" project, combining AI research with local industry.',
                'button': 'Learn More'
            },
            'life2': {
                'title': 'Personal Skills',
                'description': 'English Proficiency: CET-4 (602), CET-6 (554), IELTS (6.5).\nComputer Skills: Proficient in Matlab, R, Python, etc.\nProfessional Certificates: Securities Practitioner Qualification.\nCompetition Awards: National College Student Mathematical Contest, American College Student Mathematical Modeling Contest, National College Student Mathematical Modeling Contest, etc.',
                'button': 'Learn More'
            },
            'life3': {
                'title': 'Comprehensive Abilities',
                'description': 'Through rich student organization experience and social practice, accumulated strong communication, coordination, and organizational planning abilities, capable of managing multiple roles and responsibilities in daily life and academic activities. Research focuses on mathematics and algorithms, deeply involved in cross-research of brain and emotional signals, laying a solid foundation for future development in research, finance, or technology fields.',
                'button': 'Learn More'
            }
        },
        'footer': {
            'copyright': '© 2023 My Personal Website - All Rights Reserved',
            'social': {
                'weibo': 'Weibo',
                'zhihu': 'Zhihu',
                'github': 'GitHub'
            },
            'language': 'Switch Language: '
        }
    }
};

// 当前语言
let currentLang = 'zh';

// 切换语言函数
function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    updateContent();
    
    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', lang);
}

// 更新页面内容
function updateContent() {
    const t = translations[currentLang];
    
    // 更新页面标题
    document.title = t.nav.title;
    
    // 更新HTML语言属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新导航栏
    document.querySelector('.logo').textContent = t.nav.title;
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const section = href.replace('#', '');
        if (t.nav[section]) {
            link.textContent = t.nav[section];
        }
    });
    
    // 更新英雄区域
    document.querySelector('.hero-content h1').textContent = t.hero.title;
    document.querySelector('.hero-content p').textContent = t.hero.subtitle;
    
    // 更新各个部分的标题
    document.querySelector('#research .section-title h2').textContent = t