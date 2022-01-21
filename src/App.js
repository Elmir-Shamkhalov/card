import "./App.css";
import Card from "./components/Card";
// const data = [
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Future-Of-Hospitality.png",
//     header: "Flex Bookings",
//     text: "Boost hotel occupancies by 30% with our unique booking model",
//     link: "https://business.stayflexi.com/features/flex-bookings/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Maintain-rate-parity-2.png",
//     header: "Flex Shops",
//     text: "Make more revenues from unsold amenities like parking spaces, spa",
//     link: "https://business.stayflexi.com/features/flex-point-of-sale-pos/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Flawless-Interface-2.png",
//     header: "Contactless Automations",
//     text: "Self check-in & check-out, auto room allocations, POS orders",
//     link: "https://business.stayflexi.com/features/booking-automations/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Flexible-Bookings.png",
//     header: "Unified Reservation Calendar",
//     text: "Perform all front desk operations from single location",
//     link: "https://business.stayflexi.com/features/unified-reservation-calendar/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Check-in-Check-out.png",
//     header: "Real Time Sync",
//     text: "Fastest Channel Manager with 100+ popular OTAs and meta searches",
//     link: "https://business.stayflexi.com/features/bulk-inventory-management/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/MultiCurrency-2-1.png",
//     header: "Payments Engine",
//     text: "Full life cycle of payments, from payment collections to settlements",
//     link: "https://business.stayflexi.com/features/payments-engine/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Automated-housekeeping-1.png",
//     header: "Smart Housekeeping",
//     text: "Fully automated housekeeping module, with mobile app support",
//     link: "https://business.stayflexi.com/features/smart-housekeeping/",
//   },
//   {
//     images:
//       "https://business.stayflexi.com/wp-content/uploads/2019/11/Single-interface-for-OTAs-1.png",
//     header: "Flex API",
//     text: "Build your custom solution with our Plug & Play APIs",
//     link: "https://business.stayflexi.com/features/flex-api/",
//   },
// ];

function App() {
  return (
    <div className="App">
      <div className="card-wrapper">
        {/* <div className="card-containt">
          {data.map((elem) => (
            <Card data={elem} />
          ))}
        </div> */}
      </div>
      <Card/>
    </div>
  );
}

export default App;
