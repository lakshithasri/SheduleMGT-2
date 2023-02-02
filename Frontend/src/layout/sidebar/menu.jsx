import { Home, Anchor, Headphones } from "react-feather";
export const MENUITEMS = [
  // {
  //   menutitle: "Production",
  //   menucontent: "QA,Inventroy & Stocks,Production Planning,Patterns",
  //   Items: [
  //     {
  //       title: "Production Management",
  //       icon: Home,
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: `${process.env.PUBLIC_URL}/production/QC`,
  //           title: "Quality Control Management",
  //           type: "link",
  //         },
  //         {
  //           path: `${process.env.PUBLIC_URL}/production/IS`,
  //           title: "Inventory & Stock",
  //           type: "link",
  //         },
  //         {
  //           path: `${process.env.PUBLIC_URL}/production/PP`,
  //           title: "Production Planing",
  //           type: "link",
  //         },
  //         {
  //           path: `${process.env.PUBLIC_URL}/production/PM`,
  //           title: "Patterns Management",
  //           type: "link",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    menutitle: "Nurses' Duty Roster",
    menucontent: "2023",
    Items: [
      {
        title: "Click here to see navigation bar",
        icon: Anchor,
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${process.env.PUBLIC_URL}/cost/AM`,
          //   title: "Account Management",
          //   type: "link",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/cost/HR`,
          //   title: "HR Management",
          //   type: "link",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/cost/IE`,
          //   title: "Industrial Engineering Management",
          //   type: "link",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/cost/MM`,
          //   title: "Marketing Management",
          //   type: "link",
          // },
          {
            path: `${process.env.PUBLIC_URL}/cost/duty-roster`,
            title: "Duty Roster",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/cost/change-duty-request`,
            title: "Change Duty Request",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/cost/dashboard`,
            title: "Dashboard",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/cost/leave`,
            title: "Leave Management",
            type: "link",
          },
        ],
      },
    ],
  },
  // {
  //     menutitle:"Support",
  //     menucontent:"",
  //     Items:[
  //         {
  //             title: 'Raise Support', icon: Headphones, type: 'sub',active: false, children: [
  //                     { title: 'Raise Ticket', type: 'exteral_link', path: 'http://support.pixelstrap.com/help-center' },
  //             ]
  //         }
  //     ]
  // },
];
