export type Persona = {
  name: string;
  age: string;
  emoji: string;
  traits: { label: string; value: string }[];
};

export type ProjectSection = {
  title: string;
  items: string[];
  image?: string;
  images?: string[];
  childImages?: string[];
  personas?: Persona[];
  variant?: "research" | "concept" | "blueprint" | "journey" | "tech" | "personas" | "ai-mechanism" | "architecture" | "imagineer-journey";
};

export type Project = {
  name: string;
  slug: string;
  category: string;
  description: string;
  details: string;
  background: string;
  sections: ProjectSection[];
  tags: string[];
  image: string;
  deliverables: string[];
};

export type Skill = {
  icon: string;
  title: string;
  description: string;
};

export type ExperienceItem = {
  year: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Yooho",
    slug: "yooho",
    category: "体验设计",
    description: "浙江大学校医院用户体检与就医体验设计",
    details:
      "通过调研、环境改造与产品设计，为校医院带来全新的患者就医方式。聚焦普通医疗流程，解决学生与中老年居民在挂号、导航、候诊、缴费、取药等环节的痛点，设计以交互圆盘为核心的智能就医系统。",
    background:
      "浙江大学校医院为非营利性综合性医院，规模小（一栋两层带天井的楼），业务以门诊、开药、简单检查、体检为主，无住院服务。本次设计聚焦普通医疗流程，不考虑急诊。",
    sections: [
      {
        title: "前期调研",
        items: [
          "用户痛点：学生流程繁琐、排队多、票据多易丢、体验差；中老年居民智能机不熟、挂号缴费困难、叫号不清晰、容易错过",
          "问卷调研：发放 100 份，收集有效反馈，重点：科室清晰度、叫号满意度、环境满意度、候诊无聊程度",
          "用户行为研究 + 影子法：模拟从预约到就诊全流程，跟随用户深度体验",
          "工作坊 + 用户访谈：访谈 4 名学生、1 名医务工作者、1 名老师、2 位居民"
        ]
      },
      {
        title: "挂号系统设计",
        items: [
          "保留机器 + 人工双通道",
          "取消纸质票据，改为发放交互小圆盘",
          "圆盘承载个人身份与医疗信息，后续全流程用圆盘交互"
        ]
      },
      {
        title: "地图导航系统设计",
        items: [
          "导航集成于小圆盘",
          "智能判断目的地（诊室、缴费机、卫生间等）",
          "可与电子地图交互，查看位置、路线",
          "支持无障碍导航"
        ]
      },
      {
        title: "诊室外排队系统设计",
        items: [
          "用交互显示屏替代传统号码牌",
          "显示排队信息、医生状态、候诊人数",
          "用户通过圆盘交互：查看虚拟形象排队、切换表情，缓解无聊"
        ]
      },
      {
        title: "取药系统 & 候诊区优化",
        items: [
          "就诊后用圆盘在缴费机一键缴费",
          "医生智能配置药品信息至出口",
          "患者交还圆盘即可取药，无需纸质票据多次交互",
          "利用闲置天井打造休息区、办公学习区、便民服务区"
        ]
      }
    ],
    tags: ["SERVICE DESIGN", "UX DESIGN"],
    image:
      "https://images.unsplash.com/photo-1551281044-8f1f0d4b5f89?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "用户旅程图与服务蓝图",
      "交互圆盘硬件设计",
      "导航/排队/取药系统方案",
      "候诊区环境优化"
    ]
  },
  {
    name: "Imagineer",
    slug: "imagineer",
    category: "交互设计",
    description: "儿童协作 & AI 共创故事讲述应用设计",
    details:
      "Imagineer 是一款面向 6–10 岁儿童的 AI 协作故事创作应用，旨在解决移动互联网时代儿童\"爱讲故事却缺少听众与伙伴、创作易中断、作品易丢失\"的核心痛点。项目以生成式 AI 为技术底座，构建了\"AI 引导 — 人机共创 — 好友协作 — 成果沉淀\"四层创作工作流：AI 在表达卡顿环节提供情节建议与画面补充，降低创作门槛；好友协作模式支持角色分扮与共同推进，强化社交动机与叙事深度；云端故事库实现作品的长期留存与实体化沉淀（定制故事书）。同时为家长提供适度的参与窗口，弥补家庭场景中故事教育引导的缺失。",
    background:
      "浙江大学《信息与交互设计技术》课程设计实践。研究团队通过用户访谈与行为观察发现：6–10 岁儿童处于叙事能力发展的关键期，但普遍面临\"表达易卡顿—同伴缺位—成果难留存\"的断裂式创作体验。Imagineer 以\"AI 降低表达门槛 × 协作激发创作动机 × 沉淀构建成长档案\"为设计策略，探索生成式 AI 在儿童叙事教育中的产品化落地路径。",
    sections: [
      {
        title: "用户画像",
        variant: "personas",
        items: []
      },
      {
        title: "AI 辅助创作机制",
        variant: "ai-mechanism",
        items: []
      },
      {
        title: "功能架构",
        variant: "architecture",
        items: []
      },
      {
        title: "用户使用旅程",
        variant: "imagineer-journey",
        items: []
      },
      {
        title: "设计规范",
        items: [
          "字体：阿里巴巴普惠体（48px Bold 大标题 / 40px Bold 模块标题 / 32px Medium 按钮文字 / 28px Regular 正文 / 24px Regular 提示文字）",
          "主色：#C6E3A1、#566B1F；辅助色：#9FCCEF、#91C88F、#FDC76A",
          "LOGO：书本 + 眼睛元素，绿黄配色，多尺寸多配色版本"
        ]
      },
      {
        title: "品牌衍生",
        items: [
          "实体故事书、帆布袋、贴纸、文创礼盒等周边",
          "移动端适配：角色创建、语音输入、AI 画面生成、云端存储、多端同步"
        ]
      }
    ],
    tags: ["AI APPLICATION", "INTERACTION DESIGN", "CHILDREN UX"],
    image: "/imagineer_cover.png",
    deliverables: [
      "AI 辅助创作工作流设计",
      "儿童协作共创机制",
      "故事库与实体故事书定制",
      "品牌识别与衍生品设计"
    ]
  },
  {
    name: "财小喵",
    slug: "caixiaomiao",
    category: "产品设计",
    description: "儿童财商启蒙产品设计与软硬件结合方案",
    details:
      "面向{{移动支付时代}}，解决{{儿童财商教育缺失}}问题。打造{{软硬件结合}}的电子存钱罐产品——儿童端（电子存钱罐 + 理财小助手）与家长端（零花钱存储与监管），平衡{{教育性、趣味性与安全性}}。从用户调研到实体硬件设计再到配套 APP，构建完整的儿童财商启蒙体验。",
    background:
      "本项目为浙江大学 2024 年《信息产品设计》课程项目。在{{移动支付普及率高达 86%}}、现金使用率已降至 20% 的背景下，儿童对金钱的概念日益模糊——不懂劳动与报酬的关系、容易冲动消费、缺乏储蓄规划意识。与此同时，{{家长忙于工作}}，难以有效监管孩子的零花钱去向，而市场上已有的财商教育产品普遍{{偏重知识灌输、趣味性不足、家长监管机制薄弱}}。本项目从真实的用户需求出发，结合工业设计与交互设计，打造一款让孩子愿意用、家长放心用的财商启蒙产品。",
    sections: [
      {
        title: "前期调研",
        variant: "research",
        items: [
          "儿童调研：五年级开始有零花钱（5-10 元/天），多用于早餐、零食；部分存在偷偷消费行为",
          "家长调研：中产家庭、月收入 5000+、高学历；重视教育、但无暇监管零花钱去向",
          "竞品调研：现有财商产品偏重知识灌输、趣味性弱、家长监管不足、安全机制不完善"
        ]
      },
      {
        title: "用户画像",
        image: "/caixiaomiao_persona.png",
        items: [],
        personas: [
          {
            name: "苏小美",
            age: "11 岁",
            emoji: "👧",
            traits: [
              { label: "身份", value: "中产家庭独生女" },
              { label: "行为", value: "平时父母会给零花钱" },
              { label: "爱好", value: "自己喜欢买一些小卡之类的玩具" }
            ]
          },
          {
            name: "刘姐",
            age: "38 岁",
            emoji: "👩",
            traits: [
              { label: "态度", value: "重视孩子教育" },
              { label: "行为", value: "平时会给孩子零花钱" },
              { label: "痛点", value: "没空监管孩子的零花钱去向" }
            ]
          }
        ]
      },
      {
        title: "设计构思",
        variant: "concept",
        items: []
      },
      {
        title: "用户使用旅程",
        variant: "journey",
        items: []
      },
      {
        title: "服务蓝图",
        variant: "blueprint",
        items: []
      },
      {
        title: "硬件产品设计",
        image: "/caixiaomiao_product.png",
        images: ["/caixiaomiao_grid.png", "/caixiaomiao_product.png"],
        items: [
          "产品外观以卡通猫咪为原型，采用柔和的粉色与米白色搭配，圆润可爱的造型降低儿童对储蓄产品的距离感。正面配备显示屏用于交互反馈，顶部手机插槽实现与家长端 APP 的联动，指纹识别区保障资金安全。整体设计在满足功能需求的同时，兼顾儿童审美偏好与家庭场景融入，让存钱变得有趣而自然。"
        ]
      },
      {
        title: "APP 界面设计",
        images: ["/caixiaomiao_ui1.png"],
        childImages: [
          "/caixiaomiao_ui_child3.png",
          "/caixiaomiao_ui_child2.png",
          "/caixiaomiao_ui_child1.png",
          "/caixiaomiao_ui_child4.png"
        ],
        items: [
          "家长端：注册登录、孩子管理、零花钱发放与额度设置、消费记录查看与数据分析、任务发布与奖励配置、提现审批与安全监管",
          "儿童端：余额查询、扫码/指纹取钱、任务中心（查看任务进度与领取奖励）、账单明细、理财知识学习、攒钱目标设定与进度追踪"
        ]
      },
      {
        title: "技术路线",
        variant: "tech",
        items: []
      }
    ],
    tags: ["PRODUCT DESIGN", "HARDWARE + SOFTWARE", "CHILDREN UX"],
    image: "/caixiaomiao_cover.jpg",
    deliverables: [
      "硬件产品外观与结构设计",
      "家长端 & 儿童端 APP 设计",
      "RFID 绑定与指纹加密方案",
      "AI 消费数据分析"
    ]
  }
];

export const aboutParagraphs: string[] = [
  "从浙江大学工业设计，到同济大学产品服务体系设计，我的学习路径逐渐从\"产品本身\"延伸到\"系统与体验\"。在这一过程中，我开始更多关注复杂场景中的用户行为与决策逻辑，并尝试用设计建立清晰的结构。",
  "我关注人与技术之间不断变化的关系，并尝试通过设计让这种关系更加清晰、自然。在产品设计、服务系统与数据分析的交叉中，探索 AI 时代的体验方式。相信好的产品不仅解决问题，也应该被理解，被信任。"
];

export const skills: Skill[] = [
  {
    icon: "PM",
    title: "产品思维",
    description: "系统方案设计，竞品分析，市场定位规划，产品路线图规划"
  },
  {
    icon: "UX",
    title: "UX / Service Design",
    description: "服务蓝图绘制，用户旅程地图梳理，Figma 高保真原型制作"
  },
  {
    icon: "DA",
    title: "数据处理与分析",
    description: "Python 数据清洗与处理，Tableau 数据可视化，用户研究指标分析"
  },
  {
    icon: "AI",
    title: "AI 集成",
    description: "LLM prompt engineering、AI 辅助设计工作流搭建、智能体交互模式设计"
  }
];

export const experiences: ExperienceItem[] = [
  {
    year: "2026.2-2026.6",
    title: "Taala AI-产品经理（实习）",
    description:
      "设计并落地面向高中生的 AI 生涯规划产品，通过 Prompt 与多轮对话机制优化职业问答与路径生成体验，完成产品上线并服务 2000+ 用户。"
  },
  {
    year: "2025.8-2028.3",
    title: "同济大学设计创意学院-产品服务体系设计",
    description:
      "系统学习产品设计与用户研究方法，建立以用户需求为导向的设计基础，关注人机关系与产品体验。"
  },
  {
    year: "2021.8-2025.6",
    title: "浙江大学计算机科学与技术学院-工业设计",
    description:
      "从产品拓展至服务系统与复杂场景，强化结构化思考能力，关注 AI 背景下的产品体验与人机协同。"
  }
];
