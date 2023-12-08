import React from "react";
import { Card, Image } from "@nextui-org/react";
import { Twitter, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  twitter: string;
  linkedin: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  twitter,
  linkedin,
}) => {
  return (
    <Card className="md:max-w-md py-8">
      <div className="flex flex-col items-center">
        <Image
          className="mb-5"
          src={image}
          alt={name}
          width={150}
          height={150}
        />
        <p className="text-xl font-bold mb-1 text-center px-4">{name}</p>
        <p className="mb-3 text-center px-4">{role}</p>
        <div className="flex space-x-4">
          <a
            className="group"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="text-foreground group-hover:text-primary-500"
              size={24}
            />
          </a>
          <a
            className="group"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="text-foreground group-hover:text-primary-500"
              size={24}
            />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
