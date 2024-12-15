import React from "react";

const MapEmbed = () => {
  return (
    <div className=" overflow-hidden shadow-lg h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-0.6412!3d35.7062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzIyLjMiTiAwwrAzOCc0OC40Ilc!5e0!3m2!1sen!2sdz!4v1234567890!5m2!1sen!2sdz"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        title="Map"
      ></iframe>
    </div>
  );
};

export default MapEmbed;