import type { Dict } from "./types";

export const zh: Dict = {
  htmlLang: "zh-CN",
  meta: {
    home: {
      title: "接龙 Jielong — 新西兰商家的批量团购接龙平台",
      description:
        "新西兰社群，就用新接龙。发布接龙，从微信群收集订单，统一备货，再配送或在自提点发放——专为新西兰商家打造。",
    },
    pricing: {
      title: "价格 — 接龙 Jielong",
      description: "Jielong 批量接龙的透明定价。免费开始，随团购规模增长再升级。",
    },
  },
  logo: { edition: "新西兰版" },
  nav: {
    links: [
      { href: "/#how-it-works", label: "运作方式" },
      { href: "/#features", label: "功能" },
      { href: "/pricing", label: "价格" },
      { href: "/#faq", label: "常见问题" },
    ],
    merchantLogin: "商户登录",
    startFree: "免费开始",
    openMenu: "打开菜单",
    menuTitle: "Jielong — 新西兰版",
    switchLabel: "EN",
    switchAria: "Switch to English",
  },
  hero: {
    badge: "专为新西兰社群团购打造",
    titleLine1: "发起接龙，轻松收单。",
    titleLine2: "到点截单，统一备货。",
    body: "Jielong（接龙）让新西兰商家的社群团购更简单。发布限时接龙，顾客在线下单并完成付款；截单后统一备货、统一交付，从发布到交付，一条接龙轻松搞定。",
    startFree: "免费开始",
    viewPricing: "查看价格",
    note: "免费开始 · 无需绑定银行卡 · 银行转账或 Online EFTPOS",
    alt: "手机上的 Jielong 主页——进行中的接龙、截止时间和往期接龙",
  },
  howItWorks: {
    title: "一场接龙是怎么运作的",
    subtitle: "从发布接龙到交付最后一单，只需四步。",
    stepLabel: "第 {n} 步",
    steps: [
      {
        title: "发布接龙",
        description:
          "在一个页面完成所有设置：接龙介绍与图片、商品、优惠活动、自提点和派送区域，再设定截单时间。",
        icon: "CalendarClock",
      },
      {
        title: "收集订单",
        description:
          "分享一个链接或二维码。买家在接龙期内选择自提或配送，并通过银行转账或 Online EFTPOS 付款——需求数量一目了然。",
        icon: "Users",
      },
      {
        title: "统一备货",
        description:
          "截止后，所有订单自动汇总成一张备货单：每款商品的总数量，厨房直接照单备货。",
        icon: "ClipboardList",
      },
      {
        title: "自提或配送",
        description:
          "设置多个自提点和派送区域，各有自己的时间段。买家清楚知道在哪里、什么时候取货，订单到达时还会收到短信通知。",
        icon: "Truck",
      },
    ],
  },
  showcase: {
    title: "看看实际效果",
    body: "真实的买家页面——真实的接龙、真实的商品，正在 Jielong 上运行。",
    altCampaign: "买家看到的接龙页面，包含标题、截止时间和商品",
    altProducts: "商品列表，包含图片、价格、优惠和数量加减按钮",
  },
  share: {
    title: "分享链接和二维码，直达微信群",
    body: "大多数接龙本来就发生在微信群里。Jielong 正是围绕这一点设计的，而不是和它对着干。",
    points: [
      "发布接龙后，Jielong 自动生成链接和二维码。",
      "直接发到你的微信群——无需另外管理别的 App 或渠道。",
      "买家点击链接或扫描二维码，直接进入下单页面。",
      "直接在微信内置浏览器中打开——无需安装，无需切换 App。",
      "买家用当前微信号登录即可直接下单——无需注册。",
    ],
    badgeQr: "自动生成二维码",
    badgeNoInstall: "无需安装 App",
    alt: "Jielong 的分享页面——自动生成的二维码和可直接发到微信的分享文案",
  },
  features: {
    title: "批量接龙所需的一切",
    body: "从接龙编辑器到备货单，围绕团购的真实运作方式而设计。",
    items: [
      {
        title: "接龙编辑器",
        description:
          "富文本编辑，支持插入图片、保存草稿，发布前可预览买家看到的真实页面。",
        icon: "FileEdit",
      },
      {
        title: "商品库",
        description:
          "可重复使用的商品库，包含价格、库存和分类；也可以直接在接龙页面添加一次性商品。",
        icon: "Package",
      },
      {
        title: "自提点与派送区域",
        description:
          "多个自提点，支持地图预览和每日时间段；派送区域可设置起送金额和不满起送的运费。还能按自提点打印订单清单，方便帮手核对。",
        icon: "MapPin",
      },
      {
        title: "备货汇总",
        description:
          "订单自动按商品汇总数量，该做多少、备多少一目了然，无需手动统计。",
        icon: "ClipboardList",
      },
      {
        title: "银行转账与 Online EFTPOS",
        description:
          "买家可通过银行转账并上传截图作为凭证，或（Pro 套餐）在自己的银行 App 中授权 Online EFTPOS 付款，订单自动确认。两种方式都没有刷卡手续费。",
        icon: "Landmark",
      },
      {
        title: "为分享而生",
        description:
          "每个接龙都有链接和二维码，附带可编辑的微信分享文案和自定义分享卡片。买家在微信内点开即可下单，无需安装 App。",
        icon: "Share2",
      },
      {
        title: "组合商品与优惠",
        description:
          "销售礼盒，支持每盒自选口味或盲盒；多档优惠可叠加；主推商品可置顶；还能发起需要买家上传截图的小红书促销。",
        icon: "Gift",
      },
      {
        title: "商户后台",
        description:
          "入账走势图、各自提点统计、热门商品、订单筛选与 CSV 导出，另有展示近期接龙的商户公开主页。",
        icon: "LineChart",
      },
      {
        title: "买家下单体验",
        description:
          "实时倒计时、剩余库存、购物车预览、带编号的接龙记录营造信任感，以及带常购商品的「我的接龙」页面。",
        icon: "ShoppingBasket",
      },
    ],
  },
  comparison: {
    heading: "批量接龙，而不只是预订",
    body: "普通的预订和自提工具是来一单收一单，需要你随时现做。Jielong 采用另一种模式：所有人都在一个限时窗口内下单，截止后你才掌握完整数量——一次备货，服务所有人，而不是一单一单地处理。",
    colGeneric: "普通预订工具",
    colJielong: "Jielong",
    rows: [
      {
        label: "下单方式",
        generic: "随时下单，来一单做一单",
        jielong: "限时窗口，统一批量交付",
      },
      {
        label: "备货计划",
        generic: "需要自己统计数量",
        jielong: "自动生成按商品的备货汇总",
      },
      {
        label: "取货地点",
        generic: "通常只有一个门店",
        jielong: "多个自提点和派送区域，各有自己的时间段",
      },
      {
        label: "付款方式",
        generic: "刷卡支付，手续费约 2–3%",
        jielong: "银行转账或 Online EFTPOS（Pro）——无刷卡手续费",
      },
    ],
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "接龙没有达到我的最低数量怎么办？",
        answer:
          "一切由你掌控——不会自动开工。截止后查看订单汇总，你可以选择照常履约、延长接龙时间，或取消并为受影响的订单退款。",
      },
      {
        question: "付款是怎么进行的？",
        answer:
          "默认情况下，买家通过银行转账付款到你的账户——付款页面会显示你的账户信息并带有一键复制按钮——并上传截图作为凭证，由你在订单列表中确认。Pro 套餐还支持 Online EFTPOS：买家在自己的银行 App 中授权付款，订单自动标记为已付。无论哪种方式，我们都不会保存银行卡信息，也没有刷卡手续费。",
      },
      {
        question: "可以同时进行多个接龙吗？",
        answer:
          "可以。每个接龙都有自己的时间窗口、商品和自提点，所以你可以并行开多个——比如每周固定的主打商品，加上一次性的节日特供。",
      },
      {
        question: "买家错过截止时间怎么办？",
        answer:
          "截止时间过后 2 天内，你可以重新开启已结束的接龙接受补单，也可以随时提前结束进行中的接龙。买家重新打开链接时，会收到未付款订单的提醒。",
      },
      {
        question: "买家可以在同一个接龙下多次下单吗？",
        answer:
          "可以——买家可以在同一个接龙下下多个订单，你的备货汇总会按商品把所有订单合并统计。",
      },
      {
        question: "我需要自己的网站或 App 吗？",
        answer:
          "不需要。你只需发布接龙并分享一个链接——它可以直接在浏览器中打开，包括微信和 WhatsApp 的内置浏览器，买家无需安装任何 App。",
      },
      {
        question: "以后可以更换套餐吗？",
        answer:
          "可以，随时可在商户后台升级或降级。变更从下一个计费周期起生效。",
      },
      {
        question: "有合约或绑定期吗？",
        answer:
          "任何套餐都没有绑定期。Starter 永久免费；Growth 和 Pro 按月或按年计费，可随时取消。",
      },
    ],
  },
  cta: {
    title: "免费发布你的第一场接龙",
    body: "几分钟即可发布接龙，无需绑定银行卡。",
    startFree: "免费开始",
    viewPricing: "查看价格",
  },
  pricing: {
    title: "选择适合你的套餐",
    body: "所有套餐都包含银行转账收款、接龙编辑器和备货汇总。接龙越开越多时再升级即可。",
    monthly: "月付",
    yearly: "年付",
    save: "省 20%",
    toggleAria: "切换年付价格",
    mostPopular: "最受欢迎",
    perMonth: " / 月",
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "适合刚起步的前几场接龙",
        monthlyPrice: 0,
        yearlyPrice: 0,
        cta: "免费开始",
        features: [
          "每月最多 3 场接龙",
          "每场接龙最多 10 个订单",
          "1 个自提点",
          "商品库与富文本编辑器",
          "银行转账收款，支持上传付款截图",
          "邮件支持",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        tagline: "适合每周开团的商家",
        monthlyPrice: 79,
        yearlyPrice: 63,
        highlighted: true,
        cta: "选择 Growth",
        features: [
          "不限接龙数量和订单数量",
          "不限自提点和时间段",
          "派送区域与起送金额规则",
          "草稿、预览与复制接龙",
          "订单与备货汇总导出",
          "自提与配送到达短信通知",
          "优先邮件与在线客服支持",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        tagline: "适合多员工、多站点运营",
        monthlyPrice: 149,
        yearlyPrice: 119,
        cta: "选择 Pro",
        features: [
          "包含 Growth 的全部功能",
          "Online EFTPOS 收款，自动确认",
          "多个员工账号与角色",
          "自定义品牌下单链接",
          "高级销售与备货报表",
          "专属上线指导",
          "电话支持",
        ],
      },
    ],
    contact: {
      message: "我想了解 Jielong {plan} 套餐（{detail}）。",
      free: "免费",
      paid: "NZ${price}/月，{billing}",
      billedMonthly: "按月计费",
      billedYearly: "按年计费",
    },
    addOns: {
      title: "附加服务",
      body: "任何套餐都可选购的一次性或可选附加服务。",
      items: [
        {
          name: "自定义域名",
          price: "$249 一次性",
          description:
            "把你自己的域名（如 order.yourbrand.co.nz）指向你的 Jielong 接龙。",
        },
        {
          name: "品牌分享卡片",
          price: "$149 一次性",
          description:
            "在买家于微信和 WhatsApp 看到的链接预览中，展示你的 logo 和品牌色。",
        },
        {
          name: "额外员工席位",
          price: "$15 / 席位 / 月",
          description: "在套餐包含的席位之外，增加更多商户登录账号。",
        },
      ],
    },
  },
  footer: {
    tagline:
      "为新西兰商家打造的批量接龙平台——发布接龙、收集订单、统一备货、集中交付。",
    columns: [
      {
        heading: "产品",
        links: [
          { label: "运作方式", href: "/#how-it-works" },
          { label: "功能", href: "/#features" },
          { label: "价格", href: "/pricing" },
          { label: "常见问题", href: "/#faq" },
        ],
      },
      {
        heading: "公司",
        links: [
          { label: "关于 GZhu Limited", href: "https://www.gzhu.co.nz" },
          { label: "联系我们", href: "mailto:info@gzhu.co.nz" },
          { label: "客户支持", href: "mailto:info@gzhu.co.nz" },
        ],
      },
      {
        heading: "法律条款",
        links: [
          { label: "隐私政策", href: "#" },
          { label: "商户条款", href: "#" },
          { label: "买家条款", href: "#" },
        ],
      },
    ],
    copyrightBefore: "© {year} Jielong，",
    company: "GZhu Limited",
    copyrightAfter: " 旗下产品。为新西兰而做。",
    pricingNote: "新西兰元定价 · Pacific/Auckland",
  },
};
