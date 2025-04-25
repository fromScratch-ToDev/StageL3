import React from "react";

type EmailTemplateProps = {
  message: string;
};

const EmailTemplate: React.FC<EmailTemplateProps> = ({ message }) => {
  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
        <div className="text-base text-gray-800 whitespace-pre-line">
          {message}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
