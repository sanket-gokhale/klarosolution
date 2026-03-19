import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">Service Terms and Conditions</h1>
      <p className="text-gray-500 mb-6">Last Updated: 09/03/2026</p>

      <p className="mb-6">
        Welcome to <strong>Klarosolutions</strong>. Klarosolutions provides
        pickup and drop transportation services for mobile phones and
        electronic appliances between customers and authorized or selected
        repair stores. By using our services, you agree to the following Terms
        and Conditions.
      </p>

      {/* 1 */}
      <h2 className="text-xl font-semibold mt-6">1. Nature of Service</h2>
      <p>
        Klarosolutions provides only pickup and delivery services for devices.
        Klarosolutions does not perform repairs, diagnostics, or technical
        services. Devices are transported from the customer’s location to the
        repair store selected by the customer and returned after service
        completion.
      </p>

      {/* 2 */}
      <h2 className="text-xl font-semibold mt-6">
        2. Repair and Warranty Responsibility
      </h2>
      <p>
        All repairs, spare parts replacement, repair quality, pricing, and
        warranty are handled solely by the repair shop or service provider.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Repair work performed</li>
        <li>Spare parts used</li>
        <li>Warranty terms</li>
        <li>Any service-related disputes</li>
      </ul>

      <p className="mt-2">
        Klarosolutions has no involvement in the repair process.
      </p>

      <p className="mt-2">
        Klarosolutions will not be responsible for service interruptions or
        delays caused by events beyond its control such as:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Natural disasters</li>
        <li>Government restrictions</li>
        <li>Strikes or transportation issues</li>
      </ul>

      {/* 3 */}
      <h2 className="text-xl font-semibold mt-6">3. Liability Disclaimer</h2>

      <p>
        Klarosolutions acts only as a logistics facilitator between the
        customer and the repair shop. Therefore, Klarosolutions is not
        responsible for:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Repair quality or service results</li>
        <li>Device malfunction after repair</li>
        <li>Warranty claims</li>
        <li>Pricing or charges set by the repair shop</li>
        <li>Disputes between the customer and the repair shop</li>
      </ul>

      <p className="mt-2">
        All repair-related issues must be resolved directly between the
        customer and the repair shop.
      </p>

      {/* 4 */}
      <h2 className="text-xl font-semibold mt-6">
        4. Device Condition Declaration
      </h2>

      <p>
        Customers must accurately describe the device issue and physical
        condition before pickup.
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Cracked screens</li>
        <li>Water damage</li>
        <li>Physical dents</li>
        <li>Missing parts</li>
      </ul>

      <p className="mt-2">
        Klarosolutions is not responsible for pre-existing damage.
      </p>

      <p className="mt-2">
        Customers should properly hand over the device without loose or unsafe
        packaging. Klarosolutions is not responsible for damage caused by
        improper packaging by the customer.
      </p>

      {/* 5 */}
      <h2 className="text-xl font-semibold mt-6">5. Data Responsibility</h2>

      <p>
        Customers must back up all personal data before handing over their
        device. Klarosolutions will not be responsible for:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Data loss</li>
        <li>Data corruption</li>
        <li>Software issues</li>
        <li>Loss of stored files or applications</li>
      </ul>

      {/* 6 */}
      <h2 className="text-xl font-semibold mt-6">6. Pickup and Delivery</h2>

      <p>
        Customers must provide accurate address and contact details for pickup
        and delivery. Someone must be available at the location during the
        scheduled pickup or return.
      </p>

      <p className="mt-2">Delivery times may vary depending on:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Traffic conditions</li>
        <li>Location distance</li>
        <li>Repair shop processing time</li>
      </ul>

      <p className="mt-2">
        Pickup and delivery personnel may be external service providers or
        independent partners and may not be direct employees of Klarosolutions.
      </p>

      <p className="mt-2">
        Klarosolutions is not responsible for any personal actions, behavior,
        or commitments made by delivery personnel outside the scope of device
        transportation.
      </p>

      {/* 7 */}
      <h2 className="text-xl font-semibold mt-6">7. Payment Terms</h2>

      <p>Payment may include two separate charges:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Pickup and Delivery Service Fee charged by Klarosolutions</li>
        <li>Repair charges determined by the repair shop</li>
      </ul>

      <p className="mt-2">
        Once transportation service is completed, service fees are
        non-refundable.
      </p>

      {/* 8 */}
      <h2 className="text-xl font-semibold mt-6">
        8. Accepted Payment Methods
      </h2>

      <ul className="list-disc ml-6 mt-2">
        <li>Cash</li>
        <li>UPI Payments</li>
      </ul>

      <p className="mt-2">
        Payment methods may vary depending on the service location or repair
        shop policy.
      </p>

      {/* 9 */}
      <h2 className="text-xl font-semibold mt-6">9. Payment Responsibility</h2>

      <p>
        Customers are responsible for paying repair charges directly to the
        repair shop unless otherwise specified. Klarosolutions does not control
        or determine repair pricing.
      </p>

      {/* 10 */}
      <h2 className="text-xl font-semibold mt-6">
        10. Service Charges and Refund Policy
      </h2>

      <p>
        Pickup and delivery charges will be communicated before confirming the
        service. Once pickup and delivery services are completed, service fees
        are non-refundable.
      </p>

      {/* 11 */}
      <h2 className="text-xl font-semibold mt-6">11. Unclaimed Devices</h2>

      <p>
        If a repaired device is not collected or accepted within 30 days, the
        repair shop may apply storage charges or follow its own policy.
        Klarosolutions will not be responsible for devices held by the repair
        shop after delivery.
      </p>

      {/* 12 */}
      <h2 className="text-xl font-semibold mt-6">
        12. Limitation of Liability
      </h2>

      <p>
        Klarosolutions’ responsibility is strictly limited to transporting the
        device between the customer and the repair shop.
      </p>

      {/* 13 */}
      <h2 className="text-xl font-semibold mt-6">13. Service Refusal</h2>

      <p>Klarosolutions reserves the right to refuse or cancel service if:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Incorrect customer information is provided</li>
        <li>The device condition is unsafe</li>
        <li>Illegal activity is suspected</li>
        <li>Prohibited items are involved</li>
      </ul>

      <p className="mt-2">Customers must not submit devices that are:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Stolen</li>
        <li>Involved in legal disputes</li>
        <li>Containing hazardous materials</li>
      </ul>

      <p className="mt-2">
        If such devices are discovered, service may be cancelled immediately.
      </p>

      {/* 14 */}
      <h2 className="text-xl font-semibold mt-6">14. Changes to Terms</h2>

      <p>
        Klarosolutions reserves the right to update or modify these Terms and
        Conditions at any time. Updated terms will be posted on the platform.
      </p>

      {/* 15 */}
      <h2 className="text-xl font-semibold mt-6">15. Contact Information</h2>

      <p className="mt-2">
        Company Name: Klarosolutions <br />
        Phone: +91 9067228172 <br />
        Email: klarosolutionsnagpur@gmail.com
      </p>
    </div>
  );
};

export default Terms;