import { MenuEntry } from '@cardswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cardswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://cardswap.finance/farms'
  },
  {
    label: 'Card Stacks',
    icon: 'PoolIcon',
    href: 'https://cardswap.finance/pools'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xE8AD18719872c3052bC538f0932b8E6f08DbA15d',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/CardswapFinance",
      },
      {
        label: "Blog",
        href: "https://cardswapfarm.medium.com/",
      },
    ],
  },
]

export default config
