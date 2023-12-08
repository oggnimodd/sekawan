import { FC } from "react";

interface CardProps {
  title: string;
  count: number;
}

const Card: FC<CardProps> = ({ title, count }) => {
  return (
    <div className="group w-full rounded-lg flex-col px-8 py-6 bg-default-100 border-foreground/40 dark:border-foreground/10 border-1 hover:!border-primary">
      <p className="font-semibold text-foreground/60 text-center text-lg mb-2 group-hover:text-primary-500">
        {title}
      </p>
      <p className="text-4xl font-medium text-center group-hover:text-primary-500">
        {count}
      </p>
    </div>
  );
};

export default Card;
