const profile = {
    "bio": [
        {
            "text": "I received the B.S. degree in computer science from China University of Petroleum (East China), Qingdao, China, in 2020.",
            "urls": {}
        },
        {
            "text": "I am currently working toward the Ph.D. degree in the School of Computer and Information Technology, Beijing Jiaotong University. Supervised by ",
            "urls":{
                "Youfang Lin": "https://faculty.bjtu.edu.cn/7443/",
                "Huaiyu Wan": "https://faculty.bjtu.edu.cn/8793/",
                "Shengnan Guo": "https://faculty.bjtu.edu.cn/9685/"
            }
        },
        {
            "text": "I am a visiting student at Nanyang Technological University, Supervised by ",
            "urls":{
                "Gao Cong": "https://personal.ntu.edu.sg/gaocong/"
            }
        }
    ],
    "topics": [
        "Spatial-temporal Data Mining",
        "Trajectory Mining",
        "Imputation and Generation",
        "Graph Neural Networks",
    ],
    "footnote": [
        {
            "icon": "geo-alt",
            "text": "Nanyang Technological University, 639798, Singapore"
        }
    ],
    "link": [
        {
            "icon": "envelope",
            "text": "Email",
            "url": "mailto:weitonglong@bjtu.edu.cn",
            "tip": "weitonglong@bjtu.edu.cn"
        },
        {
            "icon": "google",
            "text": "Scholar",
            "url": "https://scholar.google.com/citations?user=BWS65iAAAAAJ",
            "tip": "My Google Scholar page."
        },
        {
            "icon": "github",
            "text": "GitHub",
            "url": "https://github.com/wtl52656",
            "tip": "Where I share implementation of projects and publications."
        }
    ]
}

const News = [
    {
        "time": "[Oct. 2024]",
        "text": "I started my visiting at NTU DMAL lab, supervised by Prof. Gao Cong."
    },
    {
        "time": "[Sep. 2024]",
        "text": "I passed my PhD thesis proposal —— One step closer to graduation！ 😊"
    },
    {
        "time": "[Sep. 2024]",
        "text": "One paper about Trajectory Generation was accepted by TKDE."
    },
    {
        "time": "[Aug. 2024]",
        "text": "I will attend KDD China 2024 in Chengdu."
    },
    {
        "time": "[Jul. 2024]",
        "text": "I received the CSC funding and am ready to visit NTU one year."
    },
    {
        "time": "[Apr. 2024]",
        "text": "One paper about Trajectory Recovery was accepted by TKDE. (It is my first first-author paper in CCF A !!!)"
    },
    {
        "time": "[Dec. 2023]",
        "text": "One paper about Traffic flow imputation was accepted by KBS. (It is my first first-author paper!!!)"
    },
    {
        "time": "[Oct. 2023]",
        "text": "One paper about Traffic flow uncertain prediction was accepted by ESWA."
    },
    {
        "time": "[Aug. 2023]",
        "text": "I will attend CCF AI 2023 in Urumq."
    },
    {
        "time": "[Aug. 2023]",
        "text": "I will attend KDD China 2023 in Chengdu."
    },
    {
        "time": "[Nov. 2022]",
        "text": "One paper about Traffic flow prediction was accepted by TITS."
    },
    {
        "time": "[Sep. 2022]",
        "text": "I started my PhD candidate at Beijing Jiaotong University."
    }
]

const projects = [
    {
        "img": "hangxin.png",
        "text": "交易市场数字模型构建及收放舱操作复盘可视化原型系统研究技术服务",
        "note": "Enterprise commissioned research project. Review the operations of airline managers and airline revenue to help airlines make smart decisions."
    },
    {
        "img": "trajectory generation.png",
        "text": "基于路网约束的时空轨迹数据生成方法研究",
        "note": "Basic scientific research project of Beijing Jiaotong University (北京交通大学基本科研研究项目). Recovering and generating trajectories using graph neural networks and diffusion model techniques."
    },
    {
        "text": "面向稀疏性问题的时空轨迹生成与表示学习方法研究",
        "note": "National Natural Science Foundation of China general project (国家自然科学基金面上项目). Research on spatio-temporal trajectory generation and representation learning methods for sparsity problems."
    },
    {
        "text": "面向交通预测的时空轨迹数据预训练表示学习方法研究",
        "note": "National Natural Science Foundation of China general project (国家自然科学基金面上项目). Research on pre-training representation learning method of spatiotemporal trajectory data for traffic prediction."
    },
    {
        "text": "融合LLM的交通量预测与交通决策优化技术项目",
        "note": "Enterprise commissioned research project. Traffic flow interpolation and prediction based on large language model."
    },
    {
        "text": "陆路交通某系统模块开发和集成服务",
        "note": "Enterprise commissioned research project. Origin-Destination shortest path and travel time as well as key nodes detection of the road network."
    }
]

const publications = [
    {
        "img": "IAGCN.png",
        "title": "Inductive and adaptive graph convolution networks equipped with constraint task for spatial–temporal traffic data kriging",
        "urls": {
            "Paper": "https://www.sciencedirect.com/science/article/abs/pii/S0950705123010730",
            "Code": "https://github.com/wtl52656/IAGCN"
        },
        "received": "KBS'23",
        "authors": "<strong>Tonglong Wei</strong>, Youfang Lin, Shengnan Guo, Yan Lin, Yiji Zhao, Xiyuan Jin, Zhihao Wu, Huaiyu Wan"
    },
    {
        "img": "MMSTGED.png",
        "title": "Micro-Macro Spatial-Temporal Graph-Based Encoder-Decoder for Map-Constrained Trajectory Recovery",
        "urls": {
            "Paper": "https://ieeexplore.ieee.org/abstract/document/10517676",
            "Pre-print": "https://arxiv.org/abs/2404.19141"
        },
        "received": "TKDE'24",
        "authors": "<strong>Tonglong Wei</strong>, Youfang Lin, Yan Lin, Shengnan Guo, Lan Zhang, Huaiyu Wan"
    },
    {
        "img": "DiffRNTraj.png",
        "title": "Diff-RNTraj: A structure-aware diffusion model for road network-constrained trajectory generation",
        "urls": {
            "Paper": "https://ieeexplore.ieee.org/abstract/document/10679607",
            "Pre-print": "https://arxiv.org/abs/2402.07369",
            "Code": "https://github.com/wtl52656/Diff-RNTraj"
        },
        "received": "TKDE'24",
        "authors": "<strong>Tonglong Wei</strong>, Youfang Lin, Shengnan Guo, Yan Lin, Yiheng Huang, Chenyang Xiang, Yuqing Bai, Huaiyu Wan"
    },
    {
        "img": "PTR.png",
        "title": "PTR: A Pre-trained Language Model for Trajectory Recovery",
        "urls": {
            "Pre-print": "https://arxiv.org/abs/2410.14281"
        },
        "received": "arxiv'24",
        "authors": "<strong>Tonglong Wei</strong>, Yan Lin, Youfang Lin, Shengnan Guo, Jilin Hu, Gao Cong, Huaiyu Wan"
    },
    {
        "img": "TrajFM.png",
        "title": "TrajFM: A Vehicle Trajectory Foundation Model for Region and Task Transferability",
        "urls": {
            "Pre-print": "https://arxiv.org/abs/2408.15251"
        },
        "received": "arxiv'24",
        "authors": "Yan Lin, <strong>Tonglong Wei (Equal contribution)</strong>, Zeyu Zhou, Haomin Wen, Jilin Hu, Shengnan Guo, Youfang Lin, Huaiyu Wan"
    },
    {
        "title": "Spatial-temporal position-aware graph convolution networks for traffic flow forecasting",
        "urls": {
            "Paper": "https://ieeexplore.ieee.org/abstract/document/9945663"
        },
        "received": "TITS'22",
        "authors": "Yiji Zhao, Youfang Lin, Haomin Wen, <strong>Tonglong Wei</strong>, Xiyuan Jin, Huaiyu Wan"
    },
    {
        "title": "Spatial–temporal uncertainty-aware graph networks for promoting accuracy and reliability of traffic forecasting",
        "urls": {
            "Paper": "https://www.sciencedirect.com/science/article/abs/pii/S0957417423026453"
        },
        "received": "ESWA'23",
        "authors": " Xiyuan Jin, Jing Wang, Shengnan Guo, <strong>Tonglong Wei</strong>, Yiji Zhao, Youfang Lin, Huaiyu Wan"
    }   
]

const services = [
    {
        "text": "KBS Reviewer",
        "time": "2024"
    },
    {
        "text": "AAAI, IJCAI, KDD, TKDE, WSDM, WWW, Volunteer Reviewer",
        "time": "2021, 2022, 2023, 2024"
    },
    {
        "text": "Deep Learning, Teaching Assistant, BJTU",
        "time": "Summer & Fall 2022, 2023, 2024"
    },
    {
        "text": "Database Concepts, Teaching Assistant, BJTU",
        "time": "Fall 2020"
    },
]

const awards = [
    {
        "text": "Second Prize Scholarship of Beijing Jiaotong University",
        "time": "2023"
    },
    {
        "text": "First Prize Scholarship of Beijing Jiaotong University",
        "time": "2020, 2021, 2022"
    },
    {
        "text": "Second Prize of Shandong Science and Technology Competition",
        "time": "2020"
    },
    {
        "text": "Third Prize of China College Students Computer Design Competition",
        "time": "2019"
    }
]

const references = [
    [
        {
            "name": "Youfang Lin",
            "note": "Professor, Beijing Jiaotong University",
            "link": "https://scholar.google.com/citations?user=e8xT-e0AAAAJ&hl=en"
        },
        {
            "name": "Huaiyu Wan",
            "note": "Professor, Beijing Jiaotong University",
            "link": "https://scholar.google.com/citations?user=T5wVWIUAAAAJ&hl=en"
        },
        {
            "name": "Shengnan Guo",
            "note": "Associate Professor, Beijing Jiaotong University",
            "link": "https://scholar.google.com/citations?user=3JsSBYsAAAAJ&hl=en"
        }
    ],
    [
        {
            "name": "Gao Cong",
            "note": "Professor, Nanyang Technological University",
            "link": "https://scholar.google.com/citations?user=6eSvRMkAAAAJ&hl=en"
        },
        {
            "name": "Yan Lin",
            "note": "Postdoctoral Researcher, Aalborg University",
            "link": "https://scholar.google.com/citations?user=qjBQhoUAAAAJ&hl=zh-CN"
        }
    ]
]