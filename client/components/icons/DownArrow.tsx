type Props = {
   size?: number;
   style?: React.CSSProperties;
   fill?: string;
};

export const DownArrow = ({ size = 24, style = {}, fill = 'white' }: Props): JSX.Element => (
   <svg fill={fill} style={style} width={size} height={size} viewBox="0 0 512 512">
      <path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0122.63-.09L240 303.58V170a16 16 0 0132 0v133.58l52.73-52.32A16 16 0 11347.27 274l-80 79.39a16 16 0 01-22.54 0l-80-79.39a16 16 0 01-.09-22.65z" />
   </svg>
);