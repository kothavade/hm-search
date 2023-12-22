import {
  Github,
  Info,
  LucideProps,
  Moon,
  SunMedium,
  type XIcon as LucideIcon,
} from "lucide-react"

export type Icon = typeof LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m39.831 65.463l30.202 52.66l-13.88.131l-8.063-14.148l-8.12 14.072l-6.897-.002l-3.532-6.143l11.57-20.024l-8.213-14.386zm10.901-21.692L20.525 96.43l-7.052-12.034l8.14-14.103l-16.167-.042L2 64.237l3.519-6.15l23.013.073l8.27-14.352zm2.318 42.094l60.409.003l-6.827 12.164l-16.205-.045l8.047 14.115l-3.45 6.01l-7.05.008l-11.445-20.097l-16.483-.034zm35.16-23.074l-30.202-52.66L71.888 10l8.063 14.148l8.12-14.072l6.897.002l3.532 6.143l-11.57 20.024l8.213 14.386z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m39.831 65.463l30.202 52.66l-13.88.131l-8.063-14.148l-8.12 14.072l-6.897-.002l-3.532-6.143l11.57-20.024l-8.213-14.386zm35.08-23.207l-60.409-.003L21.33 30.09l16.204.045l-8.047-14.115l3.45-6.01l7.051-.01l11.444 20.097l16.484.034zm2.357 42.216l30.207-52.658l7.052 12.034l-8.141 14.102l16.168.043L126 64.006l-3.519 6.15l-23.013-.073l-8.27 14.352z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
}
