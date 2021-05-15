import React, { useState, useEffect } from "react";

export default function About({ API_URL }) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch(`${API_URL}/about`);
    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => getAboutData(), []);

  return !about ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p dangerouslySetInnerHTML={{ __html: about.bio }}></p>
    </div>
  );
}
