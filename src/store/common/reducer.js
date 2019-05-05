import * as types from "./actionTypes";

const initialState = {
  type: null,
  heading:null,
  location: null,
  notification: null,
  hasConnection: true,
  upcomingDeliveries:[],
  completedDeliveries:[],
  inprocessDeliveries:[],
  queueIn: false,
  currentDelivery:null,
  internetConnection:true,
  alerts:[],
  projects:[],
  ongoingSalesOrders:[],
  completedSalesOrders:[],
  ongoingProjects:[],
  completedProjects:[],

  todayUpcomingCount:0,
  otherUpcomingCount:0,
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {

    case types.SET_HEADING:
      return {
        ...state,
        type:types.SET_HEADING,
        heading: action.heading
      }

    case types.SET_LOCATION:
      return {
        ...state,
        type: types.SET_LOCATION,
        location: action.location,
        status: action.status
      }

    default:
      return state;
  }
}
