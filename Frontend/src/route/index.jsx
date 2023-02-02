// dashbaord

import ChangeDutyRequst from "../components/change-duty-request";
import Dashboard from "../components/dashboard";
import Duty from "../components/duty-roster";
import DutyRoster from "../components/duty-roster";
import Leave from "../components/leave";
import Logins from "../pages/authentication/login";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/cost/leave/:layout`, Component: Leave },
  {
    path: `${process.env.PUBLIC_URL}/cost/duty-roster/:layout`,
    Component: DutyRoster,
  },
  {
    path: `${process.env.PUBLIC_URL}/cost/dashboard/:layout`,
    Component: Dashboard,
  },
  {
    path: `${process.env.PUBLIC_URL}/cost/change-duty-request/:layout`,
    Component: ChangeDutyRequst,
  },
  {
    path: `${process.env.PUBLIC_URL}/login/`,
    Component: Logins,
  },
];
