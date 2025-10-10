import Button from "@/Components/Common/Button";
import React from "react";
import Image from "next/image";
import CountUpNumber from "@/Components/Common/CountUpNumber";
import FeatureComponent from "@/Components/Ui/ResourcePlanning/FeatureComponent";
import FeatureSection from "@/Components/Ui/ResourcePlanning/FeatureSection";
import Blob from "@/Components/Common/Blob";
import { GrUserSettings } from "react-icons/gr";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import clsx from "clsx";

interface StatItem {
  end: number;
  label: string;
  suffix?: string;
}
const faqData2 = [
  {
    title: "Project Auto-Generation from RFP",
    content: (
      <p>
        Assign the right people automatically. Taskifi matches tasks with
        resource availability, role seniority, and working hours.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Cost Estimation Engine",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Deliverable Forecasting",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Multi-Board Planning",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Live AI Assistant (Zeta)",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
];

import {
  FaUserClock,
  FaUsersCog,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";
import ScrollWordColor from "@/Components/Common/ScrollWordColour";

const cards = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.05969 2.27345V14.7445L6.14813 13.6561C6.45141 13.3524 6.85641 13.1855 7.28813 13.1855C7.71984 13.1855 8.12484 13.3528 8.42813 13.6561C8.73187 13.9594 8.89922 14.3644 8.89922 14.7961C8.89922 15.2278 8.73187 15.6328 8.42813 15.9361L5.89406 18.4706C6.48141 18.9577 6.82312 19.6767 6.82312 20.4539C6.82312 21.2878 6.40359 21.9947 5.84203 22.4705H9.65859L9.70359 22.1442C9.78469 21.562 10.2698 21.1397 10.8577 21.1397H11.618C12.2058 21.1397 12.6909 21.562 12.772 22.1442L12.817 22.4705H16.1447C16.8459 22.4705 17.4164 21.9 17.4164 21.1992V12.3277L16.2141 12.9755C16.1723 12.998 16.1264 13.0088 16.0809 13.0088C16.0308 13.0088 15.9811 12.9956 15.9366 12.9689C15.8949 12.9439 15.8603 12.9085 15.8364 12.8662C15.8124 12.8239 15.7997 12.7761 15.7997 12.7275V11.2195C14.7783 10.3533 14.1956 9.09798 14.1956 7.75407C14.1956 5.70845 15.5541 3.97454 17.4164 3.40642V2.27345C17.4164 1.5722 16.8459 1.0022 16.1447 1.0022H14.5617L14.3906 1.52813C14.2317 2.01704 13.7967 2.33298 13.2825 2.33298H9.19219C8.67797 2.33298 8.24297 2.01704 8.08406 1.52813L7.91344 1.0022H6.33047C5.62922 1.0022 5.05969 1.5722 5.05969 2.27345ZM6.26016 20.4539C6.26016 21.4449 5.49844 22.2113 4.73297 22.4705H1.25391V15.653C1.25391 14.3138 1.62094 13.1855 2.40984 12.1027L4.49719 9.23673V15.3075L2.93156 16.8727C2.82188 16.9824 2.82188 17.1605 2.93156 17.2706C3.04172 17.3803 3.21984 17.3803 3.32953 17.2706L6.54562 14.0545C6.74297 13.8572 7.00688 13.7484 7.28813 13.7484C7.56984 13.7484 7.83328 13.8572 8.03063 14.0545C8.22797 14.2519 8.33672 14.5153 8.33672 14.797C8.33672 15.0783 8.22797 15.3422 8.03063 15.5395L5.26312 18.307C5.23327 18.337 5.21052 18.3733 5.19657 18.4132C5.18261 18.4531 5.17781 18.4956 5.1825 18.5377C5.18729 18.5797 5.2015 18.6201 5.22406 18.6559C5.24662 18.6917 5.27696 18.7219 5.31281 18.7444C5.90578 19.1152 6.26016 19.7545 6.26016 20.4539ZM18.7397 7.38001C18.9783 7.38001 19.1723 7.18595 19.1723 6.94735C19.1723 6.70923 18.9783 6.5147 18.7397 6.5147C18.5016 6.5147 18.3075 6.70876 18.3075 6.94735C18.3075 7.18595 18.5016 7.38001 18.7397 7.38001ZM21.015 6.94735C21.015 7.6561 20.2519 9.0122 19.402 10.4578C19.2628 10.695 19.0153 10.8366 18.7397 10.8366C18.4645 10.8366 18.217 10.695 18.0773 10.4578C17.2275 9.0122 16.4648 7.65657 16.4648 6.94735C16.4648 5.69298 17.4853 4.67251 18.7397 4.67251C19.9941 4.67251 21.015 5.69298 21.015 6.94735ZM14.7581 7.75407C14.7581 5.55845 16.5445 3.77157 18.7402 3.77157C20.9363 3.77157 22.7227 5.55798 22.7227 7.75407C22.7227 9.95017 20.9363 11.7366 18.7402 11.7366C18.397 11.7366 18.0562 11.693 17.7277 11.6067C17.6588 11.5889 17.5856 11.5974 17.5233 11.6311L16.3622 12.2564V11.0864C16.3622 11.0006 16.3233 10.92 16.2562 10.867C15.3037 10.1063 14.7581 8.97188 14.7581 7.75407ZM17.0273 6.94735C17.0273 6.00329 17.7956 5.23501 18.7397 5.23501C19.6842 5.23501 20.4525 6.00329 20.4525 6.94735C20.4525 7.56189 19.4916 9.19595 18.9173 10.1724C18.878 10.2399 18.818 10.2741 18.7397 10.2741C18.6619 10.2741 18.6019 10.2399 18.5625 10.1724C17.9883 9.19595 17.0273 7.56142 17.0273 6.94735ZM18.7397 7.94204C18.1912 7.94204 17.745 7.49579 17.745 6.94688C17.745 6.39845 18.1912 5.95173 18.7397 5.95173C19.2886 5.95173 19.7348 6.39798 19.7348 6.94688C19.7353 7.49579 19.2886 7.94204 18.7397 7.94204ZM9.19266 1.77048C8.92688 1.77048 8.70188 1.60735 8.61938 1.35423L8.505 1.0022H13.9706L13.8563 1.35423C13.7738 1.60688 13.5492 1.77048 13.283 1.77048H9.19266ZM11.6175 21.7022C11.9212 21.7022 12.1725 21.9206 12.2142 22.2216L12.2489 22.4705H10.2258L10.2605 22.2216C10.3022 21.9206 10.5534 21.7022 10.8572 21.7022H11.6175Z"
          fill="#F64D00"
        />
      </svg>
    ), // Orange
    iconBg: "bg-[#FDDBCC]",
    title: "Real-Time Availability Tracking",
    description:
      "See who’s available, overbooked, or underutilized at a glance—no spreadsheets needed.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1332_984)">
          <path
            d="M24 21.2687V22.5919C24 22.9482 23.8538 23.2721 23.6198 23.5074C23.3845 23.7427 23.0606 23.8876 22.703 23.8876H18.1308C17.7745 23.8876 17.4506 23.7427 17.2153 23.5074C16.98 23.2721 16.8352 22.9482 16.8352 22.5919V21.2687C16.8352 20.5473 17.1286 19.8919 17.6044 19.4176C18.0788 18.9432 18.7336 18.6483 19.4541 18.6483H21.3806C22.1006 18.6483 22.7559 18.9432 23.2303 19.4176C23.7047 19.8919 24 20.5473 24 21.2687ZM4.54594 18.6483H2.61937C1.89938 18.6483 1.24406 18.9432 0.769688 19.4176C0.293906 19.8919 0 20.5473 0 21.2687V22.5919C0 22.9482 0.144844 23.2721 0.380156 23.5074C0.615469 23.7427 0.939375 23.8876 1.29562 23.8876H5.86781C6.22547 23.8876 6.54938 23.7427 6.78469 23.5074C7.01859 23.2721 7.16484 22.9482 7.16484 22.5919V21.2687C7.16484 20.5473 6.87 19.8919 6.39563 19.4176C5.92078 18.9432 5.26594 18.6483 4.54594 18.6483ZM3.58266 18.5752C4.12359 18.5752 4.61391 18.3559 4.96734 18.001C5.32219 17.6476 5.54156 17.1573 5.54156 16.6163C5.54156 16.0754 5.32219 15.5851 4.96734 15.2302C4.61391 14.8754 4.12359 14.656 3.58266 14.656C3.04172 14.656 2.55141 14.8754 2.19656 15.2302C1.84172 15.5851 1.62234 16.0754 1.62234 16.6163C1.62234 17.1573 1.84172 17.6476 2.19656 18.001C2.55141 18.3563 3.04172 18.5752 3.58266 18.5752ZM12.9633 18.6483H11.0367C10.3167 18.6483 9.66141 18.9432 9.18703 19.4176C8.71125 19.8919 8.41781 20.5468 8.41781 21.2687V22.5919C8.41781 22.9482 8.56266 23.2721 8.79797 23.5074C9.03328 23.7427 9.35719 23.8876 9.71344 23.8876H14.2856C14.6433 23.8876 14.9672 23.7427 15.2025 23.5074C15.4364 23.2721 15.5827 22.9482 15.5827 22.5919V21.2687C15.5827 20.5473 15.2878 19.8919 14.8134 19.4176C14.3386 18.9432 13.6837 18.6483 12.9633 18.6483ZM12 14.6569C11.4591 14.6569 10.9688 14.8763 10.6139 15.2312C10.2591 15.586 10.0397 16.0763 10.0397 16.6173C10.0397 17.1582 10.2591 17.6485 10.6139 18.0019C10.9688 18.3568 11.4591 18.5762 12 18.5762C12.5409 18.5762 13.0312 18.3568 13.3847 18.0019C13.7395 17.6485 13.9589 17.1582 13.9589 16.6173C13.9589 16.0763 13.7395 15.586 13.3847 15.2312C13.0312 14.8763 12.5409 14.6569 12 14.6569ZM20.4173 14.6569C19.8764 14.6569 19.3861 14.8763 19.0312 15.2312C18.6764 15.586 18.457 16.0763 18.457 16.6173C18.457 17.1582 18.6764 17.6485 19.0312 18.0019C19.3861 18.3568 19.8764 18.5762 20.4173 18.5762C20.9583 18.5762 21.4486 18.3568 21.802 18.0019C22.1569 17.6485 22.3762 17.1582 22.3762 16.6173C22.3762 16.0763 22.1569 15.586 21.802 15.2312C21.4486 14.8763 20.9583 14.6569 20.4173 14.6569ZM13.1227 5.75163C13.4095 5.46476 13.5877 5.06726 13.5877 4.62897C13.5877 4.19069 13.4095 3.79319 13.1227 3.50632C12.8358 3.21944 12.4383 3.04132 12 3.04132C11.5617 3.04132 11.1642 3.21944 10.8773 3.50632C10.5905 3.79319 10.4123 4.19069 10.4123 4.62897C10.4123 5.06726 10.5905 5.46476 10.8773 5.75163C11.1642 6.03851 11.5617 6.21663 12 6.21663C12.4383 6.21663 12.8358 6.03851 13.1227 5.75163ZM2.23641 12.8204C2.09016 12.6741 2.09016 12.4365 2.23641 12.2902C2.38266 12.144 2.62031 12.144 2.76656 12.2902L3.20766 12.7299V10.0126C3.20759 9.96337 3.21724 9.91464 3.23604 9.86917C3.25484 9.8237 3.28243 9.78239 3.31722 9.7476C3.35201 9.71281 3.39332 9.68522 3.43879 9.66642C3.48426 9.64762 3.53299 9.63798 3.58219 9.63804H11.625V9.14538H11.4895C11.4062 9.14552 11.3251 9.11792 11.2592 9.06691C11.1932 9.0159 11.1461 8.94439 11.1253 8.86366L10.9753 8.40147L10.9406 8.29273C10.8023 8.25429 10.6697 8.20647 10.5394 8.15304C10.4091 8.09866 10.2816 8.03726 10.1578 7.96835L10.0556 8.02038L9.60141 8.25288C9.45375 8.32882 9.27844 8.29554 9.16687 8.18398L8.44547 7.46257C8.32312 7.34022 8.30344 7.15694 8.38313 7.01351L8.60766 6.57241L8.65969 6.47163C8.59172 6.34694 8.52938 6.21897 8.47641 6.08913C8.42164 5.95876 8.37468 5.82524 8.33578 5.68929L8.22797 5.65319L7.74281 5.49663C7.66352 5.47076 7.59512 5.4192 7.54843 5.35009C7.50174 5.28098 7.47942 5.19828 7.485 5.11507V4.11851C7.485 3.95257 7.59281 3.81147 7.74281 3.76366V3.76226L8.22797 3.60429L8.33578 3.5696C8.37562 3.43132 8.42203 3.29866 8.47641 3.16976C8.52938 3.03804 8.59219 2.91054 8.65969 2.78726L8.60766 2.68507L8.37656 2.23085C8.30062 2.08319 8.33391 1.90788 8.44547 1.79632L8.80547 1.43491L9.16687 1.07491C9.28781 0.952568 9.4725 0.932881 9.61594 1.01257L10.0556 1.2371L10.1578 1.28913C10.2816 1.22116 10.4091 1.15882 10.5394 1.10585C10.6697 1.05147 10.8023 1.00507 10.9406 0.965225L10.9753 0.857412L11.1333 0.372256C11.1578 0.297032 11.2054 0.231469 11.2694 0.18492C11.3334 0.138371 11.4104 0.113214 11.4895 0.113037H12.51C12.6853 0.113037 12.8316 0.232568 12.8728 0.394756L13.0228 0.856943L13.0589 0.964756C13.1958 1.0046 13.3298 1.05101 13.4587 1.10538C13.5891 1.15835 13.7166 1.22116 13.8412 1.28866L13.942 1.23663L14.3962 1.00554C14.5448 0.9296 14.7206 0.962881 14.8322 1.07444L15.5536 1.79585C15.6745 1.91679 15.6956 2.10147 15.6145 2.24491L15.39 2.6846L15.338 2.78679C15.4069 2.91054 15.4683 3.03804 15.5227 3.16929C15.5756 3.29819 15.6234 3.43085 15.6623 3.56913L15.7711 3.60382L16.2562 3.76179C16.4142 3.81382 16.5155 3.9596 16.5141 4.11804H16.5155V5.13851C16.5155 5.31382 16.3959 5.46007 16.2337 5.50132L15.7716 5.65132L15.6628 5.68741C15.6244 5.82569 15.5766 5.95835 15.5231 6.08726C15.4688 6.21757 15.4073 6.34507 15.3384 6.46976L15.3905 6.57054L15.623 7.02616C15.6975 7.17382 15.6656 7.34913 15.5541 7.46069L15.1927 7.82069L14.8327 8.1821C14.7748 8.24008 14.6996 8.27746 14.6184 8.28847C14.5373 8.29948 14.4548 8.28352 14.3836 8.24304L13.9425 8.01851L13.8417 7.96648C13.7176 8.03489 13.59 8.09655 13.4592 8.15116C13.3287 8.2052 13.1952 8.25183 13.0594 8.29085L13.0233 8.3996L12.8667 8.88476C12.8422 8.95998 12.7946 9.02554 12.7306 9.07209C12.6666 9.11864 12.5896 9.1438 12.5105 9.14398H12.375V9.6371H20.4178C20.467 9.63704 20.5157 9.64668 20.5612 9.66548C20.6067 9.68428 20.648 9.71187 20.6828 9.74666C20.7176 9.78145 20.7452 9.82276 20.764 9.86823C20.7828 9.9137 20.7924 9.96243 20.7923 10.0116V12.729L21.2334 12.2893C21.3797 12.143 21.6159 12.143 21.7636 12.2893C21.9098 12.4355 21.9098 12.6732 21.7636 12.8194L20.6822 13.8999C20.5359 14.0462 20.2983 14.0462 20.152 13.8999L19.0716 12.8194C18.9253 12.6732 18.9253 12.4355 19.0716 12.2893C19.2178 12.143 19.4555 12.143 19.6017 12.2893L20.0428 12.729V10.3876H12.3745V12.7299L12.8156 12.2902C12.9619 12.144 13.1981 12.144 13.3458 12.2902C13.492 12.4365 13.492 12.6741 13.3458 12.8204L12.2644 13.9009C12.1181 14.0471 11.8805 14.0471 11.7342 13.9009L10.6537 12.8204C10.5075 12.6741 10.5075 12.4365 10.6537 12.2902C10.8 12.144 11.0377 12.144 11.1839 12.2902L11.625 12.7299V10.3876H3.95719V12.7299L4.39828 12.2902C4.54453 12.144 4.78078 12.144 4.92844 12.2902C5.07469 12.4365 5.07469 12.6741 4.92844 12.8204L3.84703 13.9009C3.70078 14.0471 3.46312 14.0471 3.31687 13.9009L2.23641 12.8204ZM12 6.96616C12.6459 6.96616 13.2291 6.7046 13.6528 6.28179C14.0752 5.85944 14.3372 5.27444 14.3372 4.62897C14.3372 3.98304 14.0756 3.39851 13.6528 2.97616C13.2291 2.55241 12.6455 2.29179 12 2.29179C11.3545 2.29179 10.7695 2.55241 10.3472 2.97616C9.92344 3.39851 9.66141 3.98351 9.66141 4.62897C9.66141 5.27491 9.92297 5.85944 10.3472 6.28179C10.7695 6.7046 11.3541 6.96616 12 6.96616Z"
            fill="#059669"
          />
        </g>
        <defs>
          <clipPath id="clip0_1332_984">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ), // Green
    iconBg: "bg-[#CDEAE1]",
    title: "Smarter Resource Allocation",
    description:
      "Assign the right people to the right tasks using role, workload, and skill-based AI suggestions.",
  },
  {
    icon: (
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.8943 0.411865H18.7766V2.52951C18.7766 2.95304 18.4237 3.23539 18.0708 3.23539C17.7178 3.23539 17.3649 2.95304 17.3649 2.52951V0.411865H6.07076V2.52951C6.07076 2.95304 5.71782 3.23539 5.36488 3.23539C5.01194 3.23539 4.659 2.95304 4.659 2.52951V0.411865H2.54135C1.48253 0.411865 0.706055 1.32951 0.706055 2.52951V5.07069H23.2943V2.52951C23.2943 1.32951 22.0237 0.411865 20.8943 0.411865ZM0.706055 6.55304V19.4707C0.706055 20.7413 1.48253 21.5883 2.61194 21.5883H20.9649C22.0943 21.5883 23.3649 20.6707 23.3649 19.4707V6.55304H0.706055ZM6.98841 18.4119H5.29429C5.01194 18.4119 4.72958 18.2001 4.72958 17.8472V16.0825C4.72958 15.8001 4.94135 15.5177 5.29429 15.5177H7.059C7.34135 15.5177 7.6237 15.7295 7.6237 16.0825V17.8472C7.55311 18.2001 7.34135 18.4119 6.98841 18.4119ZM6.98841 12.0589H5.29429C5.01194 12.0589 4.72958 11.8472 4.72958 11.4942V9.72951C4.72958 9.44716 4.94135 9.16481 5.29429 9.16481H7.059C7.34135 9.16481 7.6237 9.37657 7.6237 9.72951V11.4942C7.55311 11.8472 7.34135 12.0589 6.98841 12.0589ZM12.6355 18.4119H10.8708C10.5884 18.4119 10.3061 18.2001 10.3061 17.8472V16.0825C10.3061 15.8001 10.5178 15.5177 10.8708 15.5177H12.6355C12.9178 15.5177 13.2002 15.7295 13.2002 16.0825V17.8472C13.2002 18.2001 12.9884 18.4119 12.6355 18.4119ZM12.6355 12.0589H10.8708C10.5884 12.0589 10.3061 11.8472 10.3061 11.4942V9.72951C10.3061 9.44716 10.5178 9.16481 10.8708 9.16481H12.6355C12.9178 9.16481 13.2002 9.37657 13.2002 9.72951V11.4942C13.2002 11.8472 12.9884 12.0589 12.6355 12.0589ZM18.2825 18.4119H16.5178C16.2355 18.4119 15.9531 18.2001 15.9531 17.8472V16.0825C15.9531 15.8001 16.1649 15.5177 16.5178 15.5177H18.2825C18.5649 15.5177 18.8472 15.7295 18.8472 16.0825V17.8472C18.8472 18.2001 18.6355 18.4119 18.2825 18.4119ZM18.2825 12.0589H16.5178C16.2355 12.0589 15.9531 11.8472 15.9531 11.4942V9.72951C15.9531 9.44716 16.1649 9.16481 16.5178 9.16481H18.2825C18.5649 9.16481 18.8472 9.37657 18.8472 9.72951V11.4942C18.8472 11.8472 18.6355 12.0589 18.2825 12.0589Z"
          fill="#7555FE"
        />
      </svg>
    ), // Purple
    iconBg: "bg-[#4919DD33]",
    title: "Leave & Time-Off Management",
    description:
      "Track leave requests, approvals, and balance forecasts effortlessly, all in one place.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1333_1008)">
          <path
            d="M11.2669 16.5863V22.8071C11.2669 23.1249 11.0081 23.3837 10.6903 23.3837H8.76281C8.445 23.3837 8.18625 23.1249 8.18625 22.8071V16.5863C8.18625 16.2685 8.445 16.0098 8.76281 16.0098H10.6903C11.0086 16.0098 11.2669 16.268 11.2669 16.5863ZM14.7605 12.4894H12.833C12.5152 12.4894 12.2564 12.7482 12.2564 13.066V22.8066C12.2564 23.1244 12.5152 23.3832 12.833 23.3832H14.7605C15.0783 23.3832 15.337 23.1244 15.337 22.8066V13.066C15.337 12.7482 15.0783 12.4894 14.7605 12.4894ZM6.62063 14.0748H4.69313C4.37531 14.0748 4.11656 14.3335 4.11656 14.6513V22.8066C4.11656 23.1244 4.37531 23.3832 4.69313 23.3832H6.62063C6.93844 23.3832 7.19719 23.1244 7.19719 22.8066V14.6513C7.19719 14.3335 6.93844 14.0748 6.62063 14.0748ZM18.9234 12.6985V14.1751H18.9703C19.2333 14.1751 19.4475 14.3893 19.4475 14.6523V21.8021C19.4475 22.674 18.7383 23.3832 17.8664 23.3832C17.4455 23.3832 17.0489 23.2182 16.7494 22.9191C16.4498 22.6196 16.2853 22.223 16.2853 21.8021V14.6523C16.2853 14.5252 16.335 14.4052 16.425 14.3148C16.515 14.2243 16.635 14.1746 16.7625 14.1746H16.8094V12.698C15.307 12.4341 13.9931 11.6171 13.0852 10.4659L10.0036 13.8404C9.94303 13.9066 9.86074 13.9489 9.77164 13.9597C9.68254 13.9704 9.59255 13.9489 9.51797 13.899L5.73984 11.3673L1.88438 16.3805C1.84932 16.4261 1.80424 16.463 1.75262 16.4884C1.701 16.5138 1.64423 16.5269 1.58672 16.5268C1.50703 16.5268 1.42641 16.5015 1.35844 16.449C1.19438 16.3229 1.16344 16.0871 1.29 15.923L5.35969 10.6318C5.48016 10.4752 5.70141 10.4387 5.86547 10.5488L9.66703 13.0965L12.6473 9.83304C12.0966 8.91804 11.7792 7.84694 11.7792 6.70366C11.7792 3.34741 14.5097 0.616943 17.8659 0.616943C21.2222 0.616943 23.9531 3.34741 23.9531 6.70366C23.9531 9.69944 21.7777 12.1965 18.9234 12.6985ZM18.6975 14.9251H17.0353V15.7285H18.6975V14.9251ZM23.2031 6.70366C23.2031 3.76085 20.8092 1.36694 17.8664 1.36694C14.9236 1.36694 12.5297 3.76085 12.5297 6.70366C12.5297 7.62616 12.765 8.49429 13.1784 9.25179L13.5197 8.87819C13.5408 8.85522 13.5647 8.8346 13.5905 8.81773L13.7466 8.71507C13.4397 8.089 13.2805 7.4009 13.2811 6.70366C13.2811 4.17569 15.338 2.11882 17.8659 2.11882C20.3939 2.11882 22.4508 4.17569 22.4508 6.70366C22.4508 9.23163 20.3939 11.2885 17.8659 11.2885C16.327 11.2885 14.963 10.5263 14.1309 9.3596L14.0414 9.41866L13.598 9.90429C14.5725 11.2004 16.1231 12.0404 17.8659 12.0404C20.8092 12.0404 23.2031 9.64647 23.2031 6.70366ZM17.3817 7.82913L17.5294 7.12741L14.7595 8.94757C15.457 9.91038 16.5895 10.539 17.8669 10.539C19.9814 10.539 21.7017 8.81866 21.7017 6.70413C21.7017 4.5896 19.9814 2.86929 17.8669 2.86929C15.7523 2.86929 14.032 4.5896 14.032 6.70413C14.032 7.27319 14.1577 7.81319 14.3808 8.29929L17.0803 6.52554L16.3617 6.47163C16.3126 6.46798 16.2647 6.45468 16.2208 6.43252C16.1768 6.41035 16.1377 6.37974 16.1055 6.34243C16.0734 6.30513 16.0489 6.26186 16.0335 6.2151C16.0181 6.16834 16.0121 6.11901 16.0158 6.06991C16.0313 5.86319 16.2122 5.70804 16.4175 5.72397L18.1303 5.85194C18.2381 5.85991 18.337 5.91429 18.4022 6.00054C18.4673 6.08679 18.4917 6.19741 18.4692 6.30288L18.1158 7.98382C18.0981 8.06799 18.052 8.14354 17.9853 8.19781C17.9186 8.25208 17.8352 8.28178 17.7492 8.28194C17.7239 8.28194 17.6977 8.27913 17.6719 8.27397C17.4689 8.23038 17.3391 8.03163 17.3817 7.82913ZM2.55094 18.5738H0.623438C0.305625 18.5738 0.046875 18.8326 0.046875 19.1504V22.8066C0.046875 23.1244 0.305625 23.3832 0.623438 23.3832H2.55094C2.86875 23.3832 3.1275 23.1244 3.1275 22.8066V19.1504C3.1275 18.8326 2.86875 18.5738 2.55094 18.5738Z"
            fill="#FF9500"
          />
        </g>
        <defs>
          <clipPath id="clip0_1333_1008">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ), // Amber
    iconBg: "bg-[#FFEACC]",
    title: "Utilization & Forecasting Insights",
    description:
      "Get a clear view of team capacity, optimize workloads, and plan ahead with confidence.",
  },
];

const stats: StatItem[] = [
  {
    end: 15,
    label: "15k+ users used Dash for their business today.",
    suffix: "K+",
  },
  { end: 25, label: "Decrease expense more than 25%/mo", suffix: "%" },
  { end: 60, label: "Business revenue increase significantly.", suffix: "%" },
];

const page = () => {
  return (
    <div className="pt-20">
      {/* hero section */}
      <div className="container mx-auto lg:pb-16 md:max-w-screen-lg 2xl:max-w-screen-xl px-4">
        <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center gap-12 lg:gap-16 px-4 py-10">
          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-bold leading-tight text-text-primary">
              Let your people do their best work — while Taskifi handles the
              planning.
            </h1>

            <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0">
              Ensure every project has the right people at the right time with
              AI-powered scheduling, time tracking, leave planning, and
              onboarding — all in one place.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                type="button"
                variant="solid"
                className="w-fit text-base md:text-lg font-semibold"
                href="/services/resource-planning"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/resourcePlanning/hero.png"
              alt="Resource Planning"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="container mx-auto md:max-w-screen-lg 2xl:max-w-screen-xl py-16 px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Heading */}
          <div className="md:w-1/3 w-full text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary leading-relaxed">
              Put the{" "}
              <span className="bg-gradient-primary text-white  rounded">
                Pro
              </span>
              <br />
              in{" "}
              <span className="bg-gradient-primary text-white  rounded">
                Pro
              </span>
              ductivity
            </h2>
          </div>

          {/* Right Counters */}
          <div className="md:w-2/3 w-full flex flex-col md:flex-row justify-evenly gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4"
              >
                <CountUpNumber
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={1}
                  className="text-4xl font-bold text-text-primary"
                />
                <div className="text-base font-medium text-text-secondary mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <FeatureComponent />
      </div>
      {/* Feature Section 2 */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <FeatureSection />
      </div>
      {/* Cards Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <h2 className="component-heading text-center pb-16 ">
          Built for your people
        </h2>

        <div className="relative flex flex-col lg:flex-row justify-center gap-6">
          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:max-w-[300px] border-[0.5px] border-[#E5E7EB] flex flex-col gap-4 bg-white z-20 custom-shadow-5  rounded-xl p-6 text-center sm:text-left"
            >
              <div
                className={clsx(
                  "text-black bg-[#4919DD33] w-12 h-12 rounded-full flex justify-center items-center text-2xl mx-auto sm:mx-0",
                  card.iconBg
                )}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-loose">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ScrollWordColor
        text="Great teams don’t just happen—they’re planned. When resources are aligned
      with real-time availability, skills, and priorities, work flows smarter,
      stress drops, and outcomes soar."
        containerClassName="container mx-auto py-36 px-6 relative flex items-center justify-center"
        headingClassName="2xl:text-[40px] md:text-4xl text-2xl font-bold text-[#717171] max-w-6xl text-center z-20"
        blobSize={200}
      />
      {/* screen section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary bg-primary/20 rounded-full w-fit mx-auto px-4 py-1 lg:text-lg mb-10 font-medium">
              A single timesheet for every task
            </p>
            <h1 className="component-heading xl:max-w-4xl 2xl:max-w-full mx-auto font-bold text-text-primary mb-6">
              How can you track effort if hours are scattered in spreadsheets,
              Slack messages, and forgotten emails?
            </h1>
            <p className=" 2xl:text-lg  text-text-secondary md:max-w-2xl 2xl:max-w-3xl mx-auto">
              Taskifi centralizes time tracking into one place — so you always
              know what’s been worked on, by whom, and for how long. Submit,
              approve, and analyze — all from one intelligent view.
            </p>
          </div>

          <img
            src="/ProjectManagement/budgeting.png"
            className="w-full h-auto object-contain border-4 border-black rounded-2xl mb-16"
            alt=""
          />

          <h3 className="text-text-secondary text-xl lg:text-2xl font-bold text-center max-w-4xl mx-auto ">
            “You get a real-time breakdown of hours per project, per person —
            whether you're logging time, reviewing a sprint, or approving a full
            week's work.”
          </h3>
        </section>
      </div>
      {/* Resource Planning Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl max-w-md 2xl:text-5xl text-text-primary font-bold">
              Smooth the path for faster, smarter employee onboarding.
            </h3>
            <p className="text-base md:text-lg text-text-secondary">
              Empower your HR and Operations teams to onboard new hires
              efficiently with real-time status tracking, centralized candidate
              data, and automated approval flows — all from one streamlined
              dashboard.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button variant="solid" href="#" className="w-fit">
                Try Taskifi
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/resourcePlanning/card.png"
              alt="Resource Planning"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="flex-1 max-w-screen-lg text-center md:text-left z-10">
          <div className="text-center mb-16">
            <h2 className="component-heading">FAQ</h2>
            <p className="text-text-secondary  2xl:text-lg  mt-10 max-w-2xl mx-auto">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our team.
            </p>
          </div>
          <CustomDropdown
            data={faqData2}
            bgOpen="bg-[#F9FAFB]"
            textColor="text-black md:text-2xl text-lg"
            textColorP="text-text-secondary "
            bgColor="bg-transparent "
            classNameMenu="rounded-xl "
            expandedIndex={0}
            className="mb-8 flex flex-col gap-4 divide-none"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
