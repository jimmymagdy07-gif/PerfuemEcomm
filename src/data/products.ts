export interface Product {
  id: number;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  category: 'oriental' | 'floral' | 'woody' | 'fresh' | 'exclusive';
  categoryLabel: string;
  categoryLabelAr: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  notesAr: { top: string[]; heart: string[]; base: string[] };
  volume: string;
  badge?: string;
  badgeAr?: string;
  color: string;
  accentColor: string;
  bottleGradient: string;
  isBestseller?: boolean;
  isNew?: boolean;
  isExclusive?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Oud Royale',
    nameAr: 'عود ملكي',
    tagline: 'The crown of Eastern opulence',
    taglineAr: 'تاج الفخامة الشرقية',
    description: 'A regal symphony of rare Cambodian oud, ancient resins, and amber. This masterpiece evokes the grandeur of Arabian nights — smoky, deep, intoxicating.',
    descriptionAr: 'سيمفونية ملكية من العود الكمبودي النادر، والراتنجات القديمة، والعنبر. تحفة فنية تستحضر روعة الليالي العربية — دخانية، عميقة، لا تُقاوم.',
    price: 485,
    category: 'oriental',
    categoryLabel: 'Oriental',
    categoryLabelAr: 'شرقي',
    notes: {
      top: ['Saffron', 'Rose Absolute'],
      heart: ['Cambodian Oud', 'Incense', 'Cistus'],
      base: ['Amber', 'Musk', 'Sandalwood', 'Benzoin']
    },
    notesAr: {
      top: ['الزعفران', 'وردة مطلقة'],
      heart: ['عود كمبودي', 'بخور', 'سيستوس'],
      base: ['عنبر', 'مسك', 'صندل', 'بنزوين']
    },
    volume: '100ml',
    badge: 'Bestseller',
    badgeAr: 'الأكثر مبيعاً',
    color: '#1a0a02',
    accentColor: '#C9A84C',
    bottleGradient: 'linear-gradient(135deg, #2a1505, #8B4513, #2a1505)',
    isBestseller: true,
    rating: 4.9,
    reviews: 847,
  },
  {
    id: 2,
    name: 'Rose de Minuit',
    nameAr: 'وردة منتصف الليل',
    tagline: 'A rose that blooms only in darkness',
    taglineAr: 'وردة لا تتفتح إلا في الظلام',
    description: 'An exquisite nocturnal rose, veiled in dark patchouli and black musk. Velvety petals of Bulgarian rose unfurl with midnight mystery.',
    descriptionAr: 'وردة ليلية بديعة، مُحجَّبة بالباتشولي الداكن والمسك الأسود. بتلات مخملية من الوردة البلغارية تتفتح بغموض منتصف الليل.',
    price: 395,
    category: 'floral',
    categoryLabel: 'Floral',
    categoryLabelAr: 'زهري',
    notes: {
      top: ['Black Pepper', 'Bergamot'],
      heart: ['Bulgarian Rose', 'Violet', 'Magnolia'],
      base: ['Patchouli', 'Black Musk', 'Vetiver']
    },
    notesAr: {
      top: ['فلفل أسود', 'برغموت'],
      heart: ['وردة بلغارية', 'بنفسج', 'مانيوليا'],
      base: ['باتشولي', 'مسك أسود', 'فيتيفر']
    },
    volume: '75ml',
    color: '#1a0008',
    accentColor: '#C4687A',
    bottleGradient: 'linear-gradient(135deg, #1a0008, #6b1928, #1a0008)',
    isNew: true,
    badge: 'New',
    badgeAr: 'جديد',
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 3,
    name: 'Amber Mystique',
    nameAr: 'عنبر الأسرار',
    tagline: 'Liquid gold from ancient resins',
    taglineAr: 'ذهب سائل من الراتنجات القديمة',
    description: 'Warm, enveloping, utterly mesmerizing. A labyrinth of golden amber, ancient resins, and precious woods that wraps you in timeless luxury.',
    descriptionAr: 'دافئ، مُحيط، ساحر تماماً. متاهة من العنبر الذهبي والراتنجات القديمة والأخشاب الثمينة التي تلفك برفاهية خارج الزمن.',
    price: 345,
    category: 'oriental',
    categoryLabel: 'Oriental',
    categoryLabelAr: 'شرقي',
    notes: {
      top: ['Cardamom', 'Neroli', 'Pink Pepper'],
      heart: ['Labdanum', 'Cistus', 'Myrrh'],
      base: ['Amber', 'Vanilla', 'Cedarwood', 'Tonka Bean']
    },
    notesAr: {
      top: ['هيل', 'نيرولي', 'فلفل وردي'],
      heart: ['لبدانم', 'سيستوس', 'مر'],
      base: ['عنبر', 'فانيليا', 'أرز', 'فول تونكا']
    },
    volume: '100ml',
    color: '#1a0f00',
    accentColor: '#E8A84C',
    bottleGradient: 'linear-gradient(135deg, #1a0f00, #8B6914, #1a0f00)',
    isBestseller: true,
    rating: 4.7,
    reviews: 624,
  },
  {
    id: 4,
    name: 'Santal Blanc',
    nameAr: 'الصندل الأبيض',
    tagline: 'Sacred wood, ethereal soul',
    taglineAr: 'خشب مقدس، روح أثيرية',
    description: 'Pure white sandalwood from Mysore, elevated with iris and white musks. Meditative, serene, and luminously elegant.',
    descriptionAr: 'خشب الصندل الأبيض النقي من ميسور، مُرفَّع بالإيريس والمسك الأبيض. تأملي، هادئ، وأنيق بشكل مضيء.',
    price: 325,
    category: 'woody',
    categoryLabel: 'Woody',
    categoryLabelAr: 'خشبي',
    notes: {
      top: ['White Tea', 'Aldehydes'],
      heart: ['Iris', 'Jasmine Sambac', 'Ylang-Ylang'],
      base: ['Mysore Sandalwood', 'White Musk', 'Cashmere Wood']
    },
    notesAr: {
      top: ['شاي أبيض', 'ألدهيدات'],
      heart: ['إيريس', 'الياسمين', 'إيلنغ إيلنغ'],
      base: ['صندل ميسور', 'مسك أبيض', 'خشب كشمير']
    },
    volume: '50ml',
    color: '#0a0a08',
    accentColor: '#E8D5A3',
    bottleGradient: 'linear-gradient(135deg, #1a1a10, #8B8050, #1a1a10)',
    rating: 4.8,
    reviews: 441,
  },
  {
    id: 5,
    name: 'Noir Absolu',
    nameAr: 'السواد المطلق',
    tagline: 'The perfume of power and seduction',
    taglineAr: 'عطر القوة والإغراء',
    description: 'Commanding, magnetic, unforgettable. Dark leather intertwined with smoky incense and velvety iris — the scent of absolute authority.',
    descriptionAr: 'مُسيطر، مغناطيسي، لا يُنسى. جلد داكن متشابك مع البخور الدخاني والإيريس المخملي — رائحة السلطة المطلقة.',
    price: 435,
    originalPrice: 520,
    category: 'woody',
    categoryLabel: 'Woody',
    categoryLabelAr: 'خشبي',
    notes: {
      top: ['Leather', 'Smoke'],
      heart: ['Iris', 'Dark Rose', 'Incense'],
      base: ['Oud', 'Vetiver', 'Labdanum', 'Castoreum']
    },
    notesAr: {
      top: ['جلد', 'دخان'],
      heart: ['إيريس', 'وردة داكنة', 'بخور'],
      base: ['عود', 'فيتيفر', 'لبدانم', 'كستوريوم']
    },
    volume: '100ml',
    badge: 'Sale',
    badgeAr: 'عرض',
    color: '#050505',
    accentColor: '#A0A0A0',
    bottleGradient: 'linear-gradient(135deg, #050505, #2a2a2a, #050505)',
    rating: 4.9,
    reviews: 789,
  },
  {
    id: 6,
    name: 'Fleur d\'Or',
    nameAr: 'زهرة الذهب',
    tagline: 'The golden hour captured in a bottle',
    taglineAr: 'لحظة الذهب محبوسة في زجاجة',
    description: 'A luminous solar floral — golden mimosa and sun-drenched ylang-ylang with a warm amber heart. Joy distilled into perfume.',
    descriptionAr: 'زهري شمسي مُضيء — ميموزا ذهبية وإيلنغ إيلنغ مُشبَّع بالشمس مع قلب عنبري دافئ. فرحة مقطرة في عطر.',
    price: 285,
    category: 'floral',
    categoryLabel: 'Floral',
    categoryLabelAr: 'زهري',
    notes: {
      top: ['Mimosa', 'Orange Blossom', 'Mandarin'],
      heart: ['Ylang-Ylang', 'Jasmine', 'Tuberose'],
      base: ['Amber', 'Musk', 'Sandalwood']
    },
    notesAr: {
      top: ['ميموزا', 'زهر البرتقال', 'ماندارين'],
      heart: ['إيلنغ إيلنغ', 'ياسمين', 'توبروز'],
      base: ['عنبر', 'مسك', 'صندل']
    },
    volume: '75ml',
    color: '#0a0800',
    accentColor: '#F0D080',
    bottleGradient: 'linear-gradient(135deg, #1a1400, #B8860B, #1a1400)',
    isNew: true,
    badge: 'New',
    badgeAr: 'جديد',
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 7,
    name: 'Jasmin d\'Arabie',
    nameAr: 'ياسمين الجزيرة',
    tagline: 'Jasmine gardens at dusk',
    taglineAr: 'حدائق الياسمين عند الغسق',
    description: 'Pure, intoxicating Arabian jasmine absolute, where petals are picked by hand at dusk. An ode to sensuality and eternal femininity.',
    descriptionAr: 'الياسمين العربي المطلق النقي والمُسكِر، حيث تُقطف البتلات باليد عند الغسق. قصيدة في الأنوثة الخالدة.',
    price: 365,
    category: 'floral',
    categoryLabel: 'Floral',
    categoryLabelAr: 'زهري',
    notes: {
      top: ['Bergamot', 'Lemon Zest'],
      heart: ['Jasmine Absolute', 'Tuberose', 'Orange Blossom'],
      base: ['Musk', 'Amber', 'Benzoin']
    },
    notesAr: {
      top: ['برغموت', 'قشر الليمون'],
      heart: ['ياسمين مطلق', 'توبروز', 'زهر البرتقال'],
      base: ['مسك', 'عنبر', 'بنزوين']
    },
    volume: '100ml',
    color: '#0a0a00',
    accentColor: '#D4E8A3',
    bottleGradient: 'linear-gradient(135deg, #0a1000, #4a6a14, #0a1000)',
    isBestseller: true,
    rating: 4.8,
    reviews: 536,
  },
  {
    id: 8,
    name: 'Velvet Iris',
    nameAr: 'إيريس المخمل',
    tagline: 'Powdery elegance of Florentine iris',
    taglineAr: 'أناقة الإيريس الفلورنسي المُبهر',
    description: 'The prized Iris Pallida from Florence, aged three years in the earth. Buttery, powdery, impossibly sophisticated — the true scent of luxury.',
    descriptionAr: 'الإيريس باليدا المُقدَّر من فلورنسا، مُعتَّق ثلاث سنوات في الأرض. زبداني، مُبهر، بالغ الرقي — الرائحة الحقيقية للرفاهية.',
    price: 520,
    category: 'exclusive',
    categoryLabel: 'Exclusive',
    categoryLabelAr: 'حصري',
    notes: {
      top: ['Violet', 'Bergamot', 'Aldehydes'],
      heart: ['Iris Pallida', 'Rose Absolute', 'Violet Leaf'],
      base: ['Orris Butter', 'Musk', 'Vetiver', 'Cedar']
    },
    notesAr: {
      top: ['بنفسج', 'برغموت', 'ألدهيدات'],
      heart: ['إيريس باليدا', 'وردة مطلقة', 'ورق البنفسج'],
      base: ['زبدة الأوريس', 'مسك', 'فيتيفر', 'أرز']
    },
    volume: '50ml',
    badge: 'Exclusive',
    badgeAr: 'حصري',
    color: '#08001a',
    accentColor: '#B8A0E8',
    bottleGradient: 'linear-gradient(135deg, #08001a, #4a2880, #08001a)',
    isExclusive: true,
    rating: 5.0,
    reviews: 94,
  },
];

export const collections = [
  {
    id: 'oriental',
    name: 'Les Orientaux',
    nameAr: 'المجموعة الشرقية',
    description: 'Rare ouds, sacred resins, and golden ambers from the ancient Silk Road',
    descriptionAr: 'عود نادر وراتنجات مقدسة وعنبر ذهبي من طريق الحرير القديم',
    image: 'oriental',
    accentColor: '#C9A84C',
  },
  {
    id: 'floral',
    name: 'La Fleur Noire',
    nameAr: 'الزهرة السوداء',
    description: 'Nocturnal florals — jasmine, rose, and tuberose in their darkest forms',
    descriptionAr: 'الزهور الليلية — ياسمين ووردة وتوبروز في أشكالها الأكثر غموضاً',
    image: 'floral',
    accentColor: '#C4687A',
  },
  {
    id: 'exclusive',
    name: 'La Collection Privée',
    nameAr: 'المجموعة الخاصة',
    description: 'Ultra-rare ingredients. Limited editions. Signed by our Master Perfumers',
    descriptionAr: 'مكونات نادرة للغاية. إصدارات محدودة. موقَّعة من عطارينا الأساتذة',
    image: 'exclusive',
    accentColor: '#B8A0E8',
  },
];
