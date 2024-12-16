import { useState } from "react";

const GradientGenerator = () => {
  // State to store the colors
  const [color1, setColor1] = useState("#ff7e5f");
  const [color2, setColor2] = useState("#feb47b");

  // Generate gradient style using Tailwind CSS for layout and custom styles
  const gradientStyle = {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
  };

  return (
    <div
      style={gradientStyle}
      className="flex h-screen w-screen flex-col items-center justify-center text-center text-white"
    >
      <h1 className="mb-8 text-4xl">Gradient Background Generator</h1>
      <div className="mb-4">
        <label className="mr-4 flex items-center">
          Color 1:
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="ml-2 border-none shadow-none outline-none"
          />
        </label>
      </div>

      <div className="mb-8">
        <label className="mr-4 flex items-center">
          Color 2:
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="ml-2 border-none"
          />
        </label>
      </div>
    </div>
  );
};

export default GradientGenerator;
