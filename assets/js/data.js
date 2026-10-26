/* ==========================================================================
   SITE CONTENT — edit this file to update your portfolio.
   No build step: change text here, commit, and GitHub Pages redeploys.
   Images currently load from mdreazulislam.info. To make the site fully
   independent, download them into /assets/img/ and change WP below to
   "assets/img/".
   ========================================================================== */

const WP = "https://mdreazulislam.info/wp-content/uploads/";

const SITE = {
  name: "Md. Reazul Islam",
  shortName: "Reazul Islam",
  role: "PhD Student in Computer Science",
  affiliation: "University at Albany, State University of New York",
  lab: "Computer Vision and Machine Learning (CVML) Lab",
  location: "Albany, New York",
  email: "mislam7@albany.edu",
  photo: WP + "2023/05/reazmama-e1683254536159.png",
  cv: "assets/cv/Md_Reazul_Islam_CV.pdf",
  links: {
    scholar: "https://scholar.google.com/citations?user=qvP0kzkAAAAJ&hl=en",
    github: "https://github.com/md-reazul-islam",
    linkedin: "https://www.linkedin.com/in/md-reazul-islam-reaz/",
    website: "https://mdreazulislam.info",
    twitter: "https://twitter.com/MdReazu98962731"
  },
  interests: [
    "Non-contact vital-sign monitoring",
    "Computer vision for healthcare",
    "Domain adaptation",
    "Motion-robust deep learning",
    "AIoT and edge–cloud systems",
    "Trustworthy medical AI"
  ],
  bioShort:
    "Md. Reazul Islam is a PhD student in Computer Science at the University at Albany, SUNY, researching Artificial Intelligence, Deep Learning, Computer Vision, IoT, and Smart Healthcare. His doctoral research focuses on developing motion-aware and domain-adapted deep learning methods for non-contact monitoring of heart rate, respiration, motion, and neurological status in newborns in the NICU. His broader research spans AI-enabled healthcare, medical imaging, intelligent IoT, and environmental monitoring. Before beginning his PhD, he spent seven years teaching computer science at universities in Bangladesh and led IoT and AI research that resulted in 20+ publications and multiple national innovation awards. He is also actively engaged in academic service, peer review, mentoring, and research leadership.",
  bioLong: [
    "Md. Reazul Islam is a PhD student in Computer Science at the University at Albany, State University of New York (SUNY), where he conducts research at the intersection of artificial intelligence, deep learning, computer vision, the Internet of Things, and intelligent healthcare systems. His doctoral research focuses on motion-aware and domain-adapted deep learning for non-contact physiological and neurological monitoring of neonates in neonatal intensive care units (NICUs). His work aims to develop robust, clinically relevant AI systems that support continuous monitoring of vital and behavioral signals while reducing dependence on conventional contact-based sensing.",
    "His broader research interests span AI-enabled healthcare, medical and physiological monitoring, computer vision, edge and IoT intelligence, multimodal sensing, smart healthcare infrastructure, environmental intelligence, and intelligent cyber-physical systems. His research philosophy centers on translating advances in machine learning into practical systems that address real-world challenges in healthcare, safety, environmental monitoring, agriculture, and human-centered technology.",
    "Before beginning his doctoral studies in the United States, he built an academic and research career in Bangladesh. He served as an Assistant Professor of Computer Science at American International University-Bangladesh (AIUB) and previously held teaching positions at Bangladesh University of Business and Technology and Daffodil International University. He was also a Lead Researcher at the Advanced Machine Intelligence Research Lab, where he worked on AI, machine learning, deep learning, and IoT-based research. His background also includes experience in software and application development.",
    "His scholarly work includes journal articles, conference papers, and book chapters on IoT-enabled healthcare, remote health monitoring, machine learning-based safety systems, agricultural intelligence, computer vision, intelligent recognition systems, and medical AI. His work has appeared in venues such as Sensors, Multimedia Tools and Applications, and the Journal of Agriculture and Food Research, as well as in edited academic volumes. Through collaborative work on breast cancer classification and tumor localization from histopathological images, his research has also extended into medical imaging and explainable deep learning.",
    "At the University at Albany, he has presented research at UAlbany Showcase 2026 and the AI+ Symposium. His Showcase work introduced an AI-IoT edge-cloud framework for real-time air pollution monitoring and mapping for sustainable urban planning, which was later featured by the University at Albany. The project combines AI with networked sensing to monitor, predict, and map pollution, giving users actionable information about locations with hazardous air quality.",
    "Beyond research, he is active in academic service, peer review, mentoring, and research leadership. He reviews manuscripts for Springer Nature, Elsevier, and IEEE journals, including Discover Artificial Intelligence, Scientific Reports, Discover Computing, Cluster Computing, Industrial Crops and Products, IEEE Transactions on Multimedia, IEEE Transactions on Circuits and Systems for Video Technology, and Engineering Applications of Artificial Intelligence. He has also judged science and technology competitions and advised student innovation and IEEE activities.",
    "His research and innovation work has been recognized nationally and internationally, with honors including the National Innovation Award from the Government of Bangladesh, the Huawei ICT Incubator Innovation Award, the Bangabandhu Innovation Grant International Innovation Award, and the Best Supervisor Award from the Daffodil International University ICT Carnival.",
    "His long-term goal is to build trustworthy intelligent systems that connect AI with real-world sensing and healthcare environments. Through his doctoral research and interdisciplinary collaborations, he seeks to contribute to scalable, non-invasive, and clinically meaningful AI technologies that bridge computer science, biomedical applications, IoT sensing, and intelligent decision support."
  ]
};

/* Current research — shown as the featured block under the hero */
const RESEARCH = [
  {
    title: "Non-contact multi-vital monitoring of neonates",
    status: "PhD research",
    summary:
      "Camera-based estimation of heart rate, respiratory rate and body motion for newborns in the NICU, removing the need for skin-attached sensors that can injure fragile skin.",
    points: [
      "Motion-aware remote photoplethysmography (rPPG) that tolerates infant movement and caregiver interaction",
      "Domain adaptation across cameras, lighting, skin tones and hospital sites",
      "Neurological status and seizure-related motion analysis from video",
      "Clinically meaningful evaluation against bedside monitor ground truth"
    ],
    tags: ["Computer vision", "rPPG", "Domain adaptation", "Clinical AI"]
  },
  {
    title: "Agentic AIoT for urban air quality",
    status: "UAlbany Showcase 2026",
    summary:
      "An edge–cloud framework and mobile app that predicts and maps air pollution in real time, alerts users to hot spots, and suggests lower-exposure routes.",
    points: [
      "Low-cost sensor network with edge preprocessing",
      "Predictive rather than reactive pollution mapping",
      "Route planning that compares AQI exposure along alternatives"
    ],
    tags: ["AIoT", "Edge–cloud", "Agentic AI", "Sustainability"],
    link: "https://www.albany.edu/node/124526"
  },
  {
    title: "Closed-loop metabolic monitoring",
    status: "UAlbany Showcase 2026",
    summary:
      "An IoT-enabled adaptive framework that tracks metabolic signals and personalizes dietary recommendations as the user’s data changes.",
    points: [
      "Continuous sensing with feedback into personalized recommendations",
      "Adaptive models that update to the individual over time"
    ],
    tags: ["IoMT", "Personalized health", "Adaptive ML"]
  }
];

/* News — newest first. date: "YYYY-MM" or "YYYY" */
const NEWS = [
  { date: "2026", text: "Two papers in Frontiers in Oncology on single-cell and spatial multi-omics and on graph neural networks for breast cancer drug resistance." },
  { date: "2026", text: "Elderly remote health monitoring and fall detection dataset published in Data in Brief." },
  { date: "2026-04", text: "Presented two projects at UAlbany Showcase Day 2026: AIoT air pollution mapping and closed-loop metabolic monitoring." },
  { date: "2026-04", text: "Featured by the University at Albany: “UAlbany Student Develops App to Help You Avoid Pollution Hot Spots.”", link: "https://www.albany.edu/node/124526" },
  { date: "2026", text: "Served as a judge at the Tri-County Science and Technology Fair 2026." },
  { date: "2026", text: "Joined the reviewer pool for IEEE Transactions on Multimedia, IEEE Transactions on Circuits and Systems for Video Technology, and Engineering Applications of Artificial Intelligence." },
  { date: "2025", text: "Presented “The Ethics of AI in Academic Work” at the AI+ Symposium, University at Albany." },
  { date: "2025-08", text: "Started the PhD in Computer Science at the University at Albany, SUNY, as a Graduate Teaching Assistant." },
  { date: "2025", text: "Began reviewing for Scientific Reports, Discover Artificial Intelligence, Discover Computing, and Cluster Computing (Springer Nature)." },
  { date: "2024-09", text: "Women’s safety wearable published online in Multimedia Tools and Applications (Springer).", link: "https://link.springer.com/article/10.1007/s11042-024-20228-5" },
  { date: "2024-01", text: "Appointed Assistant Professor of Computer Science, American International University-Bangladesh." },
  { date: "2023-01", text: "Research team won five national awards at Digital Bangladesh Mela 2023." },
  { date: "2023", text: "Remote health monitoring system published in Sensors (MDPI).", link: "https://www.mdpi.com/1424-8220/23/11/5204" }
];

/* Publications. type: journal | conference | chapter | dataset
   Add doi/url when you have them; year:null shows as "Forthcoming". */
const PUBLICATIONS = [
  {
    type: "journal", year: 2025,
    title: "Machine learning-driven IoT device for women’s safety: a real-time sexual harassment prevention system",
    authors: "Md. Reazul Islam, Khondokar Oliullah, Md Mohsin Kabir, Ashifur Rahman, M. F. Mridha, Muhammad Fayyaz Khan, Nilanjan Dey",
    venue: "Multimedia Tools and Applications (Springer), 84(23), 27251–27280",
    cites: 25,
    url: "https://link.springer.com/article/10.1007/s11042-024-20228-5",
    abstract: "A wearable with nine force-sensitive resistors streams data via NodeMCU to the cloud, where an AdaBoost classifier (99.3% accuracy on a 1,048-instance lab dataset from 50 participants) detects harassment events in real time and alerts authorities through a mobile app.",
    featured: true
  },
  {
    type: "journal", year: 2023,
    title: "Deep learning-based IoT system for remote monitoring and early detection of health issues in real-time",
    authors: "Md. Reazul Islam, Md. Mohsin Kabir, M. F. Mridha, Sultan Alfarhood, Mejdl Safran, Dunren Che",
    venue: "Sensors (MDPI), 23(11), 5204",
    cites: 242,
    url: "https://www.mdpi.com/1424-8220/23/11/5204",
    abstract: "MAX30100, AD8232 ECG and MLX90614 sensors stream vitals over MQTT to a CNN with attention that classifies five heartbeat categories and fever status, and connects users to the nearest doctor when critical abnormalities appear.",
    featured: true
  },
  {
    type: "journal", year: 2023,
    title: "Machine learning enabled IoT system for soil nutrients monitoring and crop recommendation",
    authors: "Md. Reazul Islam, Khondokar Oliullah, Md Mohsin Kabir, Munzirul Alom, M. F. Mridha",
    venue: "Journal of Agriculture and Food Research (Elsevier), 14, 100880",
    cites: 280,
    url: "https://www.sciencedirect.com/science/article/pii/S2666154323003873",
    abstract: "Field sensors for moisture, temperature, humidity and NPK feed ML models that recommend high-yield crops and fertilizer amounts, and record treatments so consumers can check produce quality in a mobile app.",
    featured: true
  },
  {
    type: "journal", year: 2025,
    title: "FruVeg_MultiNet: A hybrid deep learning-enabled IoT system for fresh fruit and vegetable identification with web interface and customized glasses for visually impaired individuals",
    authors: "Khondokar Oliullah, Md. Reazul Islam, Jahirul Islam Babar, M. A. Nur Quraishi, et al.",
    venue: "Journal of Agriculture and Food Research (Elsevier), 19, 101623",
    cites: 22,
    url: "https://www.sciencedirect.com/science/article/pii/S2666154324006604",
    abstract: "A hybrid EfficientNetB7 + ResNet50 model reaches 99.92% and 95.93% precision on two datasets, with a 1.2 s average response time, delivered through a web interface and assistive glasses."
  },
  {
    type: "journal", year: 2024,
    title: "A stacked ensemble machine learning approach for the prediction of diabetes",
    authors: "Khondokar Oliullah, Mahedi Hasan Rasel, Md Manzurul Islam, Md. Reazul Islam, Md Anwar Hussen Wadud, Md Whaiduzzaman, et al.",
    venue: "Journal of Diabetes & Metabolic Disorders (Springer), 23(1), 603–617",
    cites: 76,
    url: "https://link.springer.com/article/10.1007/s40200-023-01321-2"
  },
  {
    type: "journal", year: 2026,
    title: "Integrating single-cell and spatial multi-omics for precision oncology: from tumor ecosystems to clinical decision-making",
    authors: "S. R. Nirob, P. R. Das, Md Owafeeuzzaman Patwary, S. A. Ashfaque, Md. Reazul Islam, et al.",
    venue: "Frontiers in Oncology, 16, 1936192"
  },
  {
    type: "journal", year: 2026,
    title: "Graph neural networks for multi-scale gene-drug interaction modeling in cancer: applications, challenges, and therapeutic opportunities for breast cancer drug resistance",
    authors: "P. R. Das, M. J. Rahman, S. R. Nirob, Md Owafeeuzzaman Patwary, Md. Reazul Islam, M. S. Islam, et al.",
    venue: "Frontiers in Oncology, 16, 1929697"
  },
  {
    type: "journal", year: 2026,
    title: "An interpretable deep learning approach for breast cancer classification and tumor localization from histopathological images",
    authors: "Md. Owafeeuzzaman Patwary, Apurbo Biswas, Md. Reazul Islam, Md. Taufiqur Rahman, Syeda Asrafa Islam, Md. Abdullah-Al Jubair, Md Rakibul Islam, M. Firoz Mridha, et al.",
    venue: "Results in Engineering (Elsevier), 32, 112107",
    url: "https://www.sciencedirect.com/science/article/pii/S2590123026031282",
    abstract: "A ConvNeXt-Tiny and MobileNetV3 ensemble classifies breast histopathology with over 98% accuracy, Grad-CAM++ explains its decisions in pathology-relevant regions, and a weakly supervised U-Net localizes tumors without pixel-level labels."
  },
  {
    type: "journal", year: null,
    title: "The ethics of artificial intelligence technology in academic work: assessing the line between assistance and plagiarism",
    authors: "Md Owafeeuzzaman Patwary, Md. Reazul Islam, Nur-e Sarjina Khan Abtahi Islam, Md Abdullah-Al-Jubair, Md Jakir Hossen, M. F. Mridha, et al.",
    venue: "International Journal of Electrical and Computer Engineering (IJECE)"
  },
  {
    type: "journal", year: 2025,
    title: "IntelligentGuard: Smart doorbell with deep learning for secure user recognition and instant notifications",
    authors: "Md. Reazul Islam, Khondokar Oliullah, Rajarshi Roy Chowdhury, Shaikat Das Joy, MM Fazle Rabbi, et al.",
    venue: "International Journal of Electrical and Electronics Research (IJEER), 13(2), 353–363",
    url: "https://doi.org/10.37391/ijeer.130220"
  },
  {
    type: "dataset", year: 2026,
    title: "AI-driven Internet of Things (IoT) dataset for remote health monitoring and fall detection in elderly people",
    authors: "Md. Reazul Islam, Md Owafeeuzzaman Patwary, SM Ashiqul Islam",
    venue: "Data in Brief (Elsevier), 112641",
    cites: 4
  },
  {
    type: "conference", year: 2024,
    title: "MNIST handwritten digit recognition using a deep learning-based modified dual input convolutional neural network (DICNN) model",
    authors: "Ali Azgar, Md Imran Nazir, Afsana Akter, Md Saddam Hossain, Md Anwar Hussen Wadud, Md. Reazul Islam, et al.",
    venue: "9th International Congress on Information and Communication Technology (ICICT 2024), London, pp. 563–573",
    cites: 23
  },
  {
    type: "conference", year: 2024,
    title: "Brain tumor detection by image segmentation using customized UNet deep learning based model",
    authors: "TM Amir-Ul-Haque Bhuiyan, Md Anwar Hussen Wadud, Nazmunnahar Amie, Md Mahbub-Or-Rashid, TM Ahkam-Ul-Haque Bhuiyan, Jannatun Nyeem Jui, Anichur Rahman, Md. Reazul Islam, et al.",
    venue: "6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT 2024), IEEE",
    cites: 9
  },
  {
    type: "conference", year: 2023,
    title: "A portable diagnostic and medication system for rural areas using IoT",
    authors: "Md. Reazul Islam, Arman Hossain, Sayefa Arafah, MM Fazle Rabbi, Khondokar Oliullah, et al.",
    venue: "International Conference on Trends in Electronics and Health Informatics (TEHI 2023)"
  },
  {
    type: "chapter", year: 2025,
    title: "Design and implementation of a cost-effective automatic water pump control system for domestic applications using IoT",
    authors: "Md. Reazul Islam, Khondokar Oliullah, MD Mahbub-Or-Rashid, Jugal Krishna Das, et al.",
    venue: "Intelligent Networks and Systems: Advanced Technologies and Applications (CRC Press), p. 176",
    cites: 2,
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781032659770-14/design-implementation-cost-effective-automatic-water-pump-control-system-domestic-applications-using-iot-md-reazul-islam-khondokar-oliullah-mahbub-rashid-jugal-krishna-das"
  },
  {
    type: "chapter", year: 2026,
    title: "IoMT architecture for healthcare: integration, security, and real-time decision support",
    authors: "Md. Reazul Islam, Mirza Asif Mahmud, Kazi Tanvir, Shaikat Das Joy, Mahfujur Rahman, Noboranjan Dey, Dipta Gomes",
    venue: "Robotics and IoT Synergy in Next-Generation Healthcare (IGI Global), pp. 305–340",
    cites: 3
  },
  {
    type: "chapter", year: 2026,
    title: "Synthetic healthcare data in generation, validation, and integration for ethical and scalable health innovation",
    authors: "Shaikat Das Joy, Noboranjan Dey, Md. Reazul Islam, Mirza Asif Mahmud, Mahfujur Rahman, Kazi Tanvir, Dipta Gomes",
    venue: "Advances in Synthetic Healthcare Data: Opportunities, Challenges, and Applications (IGI Global)"
  },
  {
    type: "chapter", year: 2026,
    title: "Vision language models in healthcare through a multimodal approach to medical imaging and clinical applications",
    authors: "Kazi Tanvir, R. Biswas, Dipta Gomes, Mahfujur Rahman, Noboranjan Dey, Md. Reazul Islam",
    venue: "Vision Language Models for Next-Generation Healthcare (IGI Global), pp. 259–292"
  },
  {
    type: "chapter", year: 2026,
    title: "A comprehensive study on the ethical perspective of integration of agentic AI for autonomous vehicles",
    authors: "Mirza Asif Mahmud, Mahfujur Rahman, Dipta Gomes, Kazi Tanvir, Md. Reazul Islam",
    venue: "Agentic AI for Autonomous Vehicles: Safety, Reliability, Law, and Ethics (IGI Global)"
  },
  {
    type: "chapter", year: 2026,
    title: "Securing the future: enhancing cybersecurity and resilience in digital and software supply chains",
    authors: "Md Owafeeuzzaman Patwary, R. Jarin, Apurbo Biswas, M. M. T. Partho, Dipta Gomes, Md. Reazul Islam",
    venue: "AI-Driven Cybersecurity Systems, Applications, and Resilient Infrastructure (IGI Global)"
  }
];

/* Projects. cat must match one of PROJECT_CATS keys */
const PROJECT_CATS = {
  health: "Healthcare",
  safety: "Safety and security",
  agri: "Agriculture and food",
  smart: "Smart environments",
  software: "Software and apps"
};

const PROJECTS = [
  {
    cat: "health", year: 2023, funded: true,
    title: "Deep learning IoT system for remote health monitoring",
    summary: "Home vital-sign kit (SpO₂, heart rate, ECG, temperature) with a CNN-attention classifier that flags arrhythmias and fever and connects patients to a doctor.",
    stack: ["MAX30100", "AD8232 ECG", "MQTT", "TensorFlow"],
    images: [WP + "2024/02/1669797503034-800x600.jpg", WP + "2024/02/1669797503124-800x600.jpg"],
    links: [{ label: "Paper in Sensors", url: "https://www.mdpi.com/1424-8220/23/11/5204" }]
  },
  {
    cat: "safety", year: 2023, funded: true,
    title: "Smart dress for real-time harassment detection",
    summary: "Detachable wearable with nine force sensors and an AdaBoost model (99.3% accuracy) that sends live location to trusted contacts and the three nearest police stations.",
    stack: ["NodeMCU", "FSR array", "AdaBoost", "Android"],
    images: [WP + "2023/06/WhatsApp-Image-2023-06-05-at-1.07.38-PM-800x600.jpeg", WP + "2023/06/WhatsApp-Image-2023-06-09-at-8.26.12-PM-800x600.jpeg", WP + "2023/06/WhatsApp-Image-2023-06-10-at-1.44.23-PM-800x600.jpeg"],
    links: [
      { label: "Paper in MTAP", url: "https://link.springer.com/article/10.1007/s11042-024-20228-5" },
      { label: "TBS News feature", url: "https://www.tbsnews.net/features/panorama/quest-affordable-dress-detects-sexual-harassment-654910" }
    ]
  },
  {
    cat: "agri", year: 2023, funded: true,
    title: "AgriSense: soil nutrient monitoring and crop recommendation",
    summary: "NPK, moisture and climate sensing with ML recommendations for crops and fertilizer, plus a consumer-facing food quality report.",
    stack: ["JXBS-3001 NPK", "ESP8266", "Scikit-learn", "Flutter"],
    images: [WP + "2023/06/s-800x589.png", WP + "2023/06/s1-800x591.png"],
    links: [{ label: "Paper in JAFR", url: "https://www.sciencedirect.com/science/article/pii/S2666154323003873" }]
  },
  {
    cat: "health", year: 2023,
    title: "Smart chair for sitting posture monitoring",
    summary: "Pressure sensors in a chair classify posture and send mobile alerts after prolonged poor sitting.",
    stack: ["Pressure sensors", "Arduino", "ML", "Mobile app"],
    images: [WP + "2021/08/5.jpg", WP + "2021/08/4-736x600.jpg", WP + "2021/08/3-739x600.jpg"]
  },
  {
    cat: "health", year: 2023, funded: true,
    title: "Smart shoes for health monitoring and BMI-based diet",
    summary: "Insole sensing for steps, pressure mapping, heart rate and weight, with ML-generated food charts by BMI category.",
    stack: ["Load cells", "Heart rate sensor", "BLE", "ML"],
    images: [WP + "2023/06/ss1-800x517.png", WP + "2023/06/ss-800x591.png"]
  },
  {
    cat: "health", year: 2023,
    title: "Portable diagnostic and medication system for rural areas",
    summary: "IoT kit for blood pressure, heart rate, temperature and glucose with remote clinician access and ML medication suggestions.",
    stack: ["IoMT", "Cloud", "ML", "Mobile app"],
    images: [WP + "2023/05/diagnostic.png"]
  },
  {
    cat: "safety", year: 2023,
    title: "IntelligentGuard deep learning doorbell",
    summary: "Raspberry Pi doorbell that recognizes registered visitors by face, announces them by name, and sends photos of strangers to the owner’s phone.",
    stack: ["Raspberry Pi", "Face recognition", "OpenCV", "Android"],
    images: [WP + "2023/06/fd2.jpg", WP + "2023/06/unknown-person-800x600.png", WP + "2023/06/known-person-after-reg-800x600.png"]
  },
  {
    cat: "safety", year: 2023,
    title: "Eye-blink monitoring for driver drowsiness",
    summary: "Camera-based blink analysis that alerts drowsy drivers and can trigger gradual vehicle slowdown.",
    stack: ["Computer vision", "Raspberry Pi", "Alerts"],
    images: [WP + "2023/06/IMG_7065-800x600.jpg", WP + "2023/06/IMG_7062-800x600.jpg"]
  },
  {
    cat: "safety", year: 2023,
    title: "Automatic bicycle indicator and smart lock",
    summary: "Gyroscope-driven turn indicators that blink when the handlebar turns, with an IoT lock.",
    stack: ["NodeMCU", "Gyroscope", "Relays"],
    images: [WP + "2021/08/bike-800x600.png", WP + "2021/08/c1-800x600.png", WP + "2021/08/bike2-800x600.png"]
  },
  {
    cat: "safety", year: 2023,
    title: "Smart helmet for gas, temperature and GPS",
    summary: "Worker helmet that detects hazardous gases and heat and streams location with threshold alerts.",
    stack: ["Gas sensors", "GPS", "IoT cloud"],
    images: [WP + "2024/02/403606938_3767270603495178_570968892320539314_n-800x600.jpg", WP + "2024/02/403612293_1835105733577702_4120930307215341273_n-800x600.jpg"]
  },
  {
    cat: "safety", year: 2023,
    title: "Smart surveillance robot",
    summary: "Raspberry Pi robot with autonomous patrol, live video streaming and object recognition.",
    stack: ["Raspberry Pi", "Object detection", "Streaming"],
    images: [WP + "2024/02/403434110_621932173297126_2417418285765936726_n-800x600.jpg", WP + "2024/02/403411755_718390749896392_9189802518771146939_n-800x600.jpg"]
  },
  {
    cat: "smart", year: 2019, funded: true,
    title: "Automatic water pump controller",
    summary: "Low-cost controller with a reserve tank, overflow prevention and app control. Developed under the a2i innovation fund.",
    stack: ["Microcontroller", "Float switch", "Android"],
    images: [WP + "2021/08/IMG_20230518_121830-800x600.jpg", WP + "2021/08/IMG_20230518_122613-800x600.jpg", WP + "2021/08/IMG_20230518_122601-800x600.jpg"],
    links: [{ label: "Book chapter", url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781032659770-14/design-implementation-cost-effective-automatic-water-pump-control-system-domestic-applications-using-iot-md-reazul-islam-khondokar-oliullah-mahbub-rashid-jugal-krishna-das" }]
  },
  {
    cat: "smart", year: 2022,
    title: "Smart AC dimmer switch",
    summary: "Phone-controlled dimming for lights and fans from anywhere, with live device status.",
    stack: ["ESP8266", "TRIAC dimmer", "Android"],
    images: [WP + "2023/05/350163138_560869792917340_5994047203518434169_n-800x600.jpg", WP + "2023/05/ac1.png", WP + "2023/05/ac-dimmer.png"]
  },
  {
    cat: "smart", year: 2022,
    title: "IoT digital notice board",
    summary: "Campus display managed from a web dashboard and Android app for real-time announcements.",
    stack: ["Raspberry Pi", "Web dashboard", "Android"],
    images: [WP + "2023/05/WhatsApp-Image-2023-05-12-at-5.47.07-PM-4.jpeg"]
  },
  {
    cat: "smart", year: 2023,
    title: "Smart calling bell with caller identification",
    summary: "Users register from an app; the bell announces the caller’s name and room number.",
    stack: ["Raspberry Pi", "Android", "Database"],
    images: [WP + "2023/05/r4-800x600.png", WP + "2023/05/r3-800x600.png", WP + "2023/05/r1-800x600.png"]
  },
  {
    cat: "smart", year: 2022,
    title: "Smart locker system",
    summary: "Remote unlock, RFID and biometric access, and real-time activity notifications.",
    stack: ["RFID", "Biometrics", "Cloud"],
    images: [WP + "2024/02/310695955_812174819815673_300595280908771752_n-800x600.jpg"]
  },
  {
    cat: "software", year: 2022,
    title: "ICPC Asia Dhaka Regional schedule app",
    summary: "Volunteer-built app that helped contestants find rooms, dorms and schedules during the regional contest.",
    stack: ["Flutter", "Firebase"],
    images: [WP + "2021/08/310830917_5603360136422700_5570352638817648050_n-556x600.jpg", WP + "2021/08/308013366_1917912838548387_2646503047979016371_n-800x600.jpg"]
  },
  {
    cat: "software", year: 2016,
    title: "Learning management system",
    summary: "Web and Android LMS used by schools and colleges for courses, assessment and progress tracking.",
    stack: ["Laravel", "Flutter", "MySQL"],
    images: [WP + "2021/08/IMG_20230519_105025.jpg", WP + "2021/08/IMG_20230519_105110.jpg", WP + "2021/08/IMG_20230519_105221.jpg"]
  },
  {
    cat: "software", year: 2020,
    title: "Single-vendor e-commerce apps",
    summary: "Customer and admin apps with catalog, cart, payments and order management for several retail clients.",
    stack: ["Flutter", "REST API", "Payments"],
    images: [WP + "2021/08/app1-1.jpg", WP + "2021/08/a3.jpg", WP + "2021/08/a4.jpg"]
  }
];

/* Experience. group: academic | research | industry */
const EXPERIENCE = [
  { group: "academic", role: "Graduate Teaching Assistant", org: "University at Albany, SUNY", place: "Albany, NY", start: "Aug 2025", end: "Present",
    detail: "Supports undergraduate computer science courses through labs, grading and office hours while pursuing the PhD." },
  { group: "academic", role: "Assistant Professor, Computer Science", org: "American International University-Bangladesh", place: "Dhaka", start: "Jan 2024", end: "Aug 2025",
    detail: "Taught undergraduate CS courses, supervised theses, and advised the IEEE AIUB Student Branch." },
  { group: "academic", role: "Lecturer, Computer Science", org: "Bangladesh University of Business and Technology", place: "Dhaka", start: "Feb 2022", end: "Jan 2024",
    detail: "Taught and supervised IoT research; organized the IoT Research Projects Showcase 2022; advised the IEEE BUBT Student Branch. Received the Best Teacher Award." },
  { group: "academic", role: "Lecturer, Computer Science", org: "Daffodil International University", place: "Dhaka", start: "Jan 2017", end: "Apr 2018",
    detail: "Taught programming and web courses. Received the Best Supervisor Award at the DIU ICT Carnival 2018." },
  { group: "research", role: "Lead Researcher, IoT, AI and ML", org: "Advanced Machine Intelligence Research (AMIR) Lab", place: "Remote", start: "Jan 2023", end: "Jan 2026",
    detail: "Led a team producing peer-reviewed work in Sensors, MTAP and JAFR; mentored student researchers from idea to publication." },
  { group: "industry", role: "Team Lead, Android and Web", org: "GSPI Ltd.", place: "Dhaka", start: "May 2018", end: "Mar 2021",
    detail: "Led the mobile and web team delivering e-commerce and business apps for multiple clients." },
  { group: "industry", role: "Web Developer", org: "Techideasolutions", place: "Dhaka", start: "Jan 2014", end: "Feb 2017",
    detail: "Built web applications and learning platforms for schools and colleges." }
];

const EDUCATION = [
  { degree: "PhD in Computer Science", org: "University at Albany, SUNY", years: "2025 – present", note: "Research: non-contact neonatal vital-sign monitoring" },
  { degree: "MSc in Computer Science and Engineering", org: "Jahangirnagar University, Bangladesh", years: "2015" },
  { degree: "BSc in Computer Science and Engineering", org: "Jahangirnagar University, Bangladesh", years: "2011 – 2014" }
];

/* Talks, workshops and events */
const TALKS = [
  { year: 2026, kind: "Presentation", title: "AI–IoT edge–cloud framework for real-time air pollution monitoring and mapping", event: "UAlbany Showcase Day 2026", link: "https://www.albany.edu/node/124526" },
  { year: 2026, kind: "Presentation", title: "Closed-loop metabolic monitoring: an IoT-enabled adaptive framework for personalized dietary intervention", event: "UAlbany Showcase Day 2026" },
  { year: 2025, kind: "Presentation", title: "The ethics of AI in academic work: the line between assistance and plagiarism", event: "AI+ Symposium, University at Albany" },
  { year: 2023, kind: "Invited talk", title: "Moving innovation ideas to IoT prototypes and products in Bangladesh", event: "Smart Bangladesh Summit 2041", image: WP + "2024/02/377440187_6672765469482156_5390103093721204015_n-800x600.jpg" },
  { year: 2023, kind: "Exhibition", title: "Six research prototypes exhibited; five national awards", event: "Digital Bangladesh Mela 2023", image: WP + "2023/06/FB_IMG_1674965397099-800x600.jpg" },
  { year: 2023, kind: "Supervision", title: "a2i and BUBT collaboration for the Smart Bangladesh 2041 campaign", event: "Aspire to Innovate (a2i), Government of Bangladesh", image: WP + "2024/02/341614318_986647752697315_129909945705469856_n-800x600.jpg" },
  { year: 2022, kind: "Workshop", title: "Hands-on IoT workshop: 100+ students, 20 teams, 20 mini projects", event: "Bangladesh University of Business and Technology", image: WP + "2024/02/310597073_787206742561211_8945174700966130486_n-800x600.jpg" },
  { year: 2022, kind: "Organizer", title: "IoT Research Projects Showcase with 20+ supervised projects", event: "BUBT", image: WP + "2024/02/322719736_1002510417246717_7932477188357744008_n-800x600.jpg" },
  { year: 2022, kind: "Judge", title: "Tech expert and judge, district selection round", event: "Digital Bangladesh Innovation Award 2022", image: WP + "2024/02/302173244_5494219364003445_1682040648441092603_n-800x600.jpg" },
  { year: 2022, kind: "Project review", title: "Funded research project evaluation", event: "a2i, Government of Bangladesh", image: WP + "2024/02/314144686_5715954578496588_6686494715505079475_n-1-800x600.jpg" }
];

const AWARDS = [
  { year: 2023, title: "National Innovation Award", by: "Digital Bangladesh Mela 2023, Government of Bangladesh" },
  { year: 2022, title: "Huawei ICT Incubator Innovation Award", by: "Huawei" },
  { year: 2022, title: "Bangabandhu Innovation Grant, International Innovation Award", by: "Bangabandhu Innovation Grant" },
  { year: 2019, title: "National Innovation Award", by: "ICT Ministry of Bangladesh" },
  { year: 2018, title: "Best Supervisor Award", by: "Daffodil International University ICT Carnival" },
  { year: null, title: "Best Teacher Award", by: "Bangladesh University of Business and Technology" }
];

const SERVICE = {
  reviewer: [
    { journal: "IEEE Transactions on Multimedia", since: 2026 },
    { journal: "IEEE Transactions on Circuits and Systems for Video Technology", since: 2026 },
    { journal: "Engineering Applications of Artificial Intelligence", since: 2026 },
    { journal: "Scientific Reports (Springer Nature)", since: 2025 },
    { journal: "Discover Artificial Intelligence (Springer Nature)", since: 2025 },
    { journal: "Discover Computing (Springer Nature)", since: 2025 },
    { journal: "Cluster Computing (Springer Nature)", since: 2025 },
    { journal: "Industrial Crops and Products (Elsevier)", since: 2025 }
  ],
  leadership: [
    "Judge, Tri-County Science and Technology Fair 2026, New York",
    "Advisor, District Level Innovation Competition, ICT Ministry of Bangladesh",
    "Team lead, schedule app and publicity subcommittee, ICPC Asia Dhaka Regional Contest",
    "Faculty advisor, IEEE AIUB Student Branch",
    "Faculty advisor, IEEE BUBT Student Branch"
  ]
};

const MEDIA = [
  { outlet: "University at Albany News", date: "Apr 2026", title: "Showcase 2026: UAlbany student develops app to help you avoid pollution hot spots", url: "https://www.albany.edu/node/124526" },
  { outlet: "The Business Standard", date: "2023", title: "The quest for an ‘affordable’ dress that detects sexual harassment", url: "https://www.tbsnews.net/features/panorama/quest-affordable-dress-detects-sexual-harassment-654910" },
  { outlet: "Prothom Alo", date: "2023", title: "Coverage of the smart dress for women’s safety (Bangla)", url: "https://www.prothomalo.com/bangladesh/62i23tdgc0" },
  { outlet: "The Daily Campus", date: "2023", title: "Video feature on the women’s safety wearable", url: "https://www.facebook.com/thedailycampusbd/videos/676134407671849" },
  { outlet: "Springer Nature", date: "2024", title: "Machine learning-driven IoT device for women’s safety (paper)", url: "https://link.springer.com/article/10.1007/s11042-024-20228-5" },
  { outlet: "News24", date: "", title: "Implementing and supporting a virtual educational platform (LMS) during COVID-19 (video)", url: "https://www.youtube.com/watch?v=us8ApUEFYH4" },
  { outlet: "Ekattor TV", date: "", title: "Implementing and supporting a virtual educational platform (LMS) during COVID-19 (video)", url: "https://www.youtube.com/watch?v=EsUEtBfdukM" }
];

const SKILLS = [
  { group: "Machine learning", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib"] },
  { group: "Languages", items: ["Python", "C", "C++", "Java", "JavaScript", "PHP", "Dart"] },
  { group: "IoT and hardware", items: ["Arduino", "Raspberry Pi", "ESP8266 / NodeMCU", "MQTT", "ThingSpeak", "Ubidots", "Blynk"] },
  { group: "Apps and data", items: ["Flutter", "Laravel", ".NET", "MySQL", "MongoDB", "SQLite", "Firebase"] }
];

/* Gallery. cat: events | projects | teaching */
const GALLERY = [
  { src: WP + "2023/06/IMG-20230129-WA0006-800x600.jpg", cat: "events", caption: "Digital Bangladesh Mela 2023" },
  { src: WP + "2023/06/IMG20230128183313-800x600.jpg", cat: "events", caption: "Exhibiting research prototypes, Digital Bangladesh Mela 2023" },
  { src: WP + "2023/06/IMG-20230129-WA0075-800x600.jpg", cat: "events", caption: "Award ceremony, Digital Bangladesh Mela 2023" },
  { src: WP + "2024/02/376569406_625927366321747_2976905479495275688_n-505x600.jpg", cat: "events", caption: "Smart Bangladesh Summit 2041" },
  { src: WP + "2024/02/375990632_625927326321751_8505600380615509687_n-800x600.jpg", cat: "events", caption: "Speaking at Smart Bangladesh Summit 2041" },
  { src: WP + "2024/02/341543298_1652740108538912_4845496811550959350_n-800x600.jpg", cat: "events", caption: "a2i and BUBT Smart Bangladesh 2041 campaign" },
  { src: WP + "2024/02/314794591_5715957281829651_5145059636112823018_n-800x600.jpg", cat: "events", caption: "a2i project evaluation visit" },
  { src: WP + "2024/02/310606788_787207499227802_6912827185137028304_n-800x600.jpg", cat: "teaching", caption: "IoT workshop at BUBT" },
  { src: WP + "2024/02/310439499_787208179227734_5395955775629879734_n-800x600.jpg", cat: "teaching", caption: "Student teams building IoT mini projects" },
  { src: WP + "2024/02/322719736_1002510417246717_7932477188357744008_n-800x600.jpg", cat: "teaching", caption: "IoT Research Projects Showcase 2022" },
  { src: WP + "2021/08/certificaate-800x600.jpg", cat: "events", caption: "ICPC Asia Dhaka Regional recognition" },
  { src: WP + "2023/06/WhatsApp-Image-2023-06-09-at-8.26.14-PM-800x600.jpeg", cat: "projects", caption: "Smart dress prototype" },
  { src: WP + "2024/02/1669797503034-800x600.jpg", cat: "projects", caption: "Remote health monitoring kit" },
  { src: WP + "2021/08/IMG_20230518_122613-800x600.jpg", cat: "projects", caption: "Water pump controller installed" },
  { src: WP + "2023/06/fd1.jpg", cat: "projects", caption: "IntelligentGuard doorbell" },
  { src: WP + "2021/08/c2-800x600.png", cat: "projects", caption: "Bicycle indicator circuit" }
];
