// AICRMCard.tsx
import React from "react";

// Define types for the component props
interface AICRMCardProps {
  icon: React.ReactNode; // Icon passed as a React component (e.g., from react-icons)
  title: string;
  description: string;
  iconColor: string; // Hex color of the icon, e.g., '#10B981', '#3B82F6', etc.
}

const AICRMCard: React.FC<AICRMCardProps> = ({
  icon,
  title,
  description,
  iconColor,
}) => {
  // Generate the icon background color with 20% opacity
  const iconBackgroundColor = `${iconColor}33`; // 20% opacity of the color

  return (
    <div className="bg-white rounded-2xl custom-shadow-3 border-t-[15px] min-h-[380px] border-primary p-6 max-w-sm">
      {/* Icon container with dynamic background color */}
      <div
        className="p-3 rounded-lg w-fit"
        style={{
          backgroundColor: iconBackgroundColor, // Apply background color with opacity
        }}
      >
        {/* Apply the icon color directly */}
        <div
          style={{
            color: iconColor, // Apply the color to the icon itself
          }}
        >
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 w-[80%] mt-4">{title}</h3>

      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default AICRMCard;
