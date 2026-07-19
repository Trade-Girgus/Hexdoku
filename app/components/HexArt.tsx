type RuleKind = "ascending" | "descending" | "color" | "touching";
type Mark = "crystal" | "x" | "red-x";

const rowLengths = [3, 4, 5, 4, 3];
const rowOffsets = [0, 3, 7, 12, 16];
const heroColors = [
  "blue",
  "blue",
  "mint",
  "blue",
  "rose",
  "mint",
  "mint",
  "rose",
  "rose",
  "gold",
  "lavender",
  "mint",
  "coral",
  "gold",
  "lavender",
  "coral",
  "coral",
  "gold",
  "lavender",
];

const heroMarks: Record<number, Mark> = {
  1: "x",
  4: "crystal",
  7: "x",
  9: "crystal",
  12: "x",
  14: "crystal",
  17: "x",
};

const ruleData: Record<
  RuleKind,
  { active: number[]; marks: Record<number, Mark>; color: string }
> = {
  ascending: {
    active: [0, 4, 9, 14, 18],
    marks: { 0: "x", 4: "x", 9: "crystal", 14: "x", 18: "x" },
    color: "blue",
  },
  descending: {
    active: [2, 5, 9, 13, 16],
    marks: { 2: "x", 5: "x", 9: "crystal", 13: "x", 16: "x" },
    color: "coral",
  },
  color: {
    active: [4, 5, 8, 9, 10, 13, 14],
    marks: {
      4: "x",
      5: "x",
      8: "x",
      9: "crystal",
      10: "x",
      13: "x",
      14: "x",
    },
    color: "lavender",
  },
  touching: {
    active: [4, 5, 8, 9, 10, 13, 14],
    marks: {
      4: "x",
      5: "x",
      8: "x",
      9: "crystal",
      10: "x",
      13: "x",
      14: "x",
    },
    color: "mint",
  },
};

function Crystal() {
  return (
    <span className="crystal" aria-hidden="true">
      <span className="crystal-center" />
      <span className="crystal-shine" />
    </span>
  );
}

function XMark({ wrong = false }: { wrong?: boolean }) {
  return (
    <span className={`x-mark${wrong ? " x-mark-wrong" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

function MarkView({ mark }: { mark?: Mark }) {
  if (mark === "crystal") return <Crystal />;
  if (mark === "x") return <XMark />;
  if (mark === "red-x") return <XMark wrong />;
  return null;
}

export function HeroBoard() {
  return (
    <div
      className="hex-board hero-board"
      role="img"
      aria-label="A colorful 3, 4, 5, 4, 3 hex grid with glowing crystals and X marks"
    >
      {rowLengths.map((length, rowIndex) => {
        const row = Array.from(
          { length },
          (_, columnIndex) => rowOffsets[rowIndex] + columnIndex,
        );

        return (
          <div className="hex-row" key={rowIndex}>
            {row.map((index) => (
              <div
                className={`hex-cell hex-${heroColors[index]}`}
                key={index}
              >
                <div className="hex-face">
                  <MarkView mark={heroMarks[index]} />
                </div>
                {index === 14 ? <span className="point-pop">+725</span> : null}
              </div>
            ))}
          </div>
        );
      })}
      <div className="board-rim" aria-hidden="true" />
    </div>
  );
}

export function RuleBoard({ kind }: { kind: RuleKind }) {
  const data = ruleData[kind];

  return (
    <div
      className={`hex-board mini-board mini-${kind}`}
      role="img"
      aria-label={`Example of the ${kind} rule`}
    >
      {rowLengths.map((length, rowIndex) => {
        const row = Array.from(
          { length },
          (_, columnIndex) => rowOffsets[rowIndex] + columnIndex,
        );

        return (
          <div className="hex-row" key={rowIndex}>
            {row.map((index) => {
              const active = data.active.includes(index);
              return (
                <div
                  className={`hex-cell ${
                    active ? `hex-${data.color}` : "hex-ghost"
                  }`}
                  key={index}
                >
                  <div className="hex-face">
                    <MarkView mark={active ? data.marks[index] : undefined} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
