interface ArrowsProps {
  width: string;
  height: string;
  fill: string;
}

export const ArrowUpIcon = ({ fill, height, width }: ArrowsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 7L22 17L2 17L12 7Z" fill={fill} />
    </svg>
  );
};

export const ArrowDownIcon = ({ fill, height, width }: ArrowsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.0001 17L2.00009 7L22.0001 7L12.0001 17Z" fill={fill} />
    </svg>
  );
};
