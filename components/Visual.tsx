type VisualProps = {
  type?: "sea" | "air" | "boxes" | "vehicle" | "customs" | "warehouse" | "moving" | "shield";
  className?: string;
};

const iconByType: Record<NonNullable<VisualProps["type"]>, string> = {
  sea: "fa-ship",
  air: "fa-plane-departure",
  boxes: "fa-boxes-stacked",
  vehicle: "fa-car-side",
  customs: "fa-file-signature",
  warehouse: "fa-warehouse",
  moving: "fa-truck-ramp-box",
  shield: "fa-shield-halved"
};

export function Visual({ type = "sea", className = "" }: VisualProps) {
  return (
    <div className={`visual visual-${type} ${className}`} aria-hidden="true">
      <div className="visual-sky" />
      <div className="visual-grid" />
      <div className="visual-route" />
      <div className="visual-card visual-card-a">
        <i className={`fa-solid ${iconByType[type]}`} />
      </div>
      <div className="visual-card visual-card-b">
        <i className="fa-solid fa-location-dot" />
      </div>
      <div className="container-stack">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="crane">
        <span />
        <span />
      </div>
      <div className="visual-floor" />
    </div>
  );
}
