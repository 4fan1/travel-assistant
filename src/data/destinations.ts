import type { Destination } from '../types/destination';

export const destinations: Destination[] = [
  {
    id: 'lijiang',
    name: '丽江',
    summary: '从成都出发 2.5 小时直飞，古城慢生活与玉龙雪山同框的高原小城。',
    tags: ['古城', '雪山', '慢生活'],
    bestSeasons: ['spring', 'autumn'],
    heatScore: 9.3,
    heroImage:
      'https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&w=800',
    supportedDepartures: ['chengdu'],
    ctripUrl: 'https://www.ctrip.com/',
    xiaohongshuKeyword: '丽江 攻略 玉龙雪山',
    transportOptions: [
      {
        type: 'plane',
        duration: '约 2.5 小时直飞，往返含候机约 5 小时',
        cost: '往返机票约 ¥800-1500（视淡旺季波动）',
        pros: ['耗时最短，适合周末短途', '航班较多，时间选择灵活'],
        cons: ['遇旺季价格偏高', '受天气影响较大']
      },
      {
        type: 'highspeed',
        duration: '暂无成都直达高铁，可先至昆明再转。',
        cost: '成都-昆明高铁约 ¥300-500，昆明-丽江动车约 ¥200-300',
        pros: ['沿途风景不错，适合不赶时间的旅程'],
        cons: ['整体耗时长，换乘略麻烦', '不适合作为首选短途方式']
      },
      {
        type: 'self_drive',
        duration: '单程约 12-14 小时，可在攀枝花等地中转过夜',
        cost: '油费+过路费合计约 ¥900-1200（往返）',
        pros: ['沿途可顺路探索攀枝花、盐源等地', '行程自由度最高'],
        cons: ['山路较多，驾驶强度大', '雨季需注意路况安全']
      },
      {
        type: 'bus',
        duration: '成都新南门汽车站出发，单程约 12-14 小时',
        cost: '单程约 ¥300-400',
        pros: ['夜班车节约住宿时间', '到达丽江客运站交通方便'],
        cons: ['时间较长，舒适度一般', '不适合对睡眠质量要求高的出行者']
      }
    ],
    tripPlans: [
      {
        type: 'short',
        daysLabel: '短途 2 天 · 古城慢游',
        highlights: [
          'D1：抵达丽江，入住古城附近客栈，下午逛四方街与小巷深处咖啡馆',
          'D2：黑龙潭公园+木府观景台俯瞰古城，全程节奏轻松'
        ]
      },
      {
        type: 'regular',
        daysLabel: '常规 4 天 · 古城+玉龙雪山',
        highlights: [
          'D1：抵达丽江古城，适应海拔，傍晚欣赏古城夜景',
          'D2：玉龙雪山+蓝月谷一日游，建议提前预约氧气罐',
          'D3：束河古镇或白沙古镇半日慢逛，下午回古城闲逛',
          'D4：自由活动，补充心仪的餐厅和咖啡馆'
        ]
      },
      {
        type: 'deep',
        daysLabel: '深度 7 天 · 环线小众村落',
        highlights: [
          '在 4 天常规行程基础上，增加泸沽湖 2-3 天行程',
          '可考虑包车前往周边小众村落，体验摩梭文化与湖畔日出'
        ]
      }
    ],
    food: {
      localSpecialties: [
        {
          name: '腊排骨火锅',
          avgPrice: '¥80-120/人',
          reason: '云南特色必吃之一，汤底香浓，适合多人分享',
          area: '古城内及周边主街较多门店'
        },
        {
          name: '鸡豆凉粉',
          avgPrice: '¥15-25/人',
          reason: '当地小吃代表，口感细腻，适合当作下午点心',
          area: '四方街周边小吃铺'
        },
        {
          name: '野生菌炖鸡',
          avgPrice: '¥100-150/人',
          reason: '雨季菌子资源丰富，汤鲜味浓',
          area: '古城外本地人常去的家常菜馆'
        }
      ],
      popularSnacks: [
        {
          name: '鲜花饼',
          avgPrice: '¥10-20/人',
          reason: '适合作为手信，店里现烤口感更佳',
          area: '古城主街及机场候机楼'
        },
        {
          name: '炒冰+鲜果酸奶',
          avgPrice: '¥20-30/人',
          reason: '高原日照强，来一份冰甜解暑',
          area: '古城中心区域'
        },
        {
          name: '烧烤小摊',
          avgPrice: '¥40-60/人',
          reason: '夜晚氛围感强，适合边逛边吃',
          area: '古城外本地夜市'
        }
      ],
      valueRestaurants: [
        {
          name: '古城家常菜馆 A',
          avgPrice: '¥60-90/人',
          reason: '份量足、口味偏川味，适合从成都来的口味',
          area: '古城南门附近'
        } as any,
        {
          name: '露台景观餐厅 B',
          avgPrice: '¥80-120/人',
          reason: '可以俯瞰古城屋顶，适合日落时段用餐',
          area: '木府附近高处'
        } as any,
        {
          name: '轻食咖啡馆 C',
          avgPrice: '¥50-80/人',
          reason: '适合安排半天办公或发呆，环境安静',
          area: '古城边缘小街'
        } as any
      ]
    },
    hotels: {
      budget: [
        {
          name: '古城口精品客栈',
          priceRange: '¥200-300/晚',
          location: '近南门停车场，拖行李较轻松',
          advantages: ['含简易早餐', '步行 5 分钟入古城']
        },
        {
          name: '青旅·多人间',
          priceRange: '¥80-150/晚',
          location: '古城外围居民区',
          advantages: ['价格友好', '方便结识同路旅伴']
        }
      ],
      midRange: [
        {
          name: '古城景观客栈',
          priceRange: '¥350-500/晚',
          location: '古城高处，视野开阔',
          advantages: ['阳台可看日出日落', '房间多为大床房']
        },
        {
          name: '玉龙雪山远景酒店',
          priceRange: '¥400-600/晚',
          location: '古城外围主干道',
          advantages: ['部分房型可远眺雪山', '停车方便']
        }
      ],
      highEnd: [
        {
          name: '国际品牌度假酒店 A',
          priceRange: '¥800-1500/晚',
          location: '古城外独立园区',
          advantages: ['配套设施完善', '适合亲子与度假']
        },
        {
          name: '轻奢庭院酒店 B',
          priceRange: '¥900-1600/晚',
          location: '靠近束河古镇',
          advantages: ['庭院景观优秀', '安静不吵闹']
        }
      ]
    }
  },
  {
    id: 'daocheng-yading',
    name: '稻城亚丁',
    summary: '从成都出发纵贯川西高原，雪山、草甸与海子并存的“蓝色星球最后的净土”。',
    tags: ['雪山', '徒步', '高原湖泊'],
    bestSeasons: ['autumn', 'summer'],
    heatScore: 9.6,
    heroImage:
      'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800',
    supportedDepartures: ['chengdu'],
    ctripUrl: 'https://www.ctrip.com/',
    xiaohongshuKeyword: '稻城亚丁 秋季 自驾 攻略',
    transportOptions: [
      {
        type: 'plane',
        duration: '成都双流/天府机场直飞稻城，飞行约 1 小时，落地后车程约 1.5 小时',
        cost: '往返机票约 ¥1500-2500（旺季价格波动大）',
        pros: ['极大缩短路途时间', '适合假期有限的出行者'],
        cons: ['高海拔落差大，需注意高反', '遇旺季机票紧张且价格高']
      },
      {
        type: 'self_drive',
        duration: '成都—雅安—康定—新都桥—理塘—稻城，全程约 2-3 天车程',
        cost: '油费+过路费往返约 ¥1500-2000',
        pros: ['沿途川西风光极佳，可灵活在新都桥、理塘等地停留拍照', '适合摄影/自驾爱好者'],
        cons: ['高原长途驾驶强度大', '雨雪天气和落石路段需格外小心']
      },
      {
        type: 'bus',
        duration: '成都新南门/茶店子车站出发，单程约 18-20 小时，多为夜班或两日行程',
        cost: '单程约 ¥350-450',
        pros: ['无需自驾，节省体力', '适合预算有限但时间宽裕的出行者'],
        cons: ['时间很长，舒适度有限', '盘山路较多，易晕车']
      }
    ],
    tripPlans: [
      {
        type: 'short',
        daysLabel: '短途 3 天 · 稻城亚丁核心景区',
        highlights: [
          'D1：成都直飞稻城，适应海拔，住稻城县城',
          'D2：乘车前往亚丁景区，游玩冲古寺、珍珠海',
          'D3：轻量徒步一条线路（如洛绒牛场），下午返程'
        ]
      },
      {
        type: 'regular',
        daysLabel: '常规 5 天 · 轻徒步+观景',
        highlights: [
          'D1：成都飞稻城或经康定/新都桥中转，沿途适应海拔',
          'D2：亚丁景区冲古寺+洛绒牛场一线，视体力选择骑马或徒步',
          'D3：选择五色海+牛奶海一日徒步（高海拔，节奏放慢）',
          'D4：返程途中在新都桥/理塘停留拍摄高原风光',
          'D5：返回成都'
        ]
      },
      {
        type: 'deep',
        daysLabel: '深度 7 天 · 川西小环线',
        highlights: [
          '在 5 天基础上增加理塘、雅江周边小众村落和观景台',
          '可安排 1 天完全机动，用于补拍日出或好天气的雪山湖泊'
        ]
      }
    ],
    food: {
      localSpecialties: [
        {
          name: '牛肉汤锅',
          avgPrice: '¥80-120/人',
          reason: '高原气候偏冷，一锅热汤驱寒又补充能量',
          area: '稻城县城主街'
        },
        {
          name: '青稞面+酥油茶',
          avgPrice: '¥30-50/人',
          reason: '藏区日常主食体验，适合作为早餐或下午茶',
          area: '县城及沿途小镇'
        },
        {
          name: '藏式烧烤',
          avgPrice: '¥60-90/人',
          reason: '牦牛肉串搭配啤酒，是高原夜晚的标配',
          area: '稻城县城夜市区'
        }
      ],
      popularSnacks: [
        {
          name: '酸奶+蜂蜜',
          avgPrice: '¥15-25/人',
          reason: '高原牛奶酸度高，搭配蜂蜜口感更柔和',
          area: '县城小吃铺'
        },
        {
          name: '酥饼类点心',
          avgPrice: '¥10-20/人',
          reason: '便于随身携带的路餐',
          area: '客运站附近'
        },
        {
          name: '牦牛肉干',
          avgPrice: '¥30-60/人',
          reason: '适合作为特产带回家',
          area: '特产店和超市'
        }
      ],
      valueRestaurants: [
        {
          name: '稻城家常小馆',
          avgPrice: '¥50-80/人',
          reason: '川味偏重，适合成都人口味',
          area: '稻城县城中心'
        } as any,
        {
          name: '亚丁景区入口餐厅',
          avgPrice: '¥70-100/人',
          reason: '景区门口就餐方便，适合一日游中午补给',
          area: '景区游客中心附近'
        } as any
      ]
    },
    hotels: {
      budget: [
        {
          name: '稻城县标间酒店',
          priceRange: '¥200-300/晚',
          location: '县城主干道',
          advantages: ['供应暖气', '离餐馆超市近']
        },
        {
          name: '沿线小镇客栈',
          priceRange: '¥150-250/晚',
          location: '新都桥/理塘等中转地',
          advantages: ['适合作为分段休息点', '可观星空']
        }
      ],
      midRange: [
        {
          name: '稻城精品观景酒店',
          priceRange: '¥350-500/晚',
          location: '县城边缘高处',
          advantages: ['部分房型可远眺雪山', '配备氧气供应']
        },
        {
          name: '亚丁村藏式客栈',
          priceRange: '¥400-600/晚',
          location: '接近景区深处',
          advantages: ['早起看日出方便', '体验当地人生活氛围']
        }
      ],
      highEnd: [
        {
          name: '高原度假酒店 A',
          priceRange: '¥800-1500/晚',
          location: '稻城县城周边',
          advantages: ['设施完善，适合带父母和小孩', '服务标准化程度高']
        }
      ]
    }
  },
  {
    id: 'chongqing',
    name: '重庆',
    summary: '从成都出发高铁约 1.5 小时，夜景、火锅与魔幻山城立体交通的周末之选。',
    tags: ['美食', '夜景', '山城'],
    bestSeasons: ['spring', 'autumn', 'winter'],
    heatScore: 9.1,
    heroImage:
      'https://images.pexels.com/photos/1732282/pexels-photo-1732282.jpeg?auto=compress&cs=tinysrgb&w=800',
    supportedDepartures: ['chengdu'],
    ctripUrl: 'https://www.ctrip.com/',
    xiaohongshuKeyword: '重庆 周末 重庆火锅 洪崖洞',
    transportOptions: [
      {
        type: 'highspeed',
        duration: '成都东/成都西—重庆北/重庆西，高铁约 1.5-2 小时',
        cost: '单程二等座约 ¥150-200',
        pros: ['班次密集，时间选择多', '舒适度高，是最推荐方式'],
        cons: ['节假日车票需提前抢购']
      },
      {
        type: 'self_drive',
        duration: '经成渝高速单程约 4-5 小时，路况良好',
        cost: '油费+过路费往返约 ¥500-700',
        pros: ['方便顺路游乐山、大足石刻等周边', '时间更灵活'],
        cons: ['节假日高速易堵车', '市区立交复杂，新手易迷路']
      },
      {
        type: 'bus',
        duration: '成都各大车站均有班车，单程约 4-5 小时',
        cost: '单程约 ¥150-200',
        pros: ['到达地点多样，适合就近上下车'],
        cons: ['舒适度一般，且与高铁相比优势不明显']
      }
    ],
    tripPlans: [
      {
        type: 'short',
        daysLabel: '短途 2 天 · 夜景+火锅',
        highlights: [
          'D1：上午高铁抵达重庆，解放碑/八一路步行街随便逛，晚上洪崖洞+长江索道夜景',
          'D2：磁器口古镇+李子坝轻轨打卡，中午/晚上安排正宗重庆火锅'
        ]
      },
      {
        type: 'regular',
        daysLabel: '常规 3-4 天 · 山城立体体验',
        highlights: [
          'D1：到达后游览解放碑、来福士广场江边夜景',
          'D2：南山一棵树观景台+长江索道+洪崖洞夜景，火锅安排在这天',
          'D3：磁器口古镇+川美涂鸦街，体验文艺一面',
          'D4：可选择温泉/商场休闲购物后返程'
        ]
      }
    ],
    food: {
      localSpecialties: [
        {
          name: '重庆火锅',
          avgPrice: '¥80-150/人',
          reason: '必须打卡的城市味道，可选微辣/中辣避免不适',
          area: '江北观音桥/南岸区热门商圈'
        },
        {
          name: '酸辣粉',
          avgPrice: '¥15-25/人',
          reason: '街边小吃代表，适合作为下午加餐',
          area: '各大商圈小吃街'
        },
        {
          name: '江湖菜',
          avgPrice: '¥60-90/人',
          reason: '味重下饭，适合三五好友小聚',
          area: '解放碑周边老字号馆子'
        }
      ],
      popularSnacks: [
        {
          name: '小面',
          avgPrice: '¥10-20/人',
          reason: '早餐标配，干拌/汤面都值得尝试',
          area: '居民区附近面馆'
        },
        {
          name: '串串香',
          avgPrice: '¥40-80/人',
          reason: '自己动手夹签，选择丰富',
          area: '观音桥/杨家坪等夜市'
        },
        {
          name: '糯米团/凉虾',
          avgPrice: '¥10-20/人',
          reason: '适合在夏天解暑的小甜品',
          area: '磁器口古镇小吃摊'
        }
      ],
      valueRestaurants: [
        {
          name: '本地人火锅店',
          avgPrice: '¥90-130/人',
          reason: '环境朴素但味道正宗，排队较多',
          area: '非景区居民区内'
        } as any,
        {
          name: '江景火锅店',
          avgPrice: '¥120-180/人',
          reason: '可边吃边看两江夜景',
          area: '南滨路沿线'
        } as any
      ]
    },
    hotels: {
      budget: [
        {
          name: '解放碑经济型酒店',
          priceRange: '¥200-300/晚',
          location: '解放碑步行可达主要景点',
          advantages: ['出门就是商圈', '吃喝玩乐选择多']
        },
        {
          name: '轨道站旁快捷酒店',
          priceRange: '¥180-260/晚',
          location: '靠近轻轨站',
          advantages: ['出行方便', '适合以公共交通为主的行程']
        }
      ],
      midRange: [
        {
          name: '江景酒店',
          priceRange: '¥400-600/晚',
          location: '临江地段',
          advantages: ['部分房型可看夜景', '适合情侣/家庭']
        },
        {
          name: '商圈中端连锁',
          priceRange: '¥350-500/晚',
          location: '观音桥/沙坪坝等核心商圈',
          advantages: ['配套成熟', '购物方便']
        }
      ],
      highEnd: [
        {
          name: '高端江景酒店 A',
          priceRange: '¥800-1500/晚',
          location: '两江交汇区域',
          advantages: ['视野极佳', '适合作为纪念日或重要节日住宿']
        }
      ]
    }
  },
  {
    id: 'jiuzhaigou',
    name: '九寨沟',
    summary: '从成都出发北上进入阿坝州，五彩海子与雪山森林构成童话世界。',
    tags: ['彩色湖泊', '国家公园', '摄影'],
    bestSeasons: ['autumn', 'summer'],
    heatScore: 9.5,
    heroImage:
      'https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=800',
    supportedDepartures: ['chengdu'],
    ctripUrl: 'https://www.ctrip.com/',
    xiaohongshuKeyword: '九寨沟 最佳季节 摄影 攻略',
    transportOptions: [
      {
        type: 'plane',
        duration: '成都飞九黄机场约 40 分钟，落地后车程约 1.5-2 小时到九寨沟口',
        cost: '往返机票约 ¥800-1600',
        pros: ['节省大量山路时间', '适合带老人小孩的家庭'],
        cons: ['遇恶劣天气可能延误', '机票需提前预订']
      },
      {
        type: 'self_drive',
        duration: '成都—都江堰—汶川—松潘—九寨沟，全程约 8-10 小时',
        cost: '油费+过路费往返约 ¥800-1100',
        pros: ['沿途可顺游都江堰/黄龙/松潘古城', '景观多样'],
        cons: ['山路弯多，车程较长', '雨季需注意泥石流风险']
      },
      {
        type: 'bus',
        duration: '成都茶店子车站发车，单程约 8-10 小时',
        cost: '单程约 ¥200-260',
        pros: ['直达九寨沟沟口附近', '适合不想自驾的旅客'],
        cons: ['耗时较长', '旺季车票紧张']
      }
    ],
    tripPlans: [
      {
        type: 'short',
        daysLabel: '短途 2 天 · 核心九寨沟',
        highlights: [
          'D1：成都出发抵达九寨沟沟口，入住酒店休整',
          'D2：全天游览九寨沟景区，乘观光车+步行结合体验经典线路'
        ]
      },
      {
        type: 'regular',
        daysLabel: '常规 3-4 天 · 九寨+黄龙',
        highlights: [
          'D1：成都前往九寨沟，沿途在松潘短暂停留',
          'D2：九寨沟景区一日深度游，选择一两段步行游线',
          'D3：前往黄龙景区，欣赏钙华彩池和高山草甸景观',
          'D4：返程回成都'
        ]
      }
    ],
    food: {
      localSpecialties: [
        {
          name: '藏式炖羊肉',
          avgPrice: '¥80-120/人',
          reason: '高原天气偏冷，一锅热腾腾羊肉非常适合暖身',
          area: '沟口附近餐馆'
        },
        {
          name: '青稞酒',
          avgPrice: '¥20-40/人',
          reason: '体验当地少量品尝即可，切勿贪杯',
          area: '沿途特色餐厅'
        }
      ],
      popularSnacks: [
        {
          name: '牦牛酸奶',
          avgPrice: '¥15-25/人',
          reason: '口感浓郁，适合饭后甜品',
          area: '沟口及沿途小店'
        },
        {
          name: '烤土豆/烤玉米',
          avgPrice: '¥10-15/人',
          reason: '景区外常见小吃，简单又解馋',
          area: '停车场周边小摊'
        }
      ],
      valueRestaurants: [
        {
          name: '沟口中餐馆',
          avgPrice: '¥60-90/人',
          reason: '菜品以川菜为主，适合大众口味',
          area: '九寨沟口商业区'
        } as any,
        {
          name: '沿线农家乐',
          avgPrice: '¥50-80/人',
          reason: '食材新鲜，份量足',
          area: '松潘/川主寺附近'
        } as any
      ]
    },
    hotels: {
      budget: [
        {
          name: '沟口经济型酒店',
          priceRange: '¥220-320/晚',
          location: '九寨沟口步行/短途车程范围内',
          advantages: ['早起进沟方便', '附近餐饮选择多']
        },
        {
          name: '沿途县城宾馆',
          priceRange: '¥180-260/晚',
          location: '松潘/川主寺等地',
          advantages: ['适合作为中途落脚点', '价格相对沟口更友好']
        }
      ],
      midRange: [
        {
          name: '九寨沟景区附近度假酒店',
          priceRange: '¥400-650/晚',
          location: '沟口周边',
          advantages: ['房间舒适度高', '部分房型带景观阳台']
        }
      ],
      highEnd: [
        {
          name: '高端温泉度假酒店',
          priceRange: '¥900-1600/晚',
          location: '距沟口车程 20-30 分钟',
          advantages: ['配备温泉与完善康体设施', '适合轻松休闲型行程']
        }
      ]
    }
  }
];

