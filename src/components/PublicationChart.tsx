"use client";

import { useState } from "react";
import { publicationsPerYear } from "@/data/publications";

const WIDTH = 560;
const HEIGHT = 180;
const PADDING = 16;
const GAP = 40;
const LABEL_SPACE = 34;

export function PublicationChart() {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const data = publicationsPerYear();
  const max = Math.max(...data.map((d) => d.count), 1);
  const n = data.length;
  const availableWidth = WIDTH - PADDING * 2;
  const gap = n > 1 ? Math.min(GAP, availableWidth / (n * 2)) : GAP;
  const barWidth = n > 0 ? Math.max((availableWidth - gap * (n - 1)) / n, 2) : 0;
  const baselineY = LABEL_SPACE + HEIGHT;
  const viewBoxHeight = baselineY + 36;

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          Publications distribution (2021 — Present)
        </span>
        {hoveredYear !== null && (
          <span className="animate-fade-in text-xs font-semibold text-accent">
            {data.find((d) => d.year === hoveredYear)?.count}{" "}
            {data.find((d) => d.year === hoveredYear)?.count === 1 ? "paper" : "papers"} in {hoveredYear}
          </span>
        )}
      </div>

      <svg
        viewBox={`0 0 ${WIDTH} ${viewBoxHeight}`}
        role="img"
        aria-label="Bar chart of publications per year"
        className="mx-auto h-48 max-h-56 w-auto max-w-full overflow-visible"
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="barGradientHover" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {data.map((d, i) => {
          const x = PADDING + i * (barWidth + gap);
          const barHeight = (d.count / max) * HEIGHT;
          const y = baselineY - barHeight;
          const isHovered = hoveredYear === d.year;

          return (
            <g
              key={d.year}
              onMouseEnter={() => setHoveredYear(d.year)}
              onMouseLeave={() => setHoveredYear(null)}
              className="cursor-pointer transition-transform duration-200"
            >
              {/* Background hover bar track */}
              <rect
                x={x - 4}
                y={LABEL_SPACE}
                width={barWidth + 8}
                height={HEIGHT}
                rx={6}
                fill={isHovered ? "var(--accent-soft)" : "transparent"}
                className="transition-colors duration-200"
              />

              {/* Data Bar */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx={8}
                fill={isHovered ? "url(#barGradientHover)" : "url(#barGradient)"}
                className="transition-all duration-300"
                style={{
                  filter: isHovered ? "drop-shadow(0 4px 12px rgba(79, 70, 229, 0.4))" : "none",
                }}
              />

              {/* Count badge above bar */}
              <text
                x={x + barWidth / 2}
                y={y - 12}
                textAnchor="middle"
                fontSize="13"
                fontWeight={isHovered ? "700" : "600"}
                fill={isHovered ? "var(--accent)" : "var(--foreground)"}
                className="transition-colors duration-200"
              >
                {d.count}
              </text>

              {/* Year label below baseline */}
              <text
                x={x + barWidth / 2}
                y={baselineY + 24}
                textAnchor="middle"
                fontSize="13"
                fontWeight={isHovered ? "600" : "500"}
                fill={isHovered ? "var(--accent)" : "var(--muted)"}
                className="transition-colors duration-200"
              >
                {d.year}
              </text>
            </g>
          );
        })}

        <line
          x1={PADDING}
          y1={baselineY}
          x2={WIDTH - PADDING}
          y2={baselineY}
          stroke="var(--line)"
          strokeWidth={1.5}
        />
      </svg>
    </div>
  );
}
