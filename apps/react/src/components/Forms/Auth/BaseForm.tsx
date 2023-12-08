import React, { FC } from "react";
import { Image } from "@nextui-org/react";

interface BaseFormProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const BaseForm: FC<BaseFormProps> = ({ children, footer, header }) => {
  return (
    <div className="flex flex-col">
      {/* Header with icon/logo */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="Dasboard Kit Logo"
          classNames={{
            wrapper: "w-20",
          }}
        />
        <p className="text-foreground/60 font-medium text-lg">Dashboard Kit</p>
      </div>

      {header}

      {/* Form */}
      {children}

      {/* Footer or other message */}
      {footer}
    </div>
  );
};

export default BaseForm;
