import { useState } from "react";
import Panel from "./Panel";
export default function Accordion() {
  const [active, setActive] = useState(0);

  const handlePanelClick = (index) => {
    setActive(index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Frequently Asked Questions
      </h2>

      <Panel
        title="What services do you offer?"
        isActive={active === 0}
        onActive={() => handlePanelClick(0)}
      >
        <p>
          We provide professional web UI/UX design services focused on creating
          clean, modern, and user-friendly interfaces. Our services include
          website UI design, landing page design, and complete design systems.
          Every design follows usability standards and current trends.
        </p>
      </Panel>

      <Panel
        title="How long does a design project take?"
        isActive={active === 1}
        onActive={() => handlePanelClick(1)}
      >
        <p>
          Project timelines depend on complexity and scope. Small projects like
          landing pages take around 3–4 business days, while full website
          designs may require 7–10 business days. Timelines are shared clearly
          before work begins.
        </p>
      </Panel>

      <Panel
        title="Which tools do you use for design?"
        isActive={active === 2}
        onActive={() => handlePanelClick(2)}
      >
        <p>
          We primarily use Figma for all UI/UX design work. It supports
          real-time collaboration, efficient feedback, and scalable component
          systems. Grid-based layouts ensure consistency across all screens.
        </p>
      </Panel>

      <Panel
        title="Do you offer revisions?"
        isActive={active === 3}
        onActive={() => handlePanelClick(3)}
      >
        <p>
          Yes, we offer multiple revision rounds depending on the selected
          package. Clients can request changes in layout, color schemes, or
          typography. Each feedback round is carefully reviewed and implemented.
        </p>
      </Panel>

      <Panel
        title="Will the design be mobile-friendly?"
        isActive={active === 4}
        onActive={() => handlePanelClick(4)}
      >
        <p>
          Absolutely. All designs are fully responsive and optimized for mobile,
          tablet, and desktop devices. We focus on touch-friendly components,
          readable typography, and smooth user experience across all screen
          sizes.
        </p>
      </Panel>
    </div>
  );
}
