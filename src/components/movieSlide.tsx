
type Props = {
  title: string;
  img: string;
};

const MovieSlide = ({ title, img }: Props) => {
  return (
    <div className="relative">
      <img src={img} className="select-none"/>
      <div className=" text-white capitalize select-none text-lg text-center font-semibold">{title}</div>
    </div>
  );
};

export default MovieSlide;
